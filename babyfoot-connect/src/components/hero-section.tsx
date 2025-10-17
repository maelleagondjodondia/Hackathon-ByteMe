import { Button } from "@/components/ui/button"
import { Trophy, Users, Target } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Trophy className="h-4 w-4" />
            La Gamelle d'Ynov Toulouse
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Bienvenue sur <span className="text-primary">Babyfoot Connect</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Réservez votre table, suivez vos matchs en direct, et grimpez dans le classement ELO. La compétition
            commence maintenant !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg">
              <Link href="/reserver">Réserver une table</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
              <Link href="/classement">Voir le classement</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Users className="h-8 w-8 text-primary" />
              <div className="text-2xl font-bold">247</div>
              <div className="text-sm text-muted-foreground">Joueurs actifs</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Trophy className="h-8 w-8 text-secondary" />
              <div className="text-2xl font-bold">1,432</div>
              <div className="text-sm text-muted-foreground">Matchs joués</div>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border border-border">
              <Target className="h-8 w-8 text-accent" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Tables disponibles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
