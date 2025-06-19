import { Link } from "react-router";

export default function GameHeader({ currentScore, gameOver, bestScore }) {
  return (
    <div className="grid grid-cols-3 pt-15 md:gap-x-20 text-center text-white font-bold md:text-2xl mb-10">
      <div>
        {gameOver ? (
          <p className=" text-red-700 font-semibold select-none">Game Over</p>
        ) : (
          <p className="select-none">Score: {currentScore}</p>
        )}
      </div>
      <div>
        <p className="select-none">Best score: {bestScore}</p>
      </div>
      <div className="hover:text-zinc-200">
        <Link to={"/"}>Back to main menu</Link>
      </div>
    </div>
  );
}
