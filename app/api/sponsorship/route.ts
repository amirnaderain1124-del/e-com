import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  return NextResponse.json({
    ok: true,
    applicant: data.get("full_name"),
    message: "Sponsorship submission received. Persist with Prisma once DATABASE_URL is configured."
  });
}
