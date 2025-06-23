import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';

export default function useGameArray() {
  const difficulty = useSelector((state) => state.game.difficulty);

  const cardCount = useMemo(() => {
    switch (difficulty) {
      case 'easy':
        return 8;
      case 'medium':
        return 16;
      case 'hard':
        return 32;
      default:
        return 8;
    }
  }, [difficulty]);

  const shuffleArray = useCallback(
    (array) => {
      const newArray = [...array];
      for (let i = cardCount - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray.slice(0, cardCount);
    },
    [cardCount]
  );

  return { shuffleArray, cardCount };
}
