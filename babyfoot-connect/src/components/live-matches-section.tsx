import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Link from "next/link"

const liveMatches = [
  {
    id: "1",
    type: "1v1",
    playerRed: "Thomas L.",
    playerBlue: "Sarah K.",
    scoreRed: 8,
    scoreBlue: 6,
    babyfoot: "Table 1",
  },
  {
    id: "2",
    type: "2v2",
    teamRed: "Les Tornades",
    teamBlue: "Fire Squad",
    scoreRed: 5,
    scoreBlue: 5,
    babyfoot: "Table 2",
  },
]

export function LiveMatchesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Matchs en direct</h2>
          <Button variant="outline" asChild>
            <Link href="/matches">Voir tous les matchs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {liveMatches.map((match) => (
            <Card key={match.id} className="relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge variant="destructive" className="animate-pulse">
                  <span className="inline-block w-2 h-2 rounded-full bg-white mr-2" />
                  EN DIRECT
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">{match.type}</Badge>
                  <span className="text-sm font-normal text-muted-foreground">{match.babyfoot}</span>
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <span className="font-medium">{match.type === "1v1" ? match.playerRed : match.teamRed}</span>
                    </div>
                    <span className="text-3xl font-bold">{match.scoreRed}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="font-medium">{match.type === "1v1" ? match.playerBlue : match.teamBlue}</span>
                    </div>
                    <span className="text-3xl font-bold">{match.scoreBlue}</span>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href={`/matches/${match.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Suivre le match
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
