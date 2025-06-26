import { useEffect, useState } from 'react';
import getRandomNumber from '../utils/getRandomNumber';

export default function useFetchPokemons(updateData) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const savedData = localStorage.getItem('details');
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setData(parsedData);
          setLoading(false);
        } else {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${getRandomNumber()}`
          );
          console.log('fetched');
          const data = await response.json();
          const pokemonDetail = await Promise.all(
            data.results.map(async (item) => {
              const response = await fetch(item.url);
              return response.json();
            })
          );
          const simplifiedPokemons = pokemonDetail.map((pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites.other['official-artwork'].front_default,
          }));
          localStorage.setItem('details', JSON.stringify(simplifiedPokemons));
          setData(simplifiedPokemons);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [updateData]);
  return { loading, data, error };
}
