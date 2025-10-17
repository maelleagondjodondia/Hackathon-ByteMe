import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { createToken } from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, password } = await request.json()

    if (!nom || !prenom || !email || !password) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    const sql = getDb()

    // Vérifier si l'utilisateur existe déjà
    const existingUser = await sql`
      SELECT * FROM JOUEUR WHERE email = ${email}
    `

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 })
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await sql`
      INSERT INTO JOUEUR (nom, prenom, email, mdp, admin, elo)
      VALUES (${nom}, ${prenom}, ${email}, ${hashedPassword}, false, 1000)
      RETURNING uid, nom, prenom, email, admin, elo
    `

    const user = result[0]

    const token = await createToken(user.uid, user.email, user.admin)

    // Créer la réponse avec le cookie
    const response = NextResponse.json(
      {
        user: {
          id: user.uid,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          admin: user.admin,
          elo: user.elo,
        },
      },
      { status: 201 },
    )

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 jours
    })

    return response
  } catch (error) {
    console.error("[v0] Error in register:", error)
    return NextResponse.json({ error: "Erreur lors de l'inscription" }, { status: 500 })
  }
}
