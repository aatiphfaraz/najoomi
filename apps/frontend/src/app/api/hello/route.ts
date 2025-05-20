import { NextResponse } from 'next/server';

// GET /api/hello
export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}
