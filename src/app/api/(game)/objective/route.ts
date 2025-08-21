import { NextRequest, NextResponse } from "next/server";
import { createObjective } from "@/src/controllers/objective";

// createObjective
export async function POST(req: NextRequest) {
  try {
    const { encounterId } = await req.json();
    const objective = await createObjective(encounterId);

    return NextResponse.json(objective, {
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
