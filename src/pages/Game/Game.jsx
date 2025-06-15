import React, { useEffect } from 'react';

export default function Game() {
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const data = await response.json();
        console.log(data);
        return data;
      };
      fetchData();
    } catch (error) {
      throw new Error(error);
    }
  }, []);
  return <div>Game</div>;
}
