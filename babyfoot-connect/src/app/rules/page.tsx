import { Card } from "@/components/ui/card"
import { ShieldCheck, AlertTriangle, Handshake, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ReglementPage() {
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
            <ShieldCheck className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Règlement de Babyfoot Connect</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Les règles officielles pour garantir des matchs équitables et une bonne ambiance sur le campus.
          </p>
        </div>

        {/* Fair-play */}
        <Card className="p-8 bg-card border-border space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Handshake className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground text-center">1. Esprit d’équipe et fair-play</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed text-center">
              Le babyfoot est avant tout un jeu de partage et de convivialité. Les joueurs sont invités à faire preuve de
              respect envers leurs adversaires et à maintenir une ambiance positive autour des matchs.
            </p>
          </div>
        </Card>

        {/* Réservations */}
        <Card className="p-8 bg-card border-border space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground text-center">2. Réservation et respect du matériel</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed text-center">
              Les réservations de créneaux s’effectuent via la plateforme <strong>Babyfoot Connect</strong>.  
              Merci de respecter les horaires réservés afin de garantir une bonne rotation entre les joueurs.
            </p>
            <p className="text-muted-foreground leading-relaxed text-center">
              Toute dégradation volontaire du matériel entraînera une exclusion temporaire ou définitive du système de
              réservation.
            </p>
          </div>
        </Card>

        {/* Classements */}
        <Card className="p-8 bg-card border-border space-y-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground text-center">3. Classements et performances</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-muted-foreground leading-relaxed text-center">
              Les classements sont mis à jour automatiquement après chaque match enregistré.  
              Les victoires, défaites et ratios de performance sont pris en compte pour déterminer la position de chaque
              joueur ou équipe.
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-primary/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">Jouez avec passion et respect</h3>
          <p className="text-muted-foreground">
            Ensemble, faisons de <strong>Babyfoot Connect</strong> un espace de jeu, de partage et de bonne humeur !
          </p>
        </Card>
      </div>
    </div>
  )
}
