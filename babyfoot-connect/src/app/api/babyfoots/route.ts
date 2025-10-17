import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET() {
  try {
    const sql = getDb()

    const babyfoots = await sql`
      SELECT * FROM BABYFOOT
      ORDER BY id_babyfoot
    `

    return NextResponse.json(babyfoots)
  } catch (error) {
    console.error("[v0] Error fetching babyfoots:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des babyfoots" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()

    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 })
    }

    const { nom, etat, emplacement } = await request.json()

    if (!nom || !etat || !emplacement) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    const sql = getDb()

    const result = await sql`
      INSERT INTO BABYFOOT (nom, etat, emplacement)
      VALUES (${nom}, ${etat}, ${emplacement})
      RETURNING *
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error("[v0] Error creating babyfoot:", error)
    return NextResponse.json({ error: "Erreur lors de la création du babyfoot" }, { status: 500 })
  }
}
