import { Link } from 'react-router';

export default function GameHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <p>Current score: </p>
      </div>
      <div>
        <p>Best score:</p>
      </div>
      <div>
        <Link to={'/'}>Back to main menu</Link>
      </div>
    </div>
  );
}
