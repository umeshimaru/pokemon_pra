import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CardGrid() {
  const cards = [
    {
      id: 1,
      name: "ベーシックデザイン",
      type: "ビジネス",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 2,
      name: "モダンポートフォリオ",
      type: "ポートフォリオ",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 3,
      name: "シンプルブログ",
      type: "ブログ",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 4,
      name: "ECストア",
      type: "コマース",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 5,
      name: "クリエイティブ",
      type: "ポートフォリオ",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 6,
      name: "コーポレート",
      type: "ビジネス",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 7,
      name: "ランディング",
      type: "マーケティング",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 8,
      name: "ニュースサイト",
      type: "メディア",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 9,
      name: "個人ブログ",
      type: "ブログ",
      image: "/placeholder.svg?height=160&width=320",
    },
    {
      id: 10,
      name: "ショーケース",
      type: "ポートフォリオ",
      image: "/placeholder.svg?height=160&width=320",
    },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">デザインテンプレート</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {cards.map((card) => (
          <Card key={card.id} className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-0 relative">
              <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-0.5 rounded-full text-sm font-medium">
                No.{String(card.id).padStart(2, "0")}
              </div>
              <img
                src={card.image || "/placeholder.svg"}
                alt={`${card.name}のプレビュー`}
                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </CardHeader>
            <CardContent className="p-3">
              <div className="space-y-1.5">
                <h2 className="font-semibold text-sm line-clamp-1">{card.name}</h2>
                <Badge variant="secondary" className="text-xs">
                  {card.type}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

