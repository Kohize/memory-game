import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameArray } from '../../utils/gameSlice';
import lightBackground from '../../assets/backgrounds/light-background.png';
import shuffleArray from '../../utils/shuffleArray';
import GameHeader from '../../features/MainGame/ui/GameHeader/GameHeader';

export default function Game() {
  const array = useSelector((state) => state.game.gameArray);
  const difficulty = useSelector((state) => state.game.difficulty);
  console.log(difficulty);
  const dispatch = useDispatch();
  const [pokemonDetail, setPokemonDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleDiffuculty = () => {
    switch (difficulty) {
      case 'easy':
        return '8';
      case 'medium':
        return '16';
      case 'hard':
        return '32';
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${handleDiffuculty()}`
        );
        const data = await response.json();
        dispatch(setGameArray(data.results));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (array.length === 0) return;
    const getDetails = async () => {
      try {
        setLoading(true);
        const details = await Promise.all(
          array.map(async (item) => {
            const response = await fetch(item.url);
            return await response.json();
          })
        );
        setPokemonDetail(details);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [array]);

  console.log(pokemonDetail);

  {
    loading ? <div className="text-center py-10">Loading...</div> : null;
  }

  return (
    <div
      className="flex flex-col gap-y-5 justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${lightBackground})` }}>
      <GameHeader />
      <h1 className="font-bold text-5xl">Memory Game</h1>
      <ul className="grid grid-rows-2 grid-cols-4 gap-5">
        {pokemonDetail.length > 0 &&
          shuffleArray(pokemonDetail).map((item) => (
            <li
              key={item.id}
              className="cursor-pointer border-1 border-teal-300 rounded-md hover:scale-105">
              <p className="capitalize text-center font-bold text-lg">
                {item.name}
              </p>
              <img
                className="w-56 h-56"
                src={item?.sprites?.other['official-artwork']?.front_default}
                alt="pokemon image"
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
