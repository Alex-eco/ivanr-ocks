import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/app/lib/db";
import { COOKIE_NAME, isValidToken } from "@/app/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!isValidToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const applications = await sql`
      SELECT
        a.id,
        a.name,
        a.instrument,
        a.level,
        a.intent,
        a.sound,
        a.email,
        a.band_id,
        a.status,
        a.created_at,
        a.updated_at,
        b.name AS band_name
      FROM applications a
      LEFT JOIN bands b ON b.id = a.band_id
      ORDER BY a.created_at DESC;
    `;

    return NextResponse.json({ applications });
  } catch (error) {
    console.error("Admin applications error:", error);

    return NextResponse.json(
      { error: "Failed to load applications" },
      { status: 500 }
    );
  }
}
