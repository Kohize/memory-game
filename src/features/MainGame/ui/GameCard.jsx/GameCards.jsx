import { useSelector } from 'react-redux';

export default function GameCards({ cardDetails, shuffleArray, handleSelect }) {
  const difficulty = useSelector((state) => state.game.difficulty);
  return (
    <>
      {shuffleArray(cardDetails).map((item) => (
        <li
          onClick={() => handleSelect(item)}
          key={item.id}
          className="cursor-pointer hover:outline-teal-300 hover:outline-1 rounded-md hover:scale-105 dark:text-white">
          <p className="capitalize text-center font-bold text-xs md:text-sm select-none text-black dark:text-white">
            {item.name}
          </p>
          <img
            className={`${difficulty == 'hard' && 'lg:w-28 lg:h-28 w-16 h-16'}`}
            loading="lazy"
            src={item?.sprites}
            alt="pokemon image"
          />
        </li>
      ))}
    </>
  );
}
