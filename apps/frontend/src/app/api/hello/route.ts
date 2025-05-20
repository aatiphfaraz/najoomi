import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// GET /api/hello
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Hello, world!' });
}
