import { NextResponse } from "next/server";

// POST /api/hello
export async function POST() {
  return NextResponse.json({ message: 'Hello, world!' });
}
