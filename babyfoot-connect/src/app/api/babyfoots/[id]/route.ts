import { NextResponse } from "next/server"
import { getDb } from "@/lib/db"
import { getSession } from "@/lib/auth"

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession()

    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 })
    }

    const { id } = await params
    const { nom, etat, emplacement } = await request.json()

    const sql = getDb()

    const result = await sql`
      UPDATE BABYFOOT
      SET nom = ${nom}, etat = ${etat}, emplacement = ${emplacement}
      WHERE id_babyfoot = ${id}
      RETURNING *
    `

    if (result.length === 0) {
      return NextResponse.json({ error: "Babyfoot non trouvé" }, { status: 404 })
    }

    return NextResponse.json(result[0])
  } catch (error) {
    console.error("[v0] Error updating babyfoot:", error)
    return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const session = await getSession()

    if (!session || session.role !== "admin") {
      return NextResponse.json({ error: "Non autorisé" }, { status: 403 })
    }

    const { id } = await params
    const sql = getDb()

    await sql`
      DELETE FROM BABYFOOT WHERE id_babyfoot = ${id}
    `

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error deleting babyfoot:", error)
    return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 })
  }
}
