/**
 * Shared placeholder handler for all four forms on the site.
 *
 * Nothing is sent anywhere yet. Point ENDPOINT at a real destination
 * (a form service, an API route, a CRM webhook) and flip the fetch back on.
 */

export type FormName =
  | "contact"
  | "schedule-walkthrough"
  | "careers"
  | "book-a-unit";

export type SubmitResult = { ok: true } | { ok: false; message: string };

const ENDPOINT: string | null = null; // TODO: set the real endpoint

export async function submitForm(
  form: FormName,
  data: Record<string, string>,
): Promise<SubmitResult> {
  if (!ENDPOINT) {
    // Placeholder path: log it, pause briefly so the UI reads as real, succeed.
    console.info(`[submit:${form}] no endpoint configured`, data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, data }),
    });
    if (!response.ok) {
      return { ok: false, message: "That did not go through. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: "Network error. Please try again or call us." };
  }
}
