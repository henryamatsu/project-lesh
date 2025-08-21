import { NextRequest, NextResponse } from "next/server";
import { getActionById } from "@/src/controllers/action";

type Params = {
  id: number;
};

type RouteContext = {
  params: Params;
};

// getActionById
export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    const action = await getActionById(Number(id));
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
