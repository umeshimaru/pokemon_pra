"use client";
import { fetchAllPokemon } from "./pokemonApi/FetchAllPokemon";
import { useEffect, useState } from "react";

type Poke = {
  id: number;
  name: string;
  image: string;
  types: { name: string }[];
};

export default function Home() {
  const [pokemonList, setPokemoList] = useState<Poke[]>([]);
  const [searchPokemon, setPokemon] = useState<Poke | undefined>(undefined);
  const [error, setError] = useState<string>("");
  console.log(error);
  // const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function dataList() {
      const pokemons: Poke[] = await fetchAllPokemon();
      setPokemoList(pokemons);
    }
    dataList();
  }, []);

  const getInputText = () => {
    const inputHtml = document.getElementById("input-text") as HTMLInputElement;
    const InputText: string = inputHtml.value;

    const regex = /^[ァ-ヶー]+$/;
    const katakana: boolean = regex.test(InputText);
    let error: string;

    if (InputText && katakana) {
      const pokemon: Poke | undefined = pokemonList.find(
        (pokemon: Poke) => pokemon.name === InputText
      );

      if (pokemon === undefined) {
        error = "ポケモンが見つかりません";
        setError(error);
        return;
      }
      setPokemon(pokemon);
    } else {
      error = "カタカナでポケモンの名前を入力してください";
      setError(error);
    }
  };
  return (
    <>
      <h1>ポケモン図鑑</h1>
      <input type="text" placeholder="ヒトカゲ" id="input-text" />
      <button onClick={getInputText}>検索</button>
      {error && <div>{error}</div>}
      {searchPokemon && (
        <div>
          <a href={`./pokemon/${searchPokemon.id}`}>
            <p>{searchPokemon.id}</p>
            <img src={searchPokemon.image} alt={searchPokemon.name} />
            <p>{searchPokemon.name}</p>
            {searchPokemon.types.map((type, typeIndex) => (
              <p key={`${searchPokemon.name}-type-${typeIndex}`}>{type.name}</p>
            ))}
          </a>
        </div>
      )}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <a href={`./pokemon/${pokemon.id}`}>
              <p>No:{pokemon.id}</p>
              <img src={pokemon.image} alt={pokemon.name} />
            
              <p>{`名前:${pokemon.name}`}</p>
              <p>タイプ:</p>
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
