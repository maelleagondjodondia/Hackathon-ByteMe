"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users } from "lucide-react"
import { useState } from "react"

const babyfoots = [
  { id: 1, label: "Table 1", status: "available", location: "Salle de pause - RDC" },
  { id: 2, label: "Table 2", status: "occupied", location: "Cafétéria - 1er étage", currentMatch: "Match en cours" },
  { id: 3, label: "Table 3", status: "available", location: "Espace détente - 2ème étage" },
]

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

export function ReservationContent() {
  const [selectedBabyfoot, setSelectedBabyfoot] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [matchType, setMatchType] = useState<"1v1" | "2v2">("1v1")

  const handleReservation = () => {
    if (selectedBabyfoot && selectedTime) {
      console.log("[v0] Reservation:", { babyfoot: selectedBabyfoot, time: selectedTime, type: matchType })
      alert(`Réservation confirmée pour ${babyfoots.find((b) => b.id === selectedBabyfoot)?.label} à ${selectedTime}`)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Calendar className="h-8 w-8 text-primary" />
          Réserver une Table
        </h1>
        <p className="text-muted-foreground">Choisissez votre table et votre créneau horaire</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sélectionner une table</CardTitle>
              <CardDescription>Choisissez parmi les tables disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {babyfoots.map((babyfoot) => (
                  <button
                    key={babyfoot.id}
                    onClick={() => babyfoot.status === "available" && setSelectedBabyfoot(babyfoot.id)}
                    disabled={babyfoot.status === "occupied"}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedBabyfoot === babyfoot.id
                        ? "border-primary bg-primary/10"
                        : babyfoot.status === "available"
                          ? "border-border hover:border-primary/50"
                          : "border-border opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="font-semibold mb-2">{babyfoot.label}</div>
                    <div className="text-sm text-muted-foreground mb-3">{babyfoot.location}</div>
                    <Badge variant={babyfoot.status === "available" ? "default" : "secondary"}>
                      {babyfoot.status === "available" ? "Disponible" : "Occupée"}
                    </Badge>
                    {babyfoot.currentMatch && (
                      <div className="text-xs text-muted-foreground mt-2">{babyfoot.currentMatch}</div>
                    )}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Type de match</CardTitle>
              <CardDescription>Sélectionnez le format de jeu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setMatchType("1v1")}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    matchType === "1v1" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <Users className="h-8 w-8 mb-3 mx-auto text-primary" />
                  <div className="font-semibold text-center">1 vs 1</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Match individuel</div>
                </button>

                <button
                  onClick={() => setMatchType("2v2")}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    matchType === "2v2" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
                  }`}
                >
                  <Users className="h-8 w-8 mb-3 mx-auto text-primary" />
                  <div className="font-semibold text-center">2 vs 2</div>
                  <div className="text-sm text-muted-foreground text-center mt-1">Match en équipe</div>
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Choisir un créneau
              </CardTitle>
              <CardDescription>Sélectionnez l'heure de votre match</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-3 rounded-lg border-2 transition-all font-medium ${
                      selectedTime === time
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Récapitulatif</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Table sélectionnée</div>
                <div className="font-semibold">
                  {selectedBabyfoot
                    ? babyfoots.find((b) => b.id === selectedBabyfoot)?.label
                    : "Aucune table sélectionnée"}
                </div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">Type de match</div>
                <div className="font-semibold">{matchType === "1v1" ? "1 vs 1" : "2 vs 2"}</div>
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">Créneau horaire</div>
                <div className="font-semibold">{selectedTime || "Aucun créneau sélectionné"}</div>
              </div>

              <div className="pt-4 border-t border-border">
                <Button className="w-full" disabled={!selectedBabyfoot || !selectedTime} onClick={handleReservation}>
                  Confirmer la réservation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
