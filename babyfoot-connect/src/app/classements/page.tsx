import { Card } from "@/components/ui/card"
import { ArrowLeft, Trophy, Users2 } from "lucide-react"
import Link from "next/link"

export default function ClassementsPage() {
  const joueurs = [
    { rank: 1, name: "Lucas Bernard", wins: 42, losses: 8, ratio: "84%" },
    { rank: 2, name: "Emma Lefèvre", wins: 37, losses: 13, ratio: "74%" },
    { rank: 3, name: "Noah Dubois", wins: 33, losses: 17, ratio: "66%" },
  ]

  const equipes = [
    { rank: 1, team: "Les Fusées", members: "Lucas & Emma", wins: 25, losses: 5, ratio: "83%" },
    { rank: 2, team: "Les Titans", members: "Noah & Léo", wins: 22, losses: 8, ratio: "73%" },
    { rank: 3, team: "Les Requins", members: "Clara & Hugo", wins: 18, losses: 10, ratio: "64%" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>

        {/* Titre principal */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-16 w-16 bg-primary rounded-xl items-center justify-center mb-4">
            <Trophy className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Classements</h1>
          <p className="text-muted-foreground">
            Découvrez les meilleurs joueurs et équipes de Babyfoot Connect 🏓
          </p>
        </div>

        {/* Classement des joueurs */}
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Meilleurs joueurs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="p-2">#</th>
                  <th className="p-2">Joueur</th>
                  <th className="p-2">Victoires</th>
                  <th className="p-2">Défaites</th>
                  <th className="p-2">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {joueurs.map((j) => (
                  <tr key={j.rank} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="p-2 font-bold">{j.rank}</td>
                    <td className="p-2">{j.name}</td>
                    <td className="p-2 text-green-600 font-medium">{j.wins}</td>
                    <td className="p-2 text-red-600">{j.losses}</td>
                    <td className="p-2">{j.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Classement des équipes */}
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center gap-2 mb-4">
            <Users2 className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Meilleures équipes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-muted-foreground">
                  <th className="p-2">#</th>
                  <th className="p-2">Équipe</th>
                  <th className="p-2">Membres</th>
                  <th className="p-2">Victoires</th>
                  <th className="p-2">Défaites</th>
                  <th className="p-2">Ratio</th>
                </tr>
              </thead>
              <tbody>
                {equipes.map((e) => (
                  <tr key={e.rank} className="border-b border-border hover:bg-muted/30 transition">
                    <td className="p-2 font-bold">{e.rank}</td>
                    <td className="p-2">{e.team}</td>
                    <td className="p-2">{e.members}</td>
                    <td className="p-2 text-green-600 font-medium">{e.wins}</td>
                    <td className="p-2 text-red-600">{e.losses}</td>
                    <td className="p-2">{e.ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  )
}
