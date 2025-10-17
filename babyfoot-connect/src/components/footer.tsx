import Link from "next/link"
import { Trophy } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Trophy className="h-5 w-5 text-primary-foreground" />
              </div>
              <span>Babyfoot Connect</span>
            </Link>
            <p className="text-sm text-muted-foreground">La plateforme de gestion des babyfoots d'Ynov Toulouse</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/matches" className="text-muted-foreground hover:text-foreground transition-colors">
                  Matchs en direct
                </Link>
              </li>
              <li>
                <Link href="/classement" className="text-muted-foreground hover:text-foreground transition-colors">
                  Classement
                </Link>
              </li>
              <li>
                <Link href="/reserver" className="text-muted-foreground hover:text-foreground transition-colors">
                  Réserver
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Compte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/connexion" className="text-muted-foreground hover:text-foreground transition-colors">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/inscription" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inscription
                </Link>
              </li>
              <li>
                <Link href="/profil" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mon profil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aide" className="text-muted-foreground hover:text-foreground transition-colors">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Babyfoot Connect - Ynov Toulouse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
