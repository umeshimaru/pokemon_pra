import Poke from "../types/pokemon";
export default function SearchResults({
  searchPokemon,
}: {
  searchPokemon: Poke | undefined;
}) {
  return (
    <>
      <div>
        <a href={`./pokemon/${searchPokemon?.id}`}>
          <p>{searchPokemon?.id}</p>
          <img src={searchPokemon?.image} alt={searchPokemon?.name} />
          <p>{searchPokemon?.name}</p>
          {searchPokemon?.types?.map((type, typeIndex) => (
            <p key={`${searchPokemon?.name}-type-${typeIndex}`}>{type?.name}</p>
          ))}
        </a>
      </div>
    </>
  );
}
