import typeNamesList from "../common/pokemonTypes";
type Pokemon = {
  name: string;
  url: string;
};



type Poke = {
  id: number;
  name: string;
  image: string;
  types: { name: string }[];
};

async function changePokemonEnNameToJaName(enName: string): Promise<string> {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${enName}`
  );

  const data = await res.json();
  const jaName: string = data.names[0].name;
  return jaName;
}

function changeTypeEnNameToJaName(enName: string) {
  const typeJaName = typeNamesList.find((t) => t.name === enName);
  return typeJaName?.nameJa;
}

export const fetchAllPokemon = async () => {
  try {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=200&offset=0"
    );
    if (!res.ok) {
      console.log("エラーが発生しました");
    }
    const data = await res.json();
    const pokemons: Pokemon[] = data.results;
    const pokemonList: Poke[] = [];

    for await (const pokemon of pokemons) {
      const res = await fetch(pokemon.url);
      const pokemonData = await res.json();

      const poke: Poke = {
        id: pokemonData.id,
        name: await changePokemonEnNameToJaName(pokemonData.name),
        image: pokemonData?.sprites?.front_default,
        types: pokemonData?.types?.map((t: { type: { name: string } }) => ({
          name: changeTypeEnNameToJaName(t.type.name),
        })),
      };

      pokemonList.push(poke);
    }

    return pokemonList;
  } catch (error) {
    console.error("ポケモン情報取得エラー:", error);
    return [];
  }
};
