import { NextResponse } from 'next/server';
// import { handleWebhook } from '@/app/lib/webhook';

// POST /api/webhook
export async function POST() {
  try {
    // const body = await req.json();
    // console.log('[Cashfree Webhook] Received:', body);
    // await handleWebhook(body);
    return NextResponse.json({ status: 'ok', message: "Webhook received successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: (error as Error).message }, { status: 400 });
  }
}
