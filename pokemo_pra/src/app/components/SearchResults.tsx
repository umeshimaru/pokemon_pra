import Poke from "../types/pokemon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getTypeColor } from "../common/pokemonTypes";
import { useState } from "react";
import { SelectedPokemon } from "../types/pokemon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { fetchPokemon } from "../pokemonApi/FetchPokemon";
export default function SearchResults({
  searchPokemon,
}: {
  searchPokemon: Poke;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemon>(
      {} as SelectedPokemon
    );

  const handlePokemonClick = async (pokemon: Poke ) => {
    const selectedPokemon: SelectedPokemon = await fetchPokemon(pokemon.id);
    setSelectedPokemon(selectedPokemon);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* <div>
        <a href={`./searchPokemon?/${searchPokemon?.id}`}>
          <p>{searchPokemon?.id}</p>
          <img src={searchPokemon?.image} alt={searchPokemon?.name} />
          <p>{searchPokemon?.name}</p>
          {searchPokemon?.types?.map((type, typeIndex) => (
            <p key={`${searchPokemon?.name}-type-${typeIndex}`}>{type?.name}</p>
          ))}
        </a>
      </div> */}
       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
              <Card
                key={searchPokemon?.id}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/75 backdrop-blur-sm border-red-100"
                onClick={() => handlePokemonClick(searchPokemon)}
              >
                <CardHeader className="p-0 relative">
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 rounded-full text-sm font-medium shadow-md">
                    No.{String(searchPokemon?.id).padStart(3, "0")}
                  </div>
                  <img
                    src={searchPokemon?.image || "/placeholder.svg"}
                    alt={`${searchPokemon?.name}の画像`}
                    className="w-full h-42 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-1.5">
                    <h2 className="font-bold text-sm line-clamp-1">
                      {searchPokemon?.name}
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {searchPokemon?.types?.map((type, index) => (
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
            
          </div>

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
    </>
  );
}
