"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { StatCard } from "@/components/start-card"
import { LiveMatchCard } from "@/components/live-match-card"
import { LeaderboardRow } from "@/components/leaderboard-row"
import { mockStats, mockMatches, mockPlayers } from "@/lib/mock-data"
import { Trophy, Users, Table2, TrendingUp, LogIn, Calendar, Crown } from "lucide-react"


const currentUser = {
  role: "Admin" // ou "Joueur" par exemple
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                <Table2 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Babyfoot Connect</h1>
                <p className="text-xs text-muted-foreground">La Gamelle d'Ynov</p>
              </div>
            </div>

            <nav className="mt-2 flex gap-4 text-sm text-muted-foreground">
              {currentUser.role === "Admin" && (
                <button
                  onClick={() => window.location.href = "/dashboard"}
                  className="px-3 py-1 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition-colors"
                >
                  Dashboard
                </button>
              )}
            </nav>

            <Button variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="/login">
                <LogIn className="h-4 w-4" />
                Se connecter
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
              Réservez, jouez et dominez le classement
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              La plateforme ultime pour gérer vos parties de babyfoot à Ynov Toulouse. Réservez votre créneau, suivez
              vos stats et défiez les meilleurs joueurs du campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2 text-lg px-8">
                <Calendar className="h-5 w-5" />
                Réserver un créneau
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-transparent">
                <Crown className="h-5 w-5" />
                Voir le classement
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Matchs totaux"
              value={mockStats.totalMatches}
              icon={Trophy}
              description="Depuis le lancement"
            />
            <StatCard title="Joueurs actifs" value={mockStats.activePlayers} icon={Users} description="Ce mois-ci" />
            <StatCard
              title="Tables disponibles"
              value={mockStats.availableTables}
              icon={Table2}
              description="En ce moment"
            />
            <StatCard
              title="Matchs cette semaine"
              value={mockStats.matchesThisWeek}
              icon={TrendingUp}
              description="+12% vs semaine dernière"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">Matchs en direct</h3>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                {mockMatches.map((match) => (
                  <LiveMatchCard key={match.id} match={match} />
                ))}
              </div>
              {mockMatches.length === 0 && (
                <Card className="p-12 text-center">
                  <p className="text-muted-foreground">Aucun match en cours pour le moment</p>
                </Card>
              )}
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">Top Joueurs</h3>
                <Button variant="ghost" size="sm">
                  Voir tout
                </Button>
              </div>
              <Card className="p-6 bg-card border-border">
                <div className="space-y-2">
                  {mockPlayers.slice(0, 5).map((player, index) => (
                    <LeaderboardRow key={player.id} player={player} rank={index + 1} />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-card border-border text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">Prêt à rejoindre la compétition ?</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Créez votre compte et commencez à réserver vos créneaux dès maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="/sign-up">
                  <LogIn className="h-5 w-5" />
                  Créer un compte
                </a>
              </Button>
              <Button size="lg" variant="outline">
                En savoir plus
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Babyfoot Connect - Ynov Toulouse</p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                À propos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Règlement
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
