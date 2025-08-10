import { NextRequest, NextResponse } from "next/server";
import { createQuest } from "@/src/controllers/quest";

// createQuest
export async function POST(req: NextRequest) {
  try {
    const { characterId } = await req.json();
    const quest = await createQuest(characterId);

    return NextResponse.json(quest, {
      status: 201,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json(err.message, { status: 500 });
    }
    return NextResponse.json("unknown error", { status: 500 });
  }
}
