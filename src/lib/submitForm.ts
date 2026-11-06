export const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel request bodies cap at 4.5 MB

export type FormType = "contact" | "quote" | "career";

/** POSTs a form to /api/submit; resolves with the server reply, throws a user-readable Error. */
export async function submitForm(
  type: FormType,
  fields: Record<string, string | boolean>,
  file?: File | null,
  honeypot = ""
): Promise<{ ref?: string }> {
  if (file && file.size > MAX_FILE_BYTES) throw new Error("Attachment is larger than 4 MB. Please send a smaller file or email it to us.");
  const body = new FormData();
  body.set("type", type);
  body.set("fields", JSON.stringify(fields));
  body.set("website", honeypot);
  if (file) body.set("file", file);
  const res = await fetch("/api/submit", { method: "POST", body });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Could not send your request. Please try again or email info@yateesteel.com.");
  return data;
}
