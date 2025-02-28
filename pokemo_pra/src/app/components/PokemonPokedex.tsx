import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Poke from "../types/pokemon";
import { getTypeColor } from "../common/pokemonTypes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { SelectedPokemon } from "../types/pokemon";
import { fetchPokemon } from "../pokemonApi/FetchPokemon";
import SearchResults from "./SearchResults";

export default function PokemonPokedex({
  pokemonList,
}: {
  pokemonList: Poke[];
}) {
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon>(
    {} as SelectedPokemon
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState<string>("");
  const [searchPokemon, setPokemon] = useState<Poke | undefined>(undefined);

  /*************  ✨ Codeium Command ⭐  *************/
  /**
   * Retrieves the text input from the element with id "input-text" and checks if it is in Katakana.
   * If the input is valid Katakana and a matching Pokémon is found in the list, sets it as the search result.
   * Otherwise, sets an appropriate error message.
   */

  /******  5a1007b9-e205-412f-92b4-22689605ec17  *******/
  const getInputText = () => {
    const inputHtml = document.getElementById("input-text") as HTMLInputElement;
    const inputText: string = inputHtml.value;
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
  };

  const handlePokemonClick = async (pokemon: Poke) => {
    const selectedPokemon: SelectedPokemon = await fetchPokemon(pokemon.id);
    setSelectedPokemon(selectedPokemon);
    setIsModalOpen(true);
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
          <p className="text-center text-muted-foreground ">
            全国のポケモンを探そう！
            
          </p>
          <p className="text-center text-muted-foreground mb-8">
            ポケモン数:{pokemonList.length}匹
          </p>

          {/* 検索フォーム */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="flex gap-2">
              <Input
                placeholder="ポケモンの名前(カタカナ)を入力してください"
                className="flex-1 bg-white/75 backdrop-blur-sm border-red-200 focus:border-red-400 focus:ring-red-400"
                id="input-text"
              />
              <Button
                className="bg-red-600 hover:bg-red-700 text-white gap-2"
                onClick={getInputText}
              >
                <Search className="h-4 w-4 " />
                検索
              </Button>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
         
          </div>
          {searchPokemon && <SearchResults searchPokemon={searchPokemon} />}

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pokemonList.map((pokemon) => (
              <Card
                key={pokemon.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/75 backdrop-blur-sm border-red-100"
                onClick={() => handlePokemonClick(pokemon)}
              >
                <CardHeader className="p-0 relative">
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-sm font-medium shadow-md">
                    No.{String(pokemon.id).padStart(3, "0")}
                  </div>
                  <img
                    src={pokemon.image || "/placeholder.svg"}
                    alt={`${pokemon.name}の画像`}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
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
      {/* ポケモン詳細モーダル */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          {selectedPokemon && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-xl font-bold">
                    {selectedPokemon.name}
                  </DialogTitle>
                  <span className="text-sm text-muted-foreground">
                    No.{String(selectedPokemon.id).padStart(3, "0")}
                  </span>
                </div>
              </DialogHeader>

              <div className="relative aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={selectedPokemon.image || "/placeholder.svg"}
                  alt={`${selectedPokemon.name}の画像`}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              <div className="grid gap-4">
                <div className="flex gap-2">
                  <span className="text-muted-foreground">{`タイプ: ${selectedPokemon.type}`}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">たかさ:</span>
                    <span className="font-medium">
                      {selectedPokemon.height}m
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">おもさ:</span>
                    <span className="font-medium">
                      {selectedPokemon.weight}kg
                    </span>
                  </div>
                </div>

                <DialogDescription
                  className="text-sm mt-2"
                  style={{ borderTop: "1px solid #999999" }}
                >
                  <span>特徴: </span>
                  {selectedPokemon.text}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
