import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameArray } from '../../utils/gameSlice';

export default function Game() {
  const array = useSelector((state) => state.game.gameArray);
  const dispatch = useDispatch();
  const [pokemonDetail, setPokemonDetail] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=40'
        );
        const data = await response.json();
        dispatch(setGameArray(data.results));
      };
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    const getDetails = async () => {
      const details = await Promise.all(
        array.map(async (item) => {
          const response = await fetch(item.url);
          return await response.json();
        })
      );
      setPokemonDetail(details);
    };
    getDetails();
  }, [array]);
  console.log(pokemonDetail);

  return (
    <div>
      <h1>Memory Game</h1>
      <ul>
        {pokemonDetail.map((item) => (
          <li>
            <p>{item.name}</p>
            <img
              src={item.sprites.other['official-artwork'].front_default}
              alt="pokemon image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
