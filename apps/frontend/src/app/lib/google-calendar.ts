import { google } from 'googleapis';
import { sendNajoomiSchedulingEmail } from './email';
// --- Google OAuth2 User Flow Helpers ---

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  'https://www.najoomi.in/api/auth/callback/google' // redirect URI
);

oauth2Client.setCredentials(JSON.parse(process.env.GOOGLE_TOKEN_JSON!));

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

export const createMeetEvent = async (start: string, end: string, practitionerEmail: string, userEmail: string) => {
  try {
    const response = await calendar.events.insert({
      calendarId: 'primary',
      conferenceDataVersion: 1,
      sendUpdates: 'all', // This will send email invitations to all attendees
      requestBody: {
        summary: 'Meeting with Najoomi',
        description: `Assalamu Alaikum!\n\nThis is your spiritual session with Najoomi.\n\n✨ May blessings, guidance, and a sprinkle of magic be with you. ✨\n\nJoin via Google Meet: (link will appear above)`,
        start: { dateTime: start },
        end: { dateTime: end },
        attendees: [{ email: userEmail }, { email: practitionerEmail }],
        conferenceData: {
          createRequest: {
            requestId: 'meet-' + Date.now()
          }
        }
      }
    });
    await sendNajoomiSchedulingEmail(userEmail, practitionerEmail, response.data.hangoutLink || '', start, end);
    return response.data.hangoutLink || "";

  } catch (error) {
    console.error('Failed to create Google Meet:', error);
    return "";
  }
};

// 1. Redirect user to Google's consent screen
export function getGoogleAuthUrl() {
  const scopes = [
    'https://www.googleapis.com/auth/calendar.events',
    'https://www.googleapis.com/auth/calendar'
  ];

  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    prompt: 'consent',
  });
}

// 2. Exchange code for tokens after user grants permission
export async function getGoogleTokens(code: string) {
  const { tokens } = await oauth2Client.getToken(code);
  return tokens; // Includes access_token, refresh_token
}