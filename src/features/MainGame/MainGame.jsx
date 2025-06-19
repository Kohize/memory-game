import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setGameArray,
  setSelectedId,
  clearSelectedId,
  setBestScore,
} from '../../utils/gameSlice';
import shuffleArray from '../../utils/shuffleArray';
import GameHeader from './ui/GameHeader/GameHeader';

export default function MainGame() {
  const dispatch = useDispatch();
  const array = useSelector((state) => state.game.gameArray);
  const difficulty = useSelector((state) => state.game.difficulty);
  const bestScore = useSelector((state) => state.game.bestScore);
  const listOfSelectedId = useSelector((state) => state.game.selectedId);
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleDiffuculty = () => {
    switch (difficulty) {
      case 'easy':
        return '8';
      case 'medium':
        return '16';
      case 'hard':
        return '32';
    }
  };

  useEffect(() => {
    setLoading(true);
    setGameOver(false);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${handleDiffuculty()}`
        );
        const data = await response.json();
        dispatch(setGameArray(data.results));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    dispatch(clearSelectedId());
  }, []);

  useEffect(() => {
    if (array.length === 0) return;
    const getDetails = async () => {
      try {
        setLoading(true);
        const details = await Promise.all(
          array.map(async (item) => {
            const response = await fetch(item.url);
            return await response.json();
          })
        );
        setPokemonDetail(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [array]);

  const handleSelect = (item) => {
    dispatch(setBestScore(currentScore));
    setCurrentScore((prev) => prev + 1);
    if (listOfSelectedId.includes(item)) {
      setGameOver(true);
      setCurrentScore(0);
      dispatch(clearSelectedId());
      return;
    } else if (gameOver) {
      dispatch(clearSelectedId());
      setGameOver(false);
    }
    dispatch(setSelectedId(item));
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      dispatch(setBestScore(currentScore));
    }
  }, [currentScore]);

  {
    loading ? <div className="text-center py-10">Loading...</div> : null;
  }
  {
    error ? (
      <div className="text-center py-10">Something went wrong!</div>
    ) : null;
  }

  return (
    <div className="flex flex-col gap-y-5 justify-center items-center ">
      <GameHeader
        currentScore={currentScore}
        gameOver={gameOver}
        bestScore={bestScore}
      />
      <h1 className="font-bold text-3xl md:text-5xl select-none text-white mb-15 lg:mb-5">
        Memory Game
      </h1>
      <ul className="grid grid-rows-2 grid-cols-4 md:grid-cols-8 gap-5 px-2 py-5 overflow-y-scroll md:overflow-y-hidden">
        {pokemonDetail.length > 0 &&
          shuffleArray(pokemonDetail).map((item) => (
            <li
              onClick={() => handleSelect(item)}
              key={item.id}
              className="cursor-pointer hover:outline-teal-300 hover:outline-1 rounded-md hover:scale-105 dark:text-white">
              <p className="capitalize text-center font-bold text-xs md:text-sm select-none text-white">
                {item.name}
              </p>
              <img
                className={`${difficulty == 'hard' && 'lg:w-32 lg:h-32 w-16 h-16'}`}
                src={item?.sprites?.other['official-artwork']?.front_default}
                alt="pokemon image"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
