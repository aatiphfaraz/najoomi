import { NextRequest, NextResponse } from 'next/server';
import { getGoogleTokens } from '@/app/lib/google-calendar';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'Missing code parameter in callback.' }, { status: 400 });
    }

    try {
        const tokens = await getGoogleTokens(code);
        // TODO: Store tokens in DB, session, or cookie for the user
        // For demo, just return them (don't do this in production!)
        console.log({ tokens })
        return NextResponse.json({ tokens });
        // Optionally, redirect to a success page instead:
        // return NextResponse.redirect('/dashboard');
    } catch (error: any) {
        return NextResponse.json({ error: error.message || 'Failed to get tokens' }, { status: 500 });
    }
}