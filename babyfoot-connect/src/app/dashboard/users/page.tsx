"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Edit, Trash2 } from "lucide-react"

interface Babyfoot {
  id: number
  name: string
  status: string
  matches: number
}

export default function BabyfootsPage() {
  const [babyfoots, setBabyfoots] = useState<Babyfoot[]>([
    { id: 1, name: "Table A", status: "Disponible", matches: 34 },
    { id: 2, name: "Table B", status: "En maintenance", matches: 10 },
    { id: 3, name: "Table C", status: "Occupée", matches: 27 },
  ])

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingBabyfoot, setEditingBabyfoot] = useState<Babyfoot | null>(null)
  const [formData, setFormData] = useState({ name: "", status: "", matches: 0 })

  // Ajouter ou modifier
  const handleSubmit = () => {
    if (editingBabyfoot) {
      setBabyfoots((prev) =>
        prev.map((b) => (b.id === editingBabyfoot.id ? { ...b, ...formData } : b))
      )
    } else {
      const newBabyfoot = {
        id: Date.now(),
        ...formData,
      }
      setBabyfoots((prev) => [...prev, newBabyfoot])
    }
    setIsFormOpen(false)
    setEditingBabyfoot(null)
    setFormData({ name: "", status: "", matches: 0 })
  }

  // Supprimer
  const handleDelete = (id: number) => {
    setBabyfoots((prev) => prev.filter((b) => b.id !== id))
  }

  // Modifier
  const handleEdit = (babyfoot: Babyfoot) => {
    setEditingBabyfoot(babyfoot)
    setFormData({ name: babyfoot.name, status: babyfoot.status, matches: babyfoot.matches })
    setIsFormOpen(true)
  }

  return (
    <div className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Gestion des Babyfoots</h1>
        <Button className="gap-2" onClick={() => setIsFormOpen(true)}>
          <PlusCircle className="h-4 w-4" /> Ajouter une table
        </Button>
      </header>

      {/* Formulaire ajout / modification */}
      {isFormOpen && (
        <Card className="p-4 mb-6 space-y-4">
          <h2 className="text-xl font-semibold">
            {editingBabyfoot ? "Modifier Babyfoot" : "Ajouter Babyfoot"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Input
              placeholder="Nom de la table"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              placeholder="État (Disponible / Occupée / Maintenance)"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Matchs joués"
              value={formData.matches}
              onChange={(e) => setFormData({ ...formData, matches: Number(e.target.value) })}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSubmit}>{editingBabyfoot ? "Modifier" : "Ajouter"}</Button>
            <Button variant="outline" onClick={() => setIsFormOpen(false)}>
              Annuler
            </Button>
          </div>
        </Card>
      )}

      {/* Tableau des babyfoots */}
      <Card className="overflow-x-auto">
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
                  <Button size="sm" variant="outline" className="gap-1" onClick={() => handleEdit(b)}>
                    <Edit className="h-4 w-4" /> Modifier
                  </Button>
                  <Button size="sm" variant="destructive" className="gap-1" onClick={() => handleDelete(b.id)}>
                    <Trash2 className="h-4 w-4" /> Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  )
}
