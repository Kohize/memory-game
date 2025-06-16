import { Link } from 'react-router';

export default function GameHeader() {
  return (
    <div className="grid grid-cols-3 pt-15 text-center text-white font-bold text-2xl">
      <div>
        <p className="select-none">Current score: </p>
      </div>
      <div>
        <p className="select-none">Best score:</p>
      </div>
      <div className="hover:text-zinc-200">
        <Link to={'/'}>Back to main menu</Link>
      </div>
    </div>
  );
}
