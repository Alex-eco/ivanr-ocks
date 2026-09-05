import { NextResponse } from "next/server";
import { sql } from "../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      instrument,
      level,
      intent,
      sound,
      email,
      bandId,
    } = body;

    if (!name || !instrument || !level || !intent || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await sql`
      INSERT INTO applications
        (name, instrument, level, intent, sound, email, band_id)
      VALUES
        (
          ${name},
          ${instrument},
          ${level},
          ${intent},
          ${sound || null},
          ${email},
          ${bandId || null}
        )
      RETURNING id, status, created_at;
    `;

    return NextResponse.json({
      success: true,
      application: result[0],
    });
  } catch (error) {
    console.error("Application error:", error);

    return NextResponse.json(
      { error: "Failed to save application" },
      { status: 500 }
    );
  }
}
