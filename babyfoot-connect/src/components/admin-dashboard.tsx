"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, Users, Trophy, Activity, Plus, Edit, Trash2 } from "lucide-react"

const babyfoots = [
  { id: 1, label: "Table 1", status: "available", location: "Salle de pause - RDC", totalMatches: 342 },
  { id: 2, label: "Table 2", status: "occupied", location: "Cafétéria - 1er étage", totalMatches: 289 },
  { id: 3, label: "Table 3", status: "maintenance", location: "Espace détente - 2ème étage", totalMatches: 156 },
]

const users = [
  { id: "1", name: "Alexandre M.", email: "alexandre.m@ynov.com", role: "admin", elo: 1847 },
  { id: "2", name: "Sophie D.", email: "sophie.d@ynov.com", role: "user", elo: 1792 },
  { id: "3", name: "Lucas P.", email: "lucas.p@ynov.com", role: "user", elo: 1756 },
  { id: "4", name: "Emma R.", email: "emma.r@ynov.com", role: "user", elo: 1698 },
]

const stats = {
  totalUsers: 247,
  totalMatches: 1432,
  activeMatches: 2,
  todayMatches: 47,
  peakHours: "12h - 14h",
  avgMatchDuration: "8 min",
}

export function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Settings className="h-8 w-8 text-primary" />
          Dashboard Administrateur
        </h1>
        <p className="text-muted-foreground">Gérez les tables, utilisateurs et statistiques</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground mt-1">Joueurs inscrits</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Matchs totaux</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalMatches}</div>
            <p className="text-xs text-muted-foreground mt-1">Depuis le lancement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Matchs en direct</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeMatches}</div>
            <p className="text-xs text-muted-foreground mt-1">En cours maintenant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Aujourd'hui</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.todayMatches}</div>
            <p className="text-xs text-muted-foreground mt-1">Matchs joués</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="babyfoots" className="space-y-6">
        <TabsList>
          <TabsTrigger value="babyfoots">Tables</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="stats">Statistiques</TabsTrigger>
        </TabsList>

        <TabsContent value="babyfoots" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Gestion des Tables</CardTitle>
                  <CardDescription>Gérez l'état et la disponibilité des babyfoots</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter une table
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {babyfoots.map((babyfoot) => (
                  <div
                    key={babyfoot.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{babyfoot.label}</div>
                        <div className="text-sm text-muted-foreground">{babyfoot.location}</div>
                        <div className="text-xs text-muted-foreground mt-1">{babyfoot.totalMatches} matchs joués</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          babyfoot.status === "available"
                            ? "default"
                            : babyfoot.status === "occupied"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {babyfoot.status === "available" && "Disponible"}
                        {babyfoot.status === "occupied" && "Occupée"}
                        {babyfoot.status === "maintenance" && "Maintenance"}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des Utilisateurs</CardTitle>
              <CardDescription>Gérez les comptes et les rôles des joueurs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                      <div className="text-sm text-muted-foreground mt-1">ELO: {user.elo}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                        {user.role === "admin" ? "Admin" : "Utilisateur"}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques Globales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Heures de pointe</span>
                  <span className="font-semibold">{stats.peakHours}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Durée moyenne d'un match</span>
                  <span className="font-semibold">{stats.avgMatchDuration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Matchs aujourd'hui</span>
                  <span className="font-semibold">{stats.todayMatches}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Joueurs actifs</span>
                  <span className="font-semibold">{stats.totalUsers}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Activité Récente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Nouveau match démarré - Table 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">Nouvel utilisateur inscrit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <span className="text-muted-foreground">Match terminé - Table 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">Réservation créée - Table 3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
