import { Card } from "@/components/ui/card"
import { Table2, Calendar, Users, Crown, Info, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function MorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-5xl space-y-12">
        {/* Retour */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Link>

        {/* Titre principal */}
        <div className="text-center space-y-3">
          <div className="inline-flex h-16 w-16 bg-primary rounded-xl items-center justify-center mb-2">
            <Table2 className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">À propos de Babyfoot Connect</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Découvrez comment la plateforme transforme les matchs de babyfoot à Ynov Toulouse.
          </p>
        </div>

        {/* Concept */}
        <Card className="p-8 bg-card border-border space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Info className="h-5 w-5 text-primary"/>
            <h2 className="text-xl font-semibold text-foreground">Notre concept</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Babyfoot Connect</strong> est une plateforme pensée pour simplifier et dynamiser la gestion des matchs
            de babyfoot au sein du campus Ynov Toulouse.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            L’objectif est simple : permettre à tous les étudiants de réserver facilement une table, de suivre leurs
            performances et de participer à un classement compétitif en temps réel.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Grâce à une interface moderne et intuitive, chaque joueur peut suivre ses statistiques, consulter les matchs
            en cours et défier d’autres équipes pour grimper dans le classement !
          </p>
        </Card>

        {/* Fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center space-y-4 bg-card border-border hover:bg-muted/30 transition">
            <Calendar className="h-10 w-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Réservation rapide</h3>
            <p className="text-sm text-muted-foreground">
              Réservez une table de babyfoot en quelques secondes, directement depuis la plateforme.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-border hover:bg-muted/30 transition">
            <Users className="h-10 w-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Suivi des joueurs</h3>
            <p className="text-sm text-muted-foreground">
              Consultez les profils, les statistiques et les performances des joueurs actifs sur le campus.
            </p>
          </Card>

          <Card className="p-8 text-center space-y-4 bg-card border-border hover:bg-muted/30 transition">
            <Crown className="h-10 w-10 mx-auto text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Classements dynamiques</h3>
            <p className="text-sm text-muted-foreground">
              Découvrez les meilleurs joueurs et équipes, mis à jour en temps réel après chaque match.
            </p>
          </Card>
        </div>

        {/* Objectif */}
        <Card className="p-8 bg-card border-border text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Une communauté avant tout</h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Au-delà de la compétition, <strong>Babyfoot Connect</strong> vise à renforcer les liens entre les étudiants
            d’Ynov. Chaque partie devient une occasion de partager un moment convivial, d’échanger et de se défier dans la
            bonne humeur.
          </p>
        </Card>

        <Card className="p-8 bg-card border-border text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Rejoignez l’aventure</h3>
          <p className="text-muted-foreground">
            Connectez-vous, réservez un créneau et entrez dans la légende !
          </p>
        </Card>
      </div>
    </div>
  )
}
