import GameHeader from './ui/GameHeader/GameHeader';
import GameBoard from './ui/GameBoard/GameBoard';
import useGameLogic from '../../utils/useGameLogic';
import useShuffleArray from '../../utils/useShuffleArray';
import Loader from './ui/Loader/Loader';

export default function MainGame() {
  const {
    cardDetails,
    loading,
    showCards,
    error,
    handleSelect,
    bestScore,
    currentScore,
    gameOver,
  } = useGameLogic();
  const { shuffleArray } = useShuffleArray();

  return (
    <>
      <div className="flex flex-col gap-y-5 justify-center items-center ">
        <GameHeader
          currentScore={currentScore}
          gameOver={gameOver}
          bestScore={bestScore}
        />
        <h1 className="font-bold text-3xl md:text-5xl select-none text-white mb-15 lg:mb-5">
          Memory Game
        </h1>
        {loading && <Loader />}
        {error && <p className="text-center py-10">{error}</p>}
        <GameBoard
          showCards={showCards}
          cardDetails={cardDetails}
          loading={loading}
          shuffleArray={shuffleArray}
          handleSelect={handleSelect}
        />
      </div>
    </>
  );
}
