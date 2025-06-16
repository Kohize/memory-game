import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty } from '../../../utils/gameSlice';

export default function Difficulty() {
  const dispatch = useDispatch();
  const difficulty = useSelector((state) => state.game.difficulty);
  return (
    <div>
      <p className="font-semibold text-xl text-center mb-4 capitalize">
        Current Difficulty:{' '}
        <span
          className={
            difficulty === 'easy'
              ? 'text-green-700'
              : difficulty === 'medium'
              ? 'text-yellow-700'
              : difficulty === 'hard'
              ? 'text-red-700'
              : null
          }>
          {difficulty}
        </span>
      </p>
      <div className="flex gap-x-5 justify-center items-center">
        <button
          onClick={() => dispatch(setDifficulty('easy'))}
          className={`${
            difficulty === 'easy' ? 'bg-green-700' : 'bg-gray-900'
          } p-3 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70`}>
          Easy
        </button>
        <button
          onClick={() => dispatch(setDifficulty('medium'))}
          className={`${
            difficulty === 'medium' ? 'bg-yellow-700' : 'bg-gray-900'
          } p-3 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70`}>
          Medium
        </button>
        <button
          onClick={() => dispatch(setDifficulty('hard'))}
          className={`${
            difficulty === 'hard' ? 'bg-red-700' : 'bg-gray-900'
          } p-3 text-white font-semibold rounded-lg cursor-pointer hover:opacity-70`}>
          Hard
        </button>
      </div>
    </div>
  );
}
