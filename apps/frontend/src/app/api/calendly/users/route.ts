export async function GET() {
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;

  try {

    // Step 1: Get current user info
    const meRes = await fetch("https://api.calendly.com/users/me", {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const meData = await meRes.json();
    if (!meData.resource || !meData.resource.current_organization) {
      return new Response(JSON.stringify({ error: 'Could not determine organization from user info', details: meData }), { status: 500 });
    }
    const orgUriFromMe = meData.resource.current_organization;
    // Step 2: Get users for that organization
    const usersRes = await fetch(`https://api.calendly.com/organization_memberships?organization=${orgUriFromMe}`, {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await usersRes.json();
    const status = usersRes.status;

    return new Response(JSON.stringify(data), { status });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch users', details: err }), { status: 500 });
  }
}
