import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET() {
  try {
    const sql = getDb()

    // Nombre total de joueurs
    const totalPlayers = await sql`
      SELECT COUNT(*) as count FROM JOUEUR
    `

    // Nombre total de matchs
    const totalMatches1v1 = await sql`
      SELECT COUNT(*) as count FROM MATCH1V1
    `
    const totalMatches2v2 = await sql`
      SELECT COUNT(*) as count FROM MATCH2V2
    `

    // Matchs en cours
    const activeMatches = await sql`
      SELECT COUNT(*) as count FROM MATCH1V1 WHERE statut = 'en_cours'
    `

    // Babyfoots disponibles
    const availableBabyfoots = await sql`
      SELECT COUNT(*) as count FROM BABYFOOT WHERE etat = 'disponible'
    `

    return NextResponse.json({
      totalPlayers: Number.parseInt(totalPlayers[0].count),
      totalMatches: Number.parseInt(totalMatches1v1[0].count) + Number.parseInt(totalMatches2v2[0].count),
      activeMatches: Number.parseInt(activeMatches[0].count),
      availableBabyfoots: Number.parseInt(availableBabyfoots[0].count),
    })
  } catch (error) {
    console.error("[v0] Error fetching stats:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des statistiques" }, { status: 500 })
  }
}
