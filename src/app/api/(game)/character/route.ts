import { NextRequest, NextResponse } from "next/server";
import { createCharacter } from "@/src/controllers/character";

// createCharacter
export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    const character = await createCharacter(userId);

    return NextResponse.json(character, {
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
