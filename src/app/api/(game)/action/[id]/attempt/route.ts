import { NextRequest, NextResponse } from "next/server";
import { attemptAction } from "@/src/controllers/action";

type Params = {
  id: number;
};

type RouteContext = {
  params: Params;
};

// attemptAction
export async function PUT(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;
    const { objectiveId }: { objectiveId: number } = await req.json();

    const action = await attemptAction(Number(id), objectiveId);
    return NextResponse.json(action, {
      status: 200,
    });
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      return NextResponse.json(err.message, { status: 500 });
    }
    return NextResponse.json("Unknown error", { status: 500 });
  }
}
