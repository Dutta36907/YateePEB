import { NextResponse } from "next/server";
import { MAX_FILE_BYTES } from "@/lib/submitForm";
import { label, renderEmail } from "@/lib/emailTemplate";

const TO = process.env.FORM_TO_EMAIL ?? "info@yateesteel.com";
const FROM = process.env.FORM_FROM_EMAIL ?? "Yatee Website <onboarding@resend.dev>";
const FILE_EXT = /\.(pdf|dwg|dxf|zip|rar|doc|docx)$/i;
const SUBJECT = { contact: "New enquiry", quote: "New quote request", career: "New job application" } as const;

const bad = (error: string, status = 400) => NextResponse.json({ error }, { status });

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("RESEND_API_KEY is not set");
    return bad("Form service is not configured. Please email info@yateesteel.com.", 500);
  }

  const form = await req.formData().catch(() => null);
  if (!form) return bad("Invalid request.");
  if (form.get("website")) return NextResponse.json({ ok: true }); // honeypot: pretend success to bots

  const type = String(form.get("type")) as keyof typeof SUBJECT;
  if (!(type in SUBJECT)) return bad("Invalid form type.");

  let fields: Record<string, unknown>;
  try {
    fields = JSON.parse(String(form.get("fields")));
  } catch {
    return bad("Invalid request.");
  }
  const entries = Object.entries(fields)
    .filter(([, v]) => typeof v === "string" || typeof v === "boolean")
    .map(([k, v]) => [k, String(v).slice(0, 5000)] as const);
  const get = (k: string) => entries.find(([key]) => key === k)?.[1] ?? "";

  const name = get("name") || get("fullName");
  const email = get("email");
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Please enter your name and a valid email address.");

  const file = form.get("file");
  const attachments: { filename: string; content: string }[] = [];
  if (file instanceof File && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) return bad("Attachment is larger than 4 MB.");
    if (!FILE_EXT.test(file.name)) return bad("Unsupported attachment type.");
    attachments.push({ filename: file.name, content: Buffer.from(await file.arrayBuffer()).toString("base64") });
  }

  const ref = type === "quote" ? `YTE-${Math.floor(100000 + Math.random() * 900000)}` : undefined;
  const rows = [...(ref ? ([["reference", ref]] as const) : []), ...entries];
  const subject = `${SUBJECT[type]}${ref ? ` ${ref}` : ""}: ${name}`.slice(0, 150);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: TO.split(",").map((a) => a.trim()).filter(Boolean),
      reply_to: email,
      subject,
      text: rows.map(([k, v]) => `${label(k)}: ${v}`).join("\n"),
      html: renderEmail(type, entries, ref),
      attachments,
    }),
  });
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return bad("We could not send your request right now. Please email info@yateesteel.com.", 502);
  }
  return NextResponse.json({ ok: true, ref });
}
