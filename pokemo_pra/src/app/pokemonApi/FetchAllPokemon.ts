type Pokemon = {
  name: string;
  url: string;
};

const typeNamesList: { name: string; nameJa: string }[] = [
  { name: "normal", nameJa: "ノーマル" },
  { name: "fire", nameJa: "ほのお" },
  { name: "water", nameJa: "みず" },
  { name: "grass", nameJa: "くさ" },
  { name: "electric", nameJa: "でんき" },
  { name: "ice", nameJa: "こおり" },
  { name: "fighting", nameJa: "かくとう" },
  { name: "poison", nameJa: "どく" },
  { name: "ground", nameJa: "じめん" },
  { name: "flying", nameJa: "ひこう" },
  { name: "psychic", nameJa: "エスパー" },
  { name: "bug", nameJa: "むし" },
  { name: "rock", nameJa: "いわ" },
  { name: "ghost", nameJa: "ゴースト" },
  { name: "dragon", nameJa: "ドラゴン" },
  { name: "dark", nameJa: "あく" },
  { name: "steel", nameJa: "はがね" },
  { name: "fairy", nameJa: "フェアリー" },
];

type Poke = {
  id: number;
  name: Promise<string>;
  image: string;
  types: { name: string }[];
};

async function  changePokemonEnNameToJaName(enName: string): Promise<string> {

const res =   await fetch(`https://pokeapi.co/api/v2/pokemon-species/${enName}`)

const data = await res.json()
const jaName : string  = data.names[0].name
return jaName
}

function changeEnNameToJaName(enName: string) {
  const typeJaName = typeNamesList.find((t) => t.name === enName);
  return typeJaName?.nameJa;
}

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
    const pokemonList: Poke[] = [];

    for await (const pokemon of pokemons) {
      const res = await fetch(pokemon.url);
      const pokemonData = await res.json();
    
      const poke: Poke = {
        id: pokemonData.id,
        name: changePokemonEnNameToJaName(pokemonData.name), 
        image: pokemonData?.sprites?.front_default,
        types: pokemonData?.types?.map((t: { type: { name: string } }) => ({
          name: changeEnNameToJaName(t.type.name),
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
