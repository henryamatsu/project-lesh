import { NextRequest, NextResponse } from "next/server";
import { getQuestById } from "@/src/controllers/quest";

type Params = {
  id: number;
};

// this type defines the shape of the object that is passed as the second arg to the built in Next.js route methods
// for whatever reason, there isn't a built in Next.js type for it, so I wrote it out here
type RouteContext = {
  params: Params;
};

// getQuestById
export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = await params;

    const quest = await getQuestById(Number(id));
    return NextResponse.json(quest, {
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
