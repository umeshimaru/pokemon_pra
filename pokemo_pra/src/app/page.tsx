"use client";
// import { fetchAllPokemon } from "./pokemonApi/FetchAllPokemon";
// import { useEffect, useState } from "react";
// import PokemonList from "./components/PokemonList";
// import Poke from "./types/pokemon";
// import SearchResults from "./components/SearchResults";
import PokemonPokedex from "../../pokemon-pokedex";

export default function Home() {
//   const [pokemonList, setPokemoList] = useState<Poke[]>([]);
//   const [searchPokemon, setPokemon] = useState<Poke | undefined>(undefined);
//   const [error, setError] = useState<string>("");

  // useEffect(() => {
  //   async function dataList() {
  //     const pokemons: Poke[] = await fetchAllPokemon();
  //     setPokemoList(pokemons);
  //   }
  //   dataList();
  // }, []);

  // const getInputText = () => {
  //   const inputHtml = document.getElementById("input-text") as HTMLInputElement;
  //   const inputText: string = inputHtml.value;
  //   const regex = /^[ァ-ヶー]+$/;
  //   const katakana: boolean = regex.test(inputText);
  //   let error: string;
  
  //   if (inputText && katakana) {
  //     const pokemon: Poke | undefined = pokemonList.find(
  //       (pokemon: Poke) => pokemon.name === inputText
  //     );
  
  //     if (pokemon === undefined) {
  //       error = "ポケモンが見つかりません";
  //       setError(error);
  //       return;
  //     }
  //     setPokemon(pokemon);
  //   } else {
  //     error = "カタカナでポケモンの名前を入力してください";
  //     setError(error);
  //   }
  // }

  
  return (
    <>
      {/* <h1>ポケモン図鑑</h1>
      <input type="text" placeholder="ヒトカゲ" id="input-text" />
      <button onClick={getInputText}>検索</button> */}
      {/* {error && <div>{error}</div>}
      {searchPokemon && <SearchResults searchPokemon={searchPokemon} />}
      <ul>
        <PokemonList pokemonList={pokemonList} />
      </ul> */}
      <PokemonPokedex />
    </>
  );
}
