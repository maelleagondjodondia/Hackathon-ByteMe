import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, TrendingUp, TrendingDown } from "lucide-react"

const topPlayers = [
  { rank: 1, name: "Alexandre M.", elo: 1847, change: 45, wins: 89, losses: 23 },
  { rank: 2, name: "Sophie D.", elo: 1792, change: 32, wins: 76, losses: 28 },
  { rank: 3, name: "Lucas P.", elo: 1756, change: -12, wins: 82, losses: 35 },
  { rank: 4, name: "Emma R.", elo: 1698, change: 18, wins: 65, losses: 31 },
  { rank: 5, name: "Thomas L.", elo: 1654, change: 8, wins: 58, losses: 29 },
]

export function TopPlayersSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Top 5 Joueurs</h2>

          <Card>
            <CardHeader>
              <CardTitle>Classement ELO</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <div
                    key={player.rank}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 font-bold text-primary">
                      {player.rank === 1 && <Trophy className="h-5 w-5 text-secondary" />}
                      {player.rank !== 1 && player.rank}
                    </div>

                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {player.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {player.wins}V - {player.losses}D
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold">{player.elo}</div>
                      <Badge variant={player.change > 0 ? "default" : "secondary"} className="mt-1">
                        {player.change > 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {Math.abs(player.change)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
