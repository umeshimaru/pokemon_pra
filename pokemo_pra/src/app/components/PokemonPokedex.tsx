import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Poke from "../types/pokemon";

export default function PokemonPokedex({
  pokemonList,
}: {
  pokemonList: Poke[];
}) {
 
  const getTypeColor = (typeJa: string) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-500 to-red-700 relative">
      {/* 背景のポケモンパターン */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-10 opacity-10 rotate-12">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt=""
            className="w-96 h-96"
          />
        </div>
        <div className="absolute -left-20 top-1/3 opacity-10 -rotate-12">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt=""
            className="w-72 h-72"
          />
        </div>
        <div className="absolute right-1/4 bottom-1/4 opacity-10 rotate-45">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt=""
            className="w-48 h-48"
          />
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-center mb-2 text-red-600">
            ポケモン図鑑
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            全国のポケモンを探そう！
          </p>

          {/* 検索フォーム */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="ポケモンの名前(カタカナ)を入力してください"
                className="flex-1 bg-white/75 backdrop-blur-sm border-red-200 focus:border-red-400 focus:ring-red-400"
              />
              <Button className="bg-red-600 hover:bg-red-700 text-white gap-2">
                <Search className="h-4 w-4" />
                検索
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pokemonList.map((pokemon) => (
              <Card
                key={pokemon.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/75 backdrop-blur-sm border-red-100"
              >
                <CardHeader className="p-0 relative">
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-sm font-medium shadow-md">
                    No.{String(pokemon.id).padStart(3, "0")}
                  </div>
                  <img
                    src={pokemon.image || "/placeholder.svg"}
                    alt={`${pokemon.name}の画像`}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-1.5">
                    <h2 className="font-bold text-sm line-clamp-1">
                      {pokemon.name}
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {pokemon.types.map((type, index) => (
                        <Badge
                          key={index}
                          className={`${getTypeColor(
                            type.name
                          )} border-0 text-white text-xs shadow-sm`}
                        >
                          {type.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
