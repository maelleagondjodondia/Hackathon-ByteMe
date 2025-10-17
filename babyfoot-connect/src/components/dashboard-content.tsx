"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, History } from "lucide-react"
import Link from "next/link"

const userStats = {
  name: "Alexandre M.",
  elo: 1847,
  rank: 1,
  wins: 89,
  losses: 23,
  winRate: 79.5,
  currentStreak: 8,
}

const recentMatches = [
  { id: "1", opponent: "Sophie D.", result: "win", score: "10-7", date: "2025-01-15", eloChange: 15 },
  { id: "2", opponent: "Lucas P.", result: "win", score: "10-8", date: "2025-01-15", eloChange: 12 },
  { id: "3", opponent: "Emma R.", result: "win", score: "10-6", date: "2025-01-14", eloChange: 18 },
  { id: "4", opponent: "Thomas L.", result: "loss", score: "8-10", date: "2025-01-14", eloChange: -10 },
]

const upcomingReservations = [
  { id: "1", babyfoot: "Table 1", date: "2025-01-16", time: "14:00", opponent: "Sophie D." },
  { id: "2", babyfoot: "Table 2", date: "2025-01-17", time: "16:30", opponent: "Lucas P." },
]

export function DashboardContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mon Tableau de Bord</h1>
        <p className="text-muted-foreground">Bienvenue {userStats.name} !</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">AM</AvatarFallback>
            </Avatar>
            <CardTitle>{userStats.name}</CardTitle>
            <CardDescription>Rang #{userStats.rank}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
              <span className="text-sm font-medium">ELO</span>
              <span className="text-2xl font-bold text-primary">{userStats.elo}</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 rounded-lg bg-muted">
                <div className="text-2xl font-bold text-green-600">{userStats.wins}</div>
                <div className="text-xs text-muted-foreground">Victoires</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted">
                <div className="text-2xl font-bold text-red-600">{userStats.losses}</div>
                <div className="text-xs text-muted-foreground">Défaites</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taux de victoire</span>
                <span className="font-semibold">{userStats.winRate}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Série actuelle</span>
                <Badge variant="default" className="gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {userStats.currentStreak} victoires
                </Badge>
              </div>
            </div>

            <Button className="w-full" asChild>
              <Link href="/profil">Voir mon profil</Link>
            </Button>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Mes Réservations
                  </CardTitle>
                  <CardDescription>Vos prochains matchs programmés</CardDescription>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/reserver">Réserver</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <div className="text-xs font-medium text-primary">
                          {new Date(reservation.date).toLocaleDateString("fr-FR", { day: "numeric" })}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {new Date(reservation.date).toLocaleDateString("fr-FR", { month: "short" })}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold">{reservation.babyfoot}</div>
                        <div className="text-sm text-muted-foreground">
                          {reservation.time} - vs {reservation.opponent}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Détails
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Historique des Matchs
              </CardTitle>
              <CardDescription>Vos derniers matchs joués</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div className="flex items-center gap-4">
                      <Badge variant={match.result === "win" ? "default" : "secondary"} className="w-16 justify-center">
                        {match.result === "win" ? "Victoire" : "Défaite"}
                      </Badge>
                      <div>
                        <div className="font-semibold">vs {match.opponent}</div>
                        <div className="text-sm text-muted-foreground">
                          {match.score} - {new Date(match.date).toLocaleDateString("fr-FR")}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${match.eloChange > 0 ? "text-green-600" : "text-red-600"}`}>
                        {match.eloChange > 0 ? "+" : ""}
                        {match.eloChange}
                      </div>
                      <div className="text-xs text-muted-foreground">ELO</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
