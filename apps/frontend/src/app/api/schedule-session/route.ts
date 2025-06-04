import { NextResponse } from 'next/server';
import { createMeetEvent } from '@/app/lib/google-calendar';

export async function GET() {
    const now = new Date();
    const startTime = new Date(now.getTime() + 5 * 60 * 1000); // 5 minutes from now
    const endTime = new Date(now.getTime() + 35 * 60 * 1000); // 30 minutes duration

    const eventDetails = {
        summary: 'Test Meeting for Najoomi (OAuth Generated Link)',
        description: 'This is a test meeting to generate a Google Meet link via OAuth.',
        startDateTime: startTime.toISOString(),
        endDateTime: endTime.toISOString(),
        timeZone: 'Asia/Kolkata',
    };

    try {
        const meetLink = await createMeetEvent(eventDetails.startDateTime, eventDetails.endDateTime, 'aatiffaraz@gmail.com', 'aatiffaraz@gmail.com');

        // Compose WhatsApp notification
        // const message = `Your Najoomi session is scheduled!\nJoin: ${meetLink?.hangoutLink || 'Link unavailable'}\nTime: ${eventDetails.startDateTime} - ${eventDetails.endDateTime}`;
        // // Send WhatsApp notification (fire-and-forget, but you can await if you want to handle errors)
        // try {
        //     sendWhatsAppNotification(message, [
        //         'whatsapp:+918307991528',
        //         // 'whatsapp:+918218006910'
        //     ]);
        // } catch (whatsErr) {
        //     console.error('Failed to send WhatsApp notification:', whatsErr);
        // }

        return NextResponse.json({ meetLink });
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to generate Google Meet link', details: error.message || String(error) },
            { status: 500 }
        );
    }
}