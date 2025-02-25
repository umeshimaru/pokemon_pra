"use client";
import { fetchAllPokemon } from "./pokemonApi/FetchAllPokemon";
import { useEffect, useState } from "react";

type Poke = {
  id: number;
  name: Promise<string>;
  image: string;
  types: { name: string }[];
};

export default function Home() {
  const [pokemonList, setPokemoList] = useState<Poke[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function dataList() {
      const pokemons: Poke[] = await fetchAllPokemon();
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
            <a href={`./pokemon/${pokemon.id}`}>
              <p>No:{pokemon.id}</p>
              <img src={pokemon.image} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              {pokemon.types.map((type, typeIndex) => (
                <p key={`${pokemon.name}-type-${typeIndex}`}>{type.name}</p>
              ))}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
