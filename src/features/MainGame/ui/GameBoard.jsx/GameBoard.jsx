import GameCards from '../GameCard.jsx/GameCards';

export default function GameBoard({
  showCards,
  cardDetails,
  loading,
  shuffleArray,
  handleSelect,
}) {
  return (
    <ul className="grid grid-rows-2 grid-cols-4 md:grid-cols-8 gap-5 px-2 py-5 overflow-y-scroll md:overflow-hidden">
      {showCards == true && cardDetails.length > 0 && !loading && (
        <GameCards
          cardDetails={cardDetails}
          shuffleArray={shuffleArray}
          handleSelect={handleSelect}
        />
      )}
    </ul>
  );
}
