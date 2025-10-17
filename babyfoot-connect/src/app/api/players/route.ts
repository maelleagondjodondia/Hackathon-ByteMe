import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search") || ""
    const limit = Number.parseInt(searchParams.get("limit") || "50")

    const sql = getDb()

    let players

    if (search) {
      players = await sql`
        SELECT uid, nom, prenom, email, elo
        FROM JOUEUR
        WHERE nom ILIKE ${`%${search}%`} OR prenom ILIKE ${`%${search}%`}
        ORDER BY elo DESC
        LIMIT ${limit}
      `
    } else {
      players = await sql`
        SELECT uid, nom, prenom, email, elo
        FROM JOUEUR
        ORDER BY elo DESC
        LIMIT ${limit}
      `
    }

    return NextResponse.json(
      players.map((p, index) => ({
        id: p.uid,
        nom: p.nom,
        prenom: p.prenom,
        email: p.email,
        elo: p.elo,
        rank: index + 1,
      })),
    )
  } catch (error) {
    console.error("[v0] Error fetching players:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des joueurs" }, { status: 500 })
  }
}
