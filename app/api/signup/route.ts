import { pool } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      country,
      city,
      region,
      postalCode,
      project,
    } = body

    if (!firstName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    await pool.execute(
      `
      INSERT INTO users
      (
        first_name,
        last_name,
        email,
        country,
        city,
        region,
        postal_code,
        project
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        firstName,
        lastName,
        email,
        country,
        city,
        region,
        postalCode,
        project,
      ]
    )

    return NextResponse.json({
      success: true,
    })

  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Database error" },
      { status: 500 }
    )
  }
}