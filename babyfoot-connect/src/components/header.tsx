"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trophy, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Trophy className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="hidden sm:inline">Babyfoot Connect</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/matches" className="text-sm font-medium hover:text-primary transition-colors">
              Matchs en direct
            </Link>
            <Link href="/classement" className="text-sm font-medium hover:text-primary transition-colors">
              Classement
            </Link>
            <Link href="/reserver" className="text-sm font-medium hover:text-primary transition-colors">
              Réserver
            </Link>
            <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
              Admin
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/connexion">Connexion</Link>
            </Button>
            <Button asChild>
              <Link href="/inscription">Inscription</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link href="/matches" className="text-sm font-medium hover:text-primary transition-colors">
                Matchs en direct
              </Link>
              <Link href="/classement" className="text-sm font-medium hover:text-primary transition-colors">
                Classement
              </Link>
              <Link href="/reserver" className="text-sm font-medium hover:text-primary transition-colors">
                Réserver
              </Link>
              <Link href="/admin" className="text-sm font-medium hover:text-primary transition-colors">
                Admin
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/connexion">Connexion</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/inscription">Inscription</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
