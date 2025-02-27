import changeEnToJa from "../common/changeEnToJa";
import { SelectedPokemon } from "../types/pokemon";
export const fetchPokemon = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonData = await res.json();
 

  async function name() {
    const result = await changeEnToJa(pokemonData.name, "name");
    return result === undefined ? undefined : result;
  }

  async function text() {
    const result = await changeEnToJa(pokemonData.name, "text");
    return result === undefined ? undefined : result.replace(/\s+/g, "");
  }
  async function type() {
    const result = await changeEnToJa(pokemonData.name, "type");
    return result === undefined ? undefined : result;
  }

  function toKilograms(weight: number) {
    return weight / 10.0;
  }
  function toMeters(height: number) {
    return height / 10.0;
  }

  const pokemon: SelectedPokemon = {
    id: pokemonData.id,
    name: await name(),
    height: toMeters(pokemonData.height),
    weight: toKilograms(pokemonData.weight),
    image: pokemonData?.sprites?.front_default,
    text: await text(),
    type: await type(),
  };

  return pokemon;
};
