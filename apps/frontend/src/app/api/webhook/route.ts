import { NextRequest, NextResponse } from 'next/server';
import { handleWebhook } from '@/app/lib/webhook';

// POST /api/webhook
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[Cashfree Webhook] Received:', body);
    const result = await handleWebhook(body);
    return NextResponse.json({ status: result.status, message: result.message }, { status: result.statusCode });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: (error as Error).message }, { status: 400 });
  }
}
