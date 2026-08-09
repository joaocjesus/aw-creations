import { Resend } from 'resend';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(body: object, status: number) {
  return Response.json(body, { status });
}

function readField(body: Record<string, unknown>, field: string) {
  const value = body[field];
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return jsonResponse({ error: 'Invalid request body.' }, 400);
  }

  const fields = body as Record<string, unknown>;
  const name = readField(fields, 'name');
  const email = readField(fields, 'email');
  const phone = readField(fields, 'phone');
  const message = readField(fields, 'message');
  const website = readField(fields, 'website');

  if (website) {
    return jsonResponse({ error: 'Unable to accept this enquiry.' }, 400);
  }

  if (!name || name.length > 100) {
    return jsonResponse({ error: 'Please provide a valid name.' }, 400);
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return jsonResponse({ error: 'Please provide a valid email address.' }, 400);
  }

  if (phone.length > 40) {
    return jsonResponse({ error: 'Please provide a valid phone number.' }, 400);
  }

  if (!message || message.length > 2_000) {
    return jsonResponse({ error: 'Please tell us briefly about your business.' }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    console.error('Required email delivery environment variables are not configured.');
    return jsonResponse({ error: 'Email delivery is not configured.' }, 500);
  }

  const resend = new Resend(apiKey);
  const subjectName = name.replace(/[\r\n]+/g, ' ');

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New website enquiry from ${subjectName}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        message,
      ].join('\n'),
      html: `
        <h1>New website enquiry</h1>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
        <h2>About the business</h2>
        <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
      `,
    });

    if (error) {
      console.error('Resend rejected the contact email:', error);
      return jsonResponse({ error: 'The enquiry could not be sent. Please try again.' }, 502);
    }
  } catch (error) {
    console.error('Contact email delivery failed:', error);
    return jsonResponse({ error: 'The enquiry could not be sent. Please try again.' }, 502);
  }

  return jsonResponse({ success: true }, 200);
}
