"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Trophy, TrendingUp, TrendingDown, Search, Medal } from "lucide-react"
import { useState } from "react"

const allPlayers = [
  { rank: 1, name: "Alexandre M.", elo: 1847, change: 45, wins: 89, losses: 23, winRate: 79.5 },
  { rank: 2, name: "Sophie D.", elo: 1792, change: 32, wins: 76, losses: 28, winRate: 73.1 },
  { rank: 3, name: "Lucas P.", elo: 1756, change: -12, wins: 82, losses: 35, winRate: 70.1 },
  { rank: 4, name: "Emma R.", elo: 1698, change: 18, wins: 65, losses: 31, winRate: 67.7 },
  { rank: 5, name: "Thomas L.", elo: 1654, change: 8, wins: 58, losses: 29, winRate: 66.7 },
  { rank: 6, name: "Marie B.", elo: 1612, change: -5, wins: 54, losses: 32, winRate: 62.8 },
  { rank: 7, name: "Pierre K.", elo: 1589, change: 22, wins: 49, losses: 28, winRate: 63.6 },
  { rank: 8, name: "Julie F.", elo: 1567, change: 15, wins: 47, losses: 31, winRate: 60.3 },
  { rank: 9, name: "Antoine G.", elo: 1543, change: -8, wins: 45, losses: 33, winRate: 57.7 },
  { rank: 10, name: "Camille H.", elo: 1521, change: 12, wins: 42, losses: 29, winRate: 59.2 },
]

export function RankingContent() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPlayers = allPlayers.filter((player) => player.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Trophy className="h-8 w-8 text-primary" />
          Classement ELO
        </h1>
        <p className="text-muted-foreground">Découvrez les meilleurs joueurs de Babyfoot Connect</p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher un joueur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Joueurs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPlayers.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                  player.rank <= 3
                    ? "bg-gradient-to-r from-primary/10 to-transparent border border-primary/20"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-border font-bold">
                  {player.rank === 1 && <Trophy className="h-6 w-6 text-secondary" />}
                  {player.rank === 2 && <Medal className="h-6 w-6 text-muted-foreground" />}
                  {player.rank === 3 && <Medal className="h-6 w-6 text-amber-700" />}
                  {player.rank > 3 && <span className="text-primary">{player.rank}</span>}
                </div>

                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {player.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="font-semibold text-lg">{player.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {player.wins}V - {player.losses}D ({player.winRate.toFixed(1)}%)
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Taux</div>
                    <div className="font-semibold">{player.winRate.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-bold">{player.elo}</div>
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
  )
}
