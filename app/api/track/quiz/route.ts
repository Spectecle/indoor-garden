import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { resultSlug, answers } = await request.json();
    await prisma.quizCompletion.create({
      data: { resultSlug, answers: JSON.stringify(answers) },
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
