import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const limit = Number.parseInt(searchParams.get("limit") || "20")

    const sql = getDb()

    let matches

    if (userId) {
      // Matchs d'un joueur spécifique (1v1 et 2v2)
      const matches1v1 = await sql`
        SELECT 
          m.id_match1v1 as id,
          '1v1' as type,
          m.score_j1,
          m.score_j2,
          m.date_match,
          m.statut,
          j1.nom as joueur1_nom,
          j1.prenom as joueur1_prenom,
          j2.nom as joueur2_nom,
          j2.prenom as joueur2_prenom,
          b.nom as babyfoot_nom
        FROM MATCH1V1 m
        JOIN JOUEUR j1 ON m.id_joueur1 = j1.id_joueur
        JOIN JOUEUR j2 ON m.id_joueur2 = j2.id_joueur
        JOIN BABYFOOT b ON m.id_babyfoot = b.id_babyfoot
        WHERE m.id_joueur1 = ${userId} OR m.id_joueur2 = ${userId}
        ORDER BY m.date_match DESC
        LIMIT ${limit}
      `

      const matches2v2 = await sql`
        SELECT 
          m.id_match2v2 as id,
          '2v2' as type,
          m.score_equipe1,
          m.score_equipe2,
          m.date_match,
          m.statut,
          t1.nom_equipe as equipe1_nom,
          t2.nom_equipe as equipe2_nom,
          b.nom as babyfoot_nom
        FROM MATCH2V2 m
        JOIN TEAM t1 ON m.id_equipe1 = t1.id_equipe
        JOIN TEAM t2 ON m.id_equipe2 = t2.id_equipe
        JOIN BABYFOOT b ON m.id_babyfoot = b.id_babyfoot
        WHERE t1.id_joueur1 = ${userId} OR t1.id_joueur2 = ${userId}
           OR t2.id_joueur1 = ${userId} OR t2.id_joueur2 = ${userId}
        ORDER BY m.date_match DESC
        LIMIT ${limit}
      `

      matches = [...matches1v1, ...matches2v2].sort(
        (a, b) => new Date(b.date_match).getTime() - new Date(a.date_match).getTime(),
      )
    } else {
      // Tous les matchs récents
      matches = await sql`
        SELECT 
          m.id_match1v1 as id,
          '1v1' as type,
          m.score_j1,
          m.score_j2,
          m.date_match,
          m.statut,
          j1.nom as joueur1_nom,
          j1.prenom as joueur1_prenom,
          j2.nom as joueur2_nom,
          j2.prenom as joueur2_prenom,
          b.nom as babyfoot_nom
        FROM MATCH1V1 m
        JOIN JOUEUR j1 ON m.id_joueur1 = j1.id_joueur
        JOIN JOUEUR j2 ON m.id_joueur2 = j2.id_joueur
        JOIN BABYFOOT b ON m.id_babyfoot = b.id_babyfoot
        ORDER BY m.date_match DESC
        LIMIT ${limit}
      `
    }

    return NextResponse.json(matches)
  } catch (error) {
    console.error("[v0] Error fetching matches:", error)
    return NextResponse.json({ error: "Erreur lors de la récupération des matchs" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 })
    }

    const { type, babyfoot_id, joueur1_id, joueur2_id, equipe1_id, equipe2_id } = await request.json()

    const sql = getDb()

    if (type === "1v1") {
      const result = await sql`
        INSERT INTO MATCH1V1 (id_babyfoot, id_joueur1, id_joueur2, score_j1, score_j2, statut)
        VALUES (${babyfoot_id}, ${joueur1_id}, ${joueur2_id}, 0, 0, 'en_cours')
        RETURNING *
      `
      return NextResponse.json(result[0], { status: 201 })
    } else if (type === "2v2") {
      const result = await sql`
        INSERT INTO MATCH2V2 (id_babyfoot, id_equipe1, id_equipe2, score_equipe1, score_equipe2, statut)
        VALUES (${babyfoot_id}, ${equipe1_id}, ${equipe2_id}, 0, 0, 'en_cours')
        RETURNING *
      `
      return NextResponse.json(result[0], { status: 201 })
    }

    return NextResponse.json({ error: "Type de match invalide" }, { status: 400 })
  } catch (error) {
    console.error("[v0] Error creating match:", error)
    return NextResponse.json({ error: "Erreur lors de la création du match" }, { status: 500 })
  }
}
