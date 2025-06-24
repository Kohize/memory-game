import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedId,
  clearSelectedId,
  setBestScore,
} from '../../utils/gameSlice';
import GameHeader from './ui/GameHeader/GameHeader';
import useGameArray from '../../utils/useShuffleArray';
import getRandomNumber from '../../utils/getRandomNumber';

export default function MainGame() {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.game.difficulty);
  const bestScore = useSelector((state) => state.game.bestScore);
  const listOfSelectedId = useSelector((state) => state.game.selectedId);
  const [cardDetails, setCardDetails] = useState([]);
  const [showCards, setShowCards] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isThreshholdPassed, setIsThreshholdPassed] = useState(false);
  const { shuffleArray, cardCount } = useGameArray();

  useEffect(() => {
    setLoading(true);
    setGameOver(false);
    const fetchData = async () => {
      try {
        const savedData = localStorage.getItem('details');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setCardDetails(parsedData);
          setLoading(false);
        } else {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${getRandomNumber()}`
          );
          const data = await response.json();
          const pokemonDetail = await Promise.all(
            data.results.map(async (item) => {
              const response = await fetch(item.url);
              return response.json();
            })
          );
          const simplifiedPokemons = pokemonDetail.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites.other['official-artwork'].front_default,
          }));
          localStorage.setItem('details', JSON.stringify(simplifiedPokemons));
          setCardDetails(simplifiedPokemons);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gameOver, isThreshholdPassed]);

  const handleSelect = (item) => {
    dispatch(setBestScore(currentScore));
    setCurrentScore((prev) => prev + 1);
    if (listOfSelectedId.includes(item)) {
      setGameOver(true);
      setIsThreshholdPassed(false);
      localStorage.removeItem('details');
      setShowCards(false);
      setCurrentScore(0);
      setCorrectAnswers(0);
      dispatch(clearSelectedId());
      setTimeout(() => {
        setShowCards(true);
      }, 500);
      return;
    } else if (gameOver) {
      dispatch(clearSelectedId());
      setGameOver(false);
      setCorrectAnswers(0);
      setIsThreshholdPassed(false);
      localStorage.removeItem('details');
    } else if (correctAnswers === cardCount) {
      setIsThreshholdPassed(true);
      setCorrectAnswers(0);
      localStorage.removeItem('details');
      setShowCards(false);
      setTimeout(() => {
        setShowCards(true);
        setIsThreshholdPassed(false);
      }, 500);
    } else if (currentScore > bestScore) {
      dispatch(setBestScore(currentScore));
    }
    dispatch(setSelectedId(item));
    setCorrectAnswers((prev) => prev + 1);
  };

  // useEffect(() => {
  //   if (correctAnswers === cardCount) {
  //     setIsThreshholdPassed(true);
  //     setCorrectAnswers(0);
  //     localStorage.removeItem('details');
  //     setShowCards(false);
  //     setTimeout(() => {
  //       setShowCards(true);
  //       setIsThreshholdPassed(false);
  //     }, 500);
  //   }
  // }, [correctAnswers, cardCount]);

  // useEffect(() => {
  //   if (currentScore > bestScore) {
  //     dispatch(setBestScore(currentScore));
  //   }
  // }, [currentScore]);

  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center items-center ">
        <GameHeader
          currentScore={currentScore}
          gameOver={gameOver}
          bestScore={bestScore}
        />
        <h1 className="font-bold text-3xl md:text-5xl select-none text-white mb-15 lg:mb-5">
          Memory Game
        </h1>
        {loading && <p className="text-center py-10">Loading...</p>}
        {error && <p className="text-center py-10">{error}</p>}
        <ul className="grid grid-rows-2 grid-cols-4 md:grid-cols-8 gap-5 px-2 py-5 overflow-y-scroll md:overflow-hidden">
          {showCards &&
            cardDetails.length > 0 &&
            shuffleArray(cardDetails).map((item) => (
              <li
                onClick={() => handleSelect(item)}
                key={item.id}
                className="cursor-pointer hover:outline-teal-300 hover:outline-1 rounded-md hover:scale-105 dark:text-white">
                <p className="capitalize text-center font-bold text-xs md:text-sm select-none text-black dark:text-white">
                  {item.name}
                </p>
                <img
                  className={`${difficulty == 'hard' && 'lg:w-28 lg:h-28 w-16 h-16'}`}
                  loading="lazy"
                  src={item?.sprites}
                  alt="pokemon image"
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
