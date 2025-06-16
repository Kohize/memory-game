import { Link } from 'react-router';
import Difficulty from './ui/Difficulty';
import Rules from './ui/Rules';
import ThemeButton from './ui/ThemeButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setTheme } from '../../utils/themeSlice';

export default function StartingScreen() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme' || 'light');
    dispatch(setTheme(savedTheme));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <section className="flex flex-col gap-y-5 items-center">
      <div className="flex flex-col item-center justify-center">
        <span className="animate-bounce text-4xl text-center">🧠</span>
        <h1 className="text-5xl text-center">MemoryGame</h1>
        <p className="text-center text-2xl text-lime-400">Personal best: 10</p>
      </div>
      <div>
        <ThemeButton>{theme === 'light' ? '🌙 ' : '☀️ '}</ThemeButton>
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
