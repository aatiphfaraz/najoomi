export async function fetchCalendlyUsers() {
  try {
    const res = await fetch("/api/calendly/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (err) {
    return { error: err };
  }
}
