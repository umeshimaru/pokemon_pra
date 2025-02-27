import  Poke  from "../types/pokemon";


export default function PokemonList({pokemonList}: {pokemonList: Poke[]}) {

  return (
    <>
  {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <a href={`./pokemon/${pokemon.id}`}>
              <p>No:{pokemon.id}</p>
              <img src={pokemon.image} alt={pokemon.name} />
            
              <p>{`名前:${pokemon.name}`}</p>
              <p>タイプ:</p>
              {pokemon.types.map((type, typeIndex) => (
                <p key={`${pokemon.name}-type-${typeIndex}`}>{type.name}</p>
              ))}
            </a>
          </li>
        ))}
</>
  )

}
