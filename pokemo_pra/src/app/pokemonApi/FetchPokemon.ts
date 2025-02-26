import changeEnToJa from "../common/changeEnToJa";
export const fetchPokemon = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await res.json();
  type Poke = {
    id: number;
    name: string | undefined;
    image: string;
    height: number;
    weight: number;
    text: string | undefined;
    type: string | undefined;
  };

  async function name() {
    const result = await changeEnToJa(pokemonData.name, "name");
    return result === undefined ? undefined : result;
  }

  async function text() {
    const result = await changeEnToJa(pokemonData.name, "text");
    return result === undefined ? undefined : result;
  }
  async function type() {
    const result = await changeEnToJa(pokemonData.name, "type");
    return result === undefined ? undefined : result;
  }
  const pokemon: Poke = {
    id: pokemonData.id,
    name: await name(),
    height: pokemonData.height,
    weight: pokemonData.weight,
    image: pokemonData?.sprites?.front_default,
    text: await text(),
    type: await type(),
  };

  return pokemon;
};
