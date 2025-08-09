import { NextRequest, NextResponse } from "next/server";
import { getCharacterById } from "@/src/controllers/character";

type Params = {
  id: number;
};

// this type defines the shape of the object that is passed as the second arg to the built in Next.js route methods
// for whatever reason, there isn't a built in Next.js type for it, so I wrote it out here
type RouteContext = {
  params: Params;
};

// getCharacterById
export async function GET(req: NextRequest, { params }: RouteContext) {
  try {
    const { id } = params;

    const character = getCharacterById(id);
    return NextResponse.json(character, {
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
