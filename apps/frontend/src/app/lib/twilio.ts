import twilio from 'twilio';
const client = twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
);

export async function sendWhatsAppNotification(message: string, recipients: string[]) {

    return Promise.all(
        recipients.map(to => client.messages.create({
            from: 'whatsapp:+15557561678',
            to,
            body: message,
        }))
    ).then(messages => console.log(messages.map((message: any) => message)));
}