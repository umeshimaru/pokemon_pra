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



const getTypeColor = (typeJa: string): string => {
  const typeColors: { [key: string]: string } = {
    ノーマル: "bg-gray-400",
    ほのお: "bg-red-500",
    みず: "bg-blue-500",
    くさ: "bg-green-500",
    でんき: "bg-yellow-400",
    こおり: "bg-cyan-300",
    かくとう: "bg-orange-700",
    どく: "bg-purple-500",
    じめん: "bg-yellow-600",
    ひこう: "bg-sky-400",
    エスパー: "bg-pink-400",
    むし: "bg-lime-500",
    いわ: "bg-yellow-800",
    ゴースト: "bg-purple-700",
    ドラゴン: "bg-indigo-600",
    あく: "bg-gray-700",
    はがね: "bg-gray-500",
    フェアリー: "bg-pink-300",
  };

  return typeColors[typeJa] || "bg-gray-500";
};

export default typeNamesList
export { getTypeColor }