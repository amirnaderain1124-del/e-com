import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.formData();
  return NextResponse.json({ ok: true, email: data.get("email"), message: "Newsletter signup captured. Connect Resend/Klaviyo for production email confirmations." });
}
