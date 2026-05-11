import { pool } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    NextResponse.json("Body", await req.json())

  try {
    const body = await req.json()

    const {
      firstName,
      lastName,
      email,
      country,
      street,
      city,
      region,
      postalCode,
    } = body

    const sql = `
      INSERT INTO users 
      (first_name, last_name, email, country, street, city, region, postal_code)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `

    await pool.execute(sql, [
      firstName,
      lastName,
      email,
      country,
      street,
      city,
      region,
      postalCode,
    ])

    return NextResponse.json({ message: "User created" })
  } catch (error) {
    return NextResponse.json({ error: "Signup failed" }, { status: 500 })
  }
}