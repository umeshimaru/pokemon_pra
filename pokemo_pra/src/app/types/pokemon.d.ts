type Poke = {
  id: number;
  name: string;
  image: string;
  types: { name: string }[];
};


export type SelectedPokemon = {
  id: number;
  name: string | undefined;
  image: string;
  height: number;
  weight: number;
  text: string | undefined;
  type: string | undefined;
};

export default Poke;
