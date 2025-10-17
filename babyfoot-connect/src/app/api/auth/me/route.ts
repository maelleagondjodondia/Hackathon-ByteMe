import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth"
import { getDb } from "@/lib/db"

export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 })
    }

    const sql = getDb()

    const users = await sql`
      SELECT uid, nom, prenom, email, admin, elo
      FROM JOUEUR
      WHERE uid = ${session.userId}
    `

    if (users.length === 0) {
      return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 })
    }

    const user = users[0]

    return NextResponse.json({
      id: user.uid,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      admin: user.admin,
      elo: user.elo,
    })
  } catch (error) {
    console.error("[v0] Error in me:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
