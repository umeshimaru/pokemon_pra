"use client";
import { fetchAllPokemon } from "./pokemonApi/FetchAllPokemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemoList] = useState<any[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function dataList() {
      const pokemons: any = await fetchAllPokemon();
      console.log(pokemons);
      setPokemoList(pokemons);
      
    }
    dataList();
  }, []);
  
  return (
    <>
      <h1>ポケモン図鑑</h1>

      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <img src={pokemon.image} alt={pokemon.name} />

            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
