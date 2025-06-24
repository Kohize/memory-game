import { useEffect, useState } from 'react';
import {
  setSelectedId,
  clearSelectedId,
  setBestScore,
} from '../utils/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import useFetchPokemons from '../utils/useFetchPokemons';
import useShuffleArray from './useShuffleArray';

export default function useGameLogic() {
  const dispatch = useDispatch();
  const bestScore = useSelector((state) => state.game.bestScore);
  const listOfSelectedId = useSelector((state) => state.game.selectedId);
  const [cardDetails, setCardDetails] = useState([]);
  const [showCards, setShowCards] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isThreshholdPassed, setIsThreshholdPassed] = useState(false);
  const { cardCount } = useShuffleArray();

  const {
    data: data,
    loading,
    error,
  } = useFetchPokemons(gameOver || isThreshholdPassed);

  useEffect(() => {
    if (data.length > 0) {
      setCardDetails(data);
    }
  }, [data]);

  const handleSelect = (item) => {
    dispatch(setBestScore(currentScore));
    setCurrentScore((prev) => prev + 1);
    setCorrectAnswers((prev) => prev + 1);
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
        setGameOver(false);
      }, 500);
      return;
    } else if (currentScore > bestScore) {
      dispatch(setBestScore(currentScore));
    }
    dispatch(setSelectedId(item));
  };

  useEffect(() => {
    if (correctAnswers === cardCount && cardCount > 0) {
      setIsThreshholdPassed(true);
      setCorrectAnswers(0);
      localStorage.removeItem('details');
      setShowCards(false);
      setTimeout(() => {
        setShowCards(true);
        setIsThreshholdPassed(false);
      }, 500);
    }
  }, [correctAnswers, cardCount]);
  return {
    cardDetails,
    loading,
    showCards,
    error,
    handleSelect,
    currentScore,
    bestScore,
    gameOver,
  };
}
