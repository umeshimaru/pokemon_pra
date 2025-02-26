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
        <p>{`名前:${pokemon.name}`}</p>
        <p>{`タイプ:${pokemon.type}`}</p>
        <p>{`高さ:${pokemon.height}`}</p>
        <p>{`重さ:${pokemon.weight}`}</p>
        <br />
        <p>説明:</p>
        <p>{pokemon.text}</p>
      </div>
    </>
  );
}
