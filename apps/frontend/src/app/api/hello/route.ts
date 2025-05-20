import { NextResponse } from 'next/server';

// GET /api/hello
export async function POST() {
  return NextResponse.json({ message: 'Hello, world!' });
}
