import { fetchPokemon } from "@/app/pokemonApi/FetchPokemon";

export default async function Pokemon({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const pokemon = await fetchPokemon(Number(id));

  return (
    <>
      <div>
        <p>{pokemon.id}</p>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.name}</p>
        <p>{pokemon.type}</p>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
        <p>{pokemon.text}</p>
      </div>
    </>
  );
}
