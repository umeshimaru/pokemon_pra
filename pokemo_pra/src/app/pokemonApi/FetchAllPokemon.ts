type Pokemon = {
  name: string;
  url: string;
};


export const fetchAllPokemon = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"
    );
    if (!res.ok) {
      console.log("エラーが発生しました");
    }
    const data = await res.json();
    const pokemons: Pokemon[] = data.results;
    const pokemonList: any[] = [];
// (async ()=>{
  for await (const pokemon of pokemons){ 
const res =    await fetch(pokemon.url)
const pokemonData = await  res.json()
const poke :{name: string,image:string} = {
  name: pokemonData.name,
  image: pokemonData?.sprites?.front_default,
};
pokemonList.push(poke)
  }
// })()
    return pokemonList;
  } catch (error) {
    console.error("ポケモン情報取得エラー:", error);
  }
};
