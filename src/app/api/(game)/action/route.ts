import { NextRequest, NextResponse } from "next/server";
import { createAction } from "@/src/controllers/action";

// createAction
export async function POST(req: NextRequest) {
  try {
    const { encounterId } = await req.json();
    const action = await createAction(encounterId);

    return NextResponse.json(action, {
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
