import { Link } from 'react-router';
import Difficulty from './ui/Difficulty';
import Rules from './ui/Rules';
import ThemeButton from './ui/ThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../../utils/themeSlice';
import { setBestScore } from '../../utils/gameSlice';

export default function StartingScreen() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  const bestScore = useSelector((state) => state.game.bestScore);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(savedTheme));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const userBestScore = localStorage.getItem('userBestScore');
    dispatch(setBestScore(userBestScore));
  }, []);

  useEffect(() => {
    localStorage.setItem('userBestScore', bestScore);
  }, []);

  return (
    <section className="flex flex-col gap-y-5 items-center">
      <div className="flex flex-col item-center justify-center">
        <div className="flex justify-end">
          <ThemeButton>{theme === 'light' ? '🌙 ' : '☀️ '}</ThemeButton>
        </div>
        <span className="animate-bounce text-4xl text-center">🧠</span>
        <h1 className="text-2xl md:text-5xl text-center mb-3">MemoryGame</h1>
        <p className="text-center text-xl md:text-2xl ">
          Personal best: {bestScore}
        </p>
      </div>
      <Rules />
      <Difficulty />
      <Link
        to={'game'}
        className="p-3 font-semibold rounded-lg cursor-pointer hover:opacity-70 bg-indigo-700 text-white max-w-45 text-center">
        Start the Game
      </Link>
    </section>
  );
}
