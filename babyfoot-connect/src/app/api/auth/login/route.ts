import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { createToken } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email et mot de passe requis" }, { status: 400 })
    }

    const sql = getDb()

    const users = await sql`
      SELECT * FROM JOUEUR WHERE email = ${email}
    `

    if (users.length === 0) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    const user = users[0]

    // Vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.mdp)

    if (!isValidPassword) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 })
    }

    const token = await createToken(user.uid, user.email, user.admin)

    // Créer la réponse avec le cookie
    const response = NextResponse.json({
      user: {
        id: user.uid,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        admin: user.admin,
        elo: user.elo,
      },
    })

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    })

    return response
  } catch (error) {
    console.error("[v0] Error in login:", error)
    return NextResponse.json({ error: "Erreur lors de la connexion" }, { status: 500 })
  }
}
