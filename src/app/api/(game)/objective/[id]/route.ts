import { NextRequest, NextResponse } from "next/server";
import { getObjectiveById } from "@/src/controllers/objective";

type Params = {
  id: number;
};

type RouteContext = {
  params: Params;
};

// getObjectiveById
export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    const objective = await getObjectiveById(Number(id));
    return NextResponse.json(objective, {
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
