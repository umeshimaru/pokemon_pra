import Poke from "../types/pokemon";
export default function patternChecked(inputText: string) {
  const regex = /^[ァ-ヶー]+$/;
  const katakana: boolean = regex.test(inputText);
  let error: string;

  if (inputText && katakana) {
    const pokemon: Poke | undefined = pokemonList.find(
      (pokemon: Poke) => pokemon.name === inputText
    );

    if (pokemon === undefined) {
      error = "ポケモンが見つかりません";
      setError(error);
      return;
    }
    setPokemon(pokemon);
  } else {
    error = "カタカナでポケモンの名前を入力してください";
    setError(error);
  }
}
