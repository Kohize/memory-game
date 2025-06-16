import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../utils/themeSlice';

export default function ThemeButton({ children }) {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-3 font-semibold bg-indigo-600 text-zinc-50 rounded-lg hover:opacity-90 cursor-pointer">
      {children}
    </button>
  );
}
