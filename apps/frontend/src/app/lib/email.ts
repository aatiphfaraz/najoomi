import nodemailer from 'nodemailer';

/**
 * Sends a Najoomi-branded scheduling link email to the specified recipient.
 * @param to Recipient's email address
 * @param calendlyLink The Calendly scheduling link
 */
export async function sendNajoomiSchedulingEmail(userEmail: string, practitionerEmail: string, meetLink: string, start: string, end: string) {
  // TODO: Move credentials to env vars for security
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "najoomi.in@gmail.com",
      pass: "hucg awoi cphz zcbz",
    },
  });

  // Format date and time for email
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dateStr = startDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const startTimeStr = startDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const endTimeStr = endDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const htmlContent = (recipientType: 'user' | 'practitioner') => `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #15577a; background: #f9f6f1; padding: 32px; border-radius: 16px; border: 1px solid #eab308; max-width: 480px; margin: 0 auto;">
      <div style="text-align: center; font-size: 2.1em; margin-bottom: 12px;">
        <span style="color: #b6894a;">★</span> Najoomi <span style="color: #b6894a;">★</span>
      </div>
      <h2 style="color: #217ebd; margin-bottom: 16px;">Your Google Meet Session is Confirmed</h2>
      <p style="font-size: 1.1em; margin-bottom: 18px;">Assalamu Alaikum,<br><br>
      Your booking is confirmed!<br>
      <span style="color: #b6894a;">May this session bring you clarity and light, by Allah's will.</span>
      </p>
      <div style="margin: 18px 0; padding: 18px 0; background: #fffbe8; border-radius: 8px; border: 1px solid #ffe082; text-align: center;">
        <div style="font-size: 1.1em; color: #15577a; margin-bottom: 6px;">
          <strong>Date:</strong> ${dateStr}<br>
          <strong>Time:</strong> ${startTimeStr} - ${endTimeStr} IST
        </div>
        <div style="margin: 14px 0 0 0;">
          <a href="${meetLink}" style="background: #15577a; color: #fff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 1.1em; box-shadow: 0 2px 8px #eab30833;">Join Google Meet</a>
        </div>
      </div>
      <p style="font-size: 0.98em; color: #3b4252; text-align: center; margin-top: 18px;">
        ${recipientType === 'user' ? 'We look forward to connecting with you.' : 'You are scheduled to guide a Najoomi client.'}<br>
        JazakAllah Khair for choosing Najoomi.<br>✨ May blessings, guidance, and a sprinkle of magic be with you. ✨
      </p>
      <div style="margin-top: 28px; text-align: center; font-size: 1.4em; color: #b6894a;">
        <span>☪️</span> <span>✧</span> <span>★</span> <span>✨</span>
      </div>
    </div>
  `;

  // Send to user
  await transporter.sendMail({
    from: 'Najoomi <no-reply@najoomi.in>',
    to: userEmail,
    subject: 'Your Najoomi Google Meet Session ✨',
    html: htmlContent('user'),
  });

  // Send to practitioner
  await transporter.sendMail({
    from: 'Najoomi <no-reply@najoomi.in>',
    to: practitionerEmail,
    subject: 'New Najoomi Session Scheduled ✨',
    html: htmlContent('practitioner'),
  });
}

