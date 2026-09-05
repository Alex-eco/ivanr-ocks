import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "@/app/lib/db";
import { COOKIE_NAME, isValidToken } from "@/app/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  if (!isValidToken(token)) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const { id } = await params;
    const body = await request.json();
    const status = body.status;

    if (status !== "ACCEPTED" && status !== "DECLINED") {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    const result = await sql`
      UPDATE applications
      SET
        status = ${status},
        updated_at = NOW()
      WHERE id = ${Number(id)}
      RETURNING id, status, updated_at;
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      application: result[0],
    });
  } catch (error) {
    console.error("Update application error:", error);

    return NextResponse.json(
      { error: "Failed to update application" },
      { status: 500 }
    );
  }
}
