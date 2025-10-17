"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { StatCard } from "@/components/start-card"
import { Sidebar } from "@/components/dashboard/Sidebar"
import {
  Table2,
  Users,
  Trophy,
  BarChart2,
  PlusCircle,
  Edit,
  Trash2,
} from "lucide-react"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

type DashboardSection = "overview" | "babyfoots" | "users" | "stats" | "settings"

export default function DashboardPage() {
  const [selectedSection, setSelectedSection] = useState<DashboardSection>("overview")

  // Données fictives
  const babyfoots = [
    { id: 1, name: "Table A", status: "Disponible", matches: 34 },
    { id: 2, name: "Table B", status: "En maintenance", matches: 10 },
    { id: 3, name: "Table C", status: "Occupée", matches: 27 },
  ]

  const users = [
    { id: 1, name: "Alice", role: "Admin", matches: 54 },
    { id: 2, name: "Bob", role: "Joueur", matches: 32 },
    { id: 3, name: "Charlie", role: "Joueur", matches: 10 },
  ]

  const usageData = [
    { day: "Lun", matches: 12 },
    { day: "Mar", matches: 18 },
    { day: "Mer", matches: 9 },
    { day: "Jeu", matches: 20 },
    { day: "Ven", matches: 25 },
    { day: "Sam", matches: 30 },
    { day: "Dim", matches: 15 },
  ]

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar activeItem={selectedSection} onSelectItem={setSelectedSection} />

      {/* Contenu principal */}
      <main className="flex-1 p-6 space-y-8 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {selectedSection === "overview"
              ? "Vue d’ensemble"
              : selectedSection === "babyfoots"
              ? "Gestion des Babyfoots"
              : selectedSection === "users"
              ? "Gestion des Utilisateurs"
              : selectedSection === "stats"
              ? "Statistiques"
              : "Paramètres"}
          </h1>
          <div className="flex items-center gap-2">
            <Input placeholder="Rechercher..." className="w-48" />
            <Button variant="outline" asChild>
              <Link href="/">Retour à l’accueil</Link>
            </Button>
          </div>
        </header>

        {/* Sections */}
        {selectedSection === "overview" && (
          <section className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Tables actives" value="6" icon={Table2} description="sur 8 disponibles" />
              <StatCard title="Joueurs enregistrés" value="124" icon={Users} description="Ce mois-ci" />
              <StatCard title="Matchs joués" value="432" icon={Trophy} description="Depuis janvier" />
              <StatCard title="Taux d’occupation" value="76%" icon={BarChart2} description="Moyenne hebdo" />
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Activité hebdomadaire</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="matches" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </section>
        )}

        {selectedSection === "babyfoots" && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Liste des tables</h2>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" /> Ajouter une table
              </Button>
            </div>

            <Card className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">État</th>
                    <th className="p-3">Matchs joués</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {babyfoots.map((b) => (
                    <tr key={b.id} className="border-t border-border hover:bg-muted/30">
                      <td className="p-3">{b.name}</td>
                      <td className="p-3">{b.status}</td>
                      <td className="p-3">{b.matches}</td>
                      <td className="p-3 text-right space-x-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit className="h-4 w-4" /> Modifier
                        </Button>
                        <Button size="sm" variant="destructive" className="gap-1">
                          <Trash2 className="h-4 w-4" /> Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>
        )}

        {selectedSection === "users" && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Liste des utilisateurs</h2>
              <Button className="gap-2">
                <PlusCircle className="h-4 w-4" /> Ajouter un utilisateur
              </Button>
            </div>

            <Card className="overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50 text-left">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Rôle</th>
                    <th className="p-3">Matchs joués</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-t border-border hover:bg-muted/30">
                      <td className="p-3">{u.name}</td>
                      <td className="p-3">{u.role}</td>
                      <td className="p-3">{u.matches}</td>
                      <td className="p-3 text-right space-x-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit className="h-4 w-4" /> Modifier
                        </Button>
                        <Button size="sm" variant="destructive" className="gap-1">
                          <Trash2 className="h-4 w-4" /> Supprimer
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </section>
        )}

        {selectedSection === "stats" && (
          <section className="space-y-8">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Utilisation des tables</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="matches" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </section>
        )}

        {selectedSection === "settings" && (
          <section className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Paramètres du tableau de bord</h2>
              <p className="text-muted-foreground">
                Ici, vous pourrez bientôt configurer les préférences de votre application (thème, notifications, etc.)
              </p>
            </Card>
          </section>
        )}
      </main>
    </div>
  )
}
