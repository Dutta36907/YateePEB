import { companyDetails } from "@/data/company";
import { SITE_URL } from "@/lib/seo";

type Type = "contact" | "quote" | "career";
type Field = readonly [key: string, value: string];

const NAVY = "#1D3A74";
const hq = companyDetails.headquarters;

const TITLE: Record<Type, { badge: string; heading: string }> = {
  contact: { badge: "NEW ENQUIRY", heading: "Project enquiry from the website" },
  quote: { badge: "NEW QUOTE REQUEST", heading: "Quotation request from the website" },
  career: { badge: "NEW APPLICATION", heading: "Job application from the website" },
};

// Section title -> field keys, in display order. Unlisted keys fall into "Other details".
const GROUPS: Record<Type, [string, string[]][]> = {
  contact: [
    ["Contact", ["name", "company", "email", "phone", "city"]],
    ["Project", ["projectType", "areaSqFt"]],
    ["Message", ["message"]],
  ],
  quote: [
    ["Contact", ["fullName", "designation", "email", "phone", "whatsapp"]],
    ["Company", ["companyName", "gstin", "industrySector"]],
    ["Project location", ["projectCity", "projectState", "expectedTimeline", "siteStatus"]],
    ["Building specification", ["buildingType", "unit", "length", "width", "clearHeight", "builtUpAreaSqFt", "approxSteelTonnageMT", "craneRequirement", "mezzanineRequired", "roofingType", "insulationType"]],
    ["Notes", ["projectNotes"]],
    ["Attachment", ["attachment"]],
  ],
  career: [
    ["Candidate", ["name", "email", "phone", "experience", "currentLocation"]],
    ["Position", ["position"]],
    ["Cover note", ["message"]],
  ],
};

const LABELS: Record<string, string> = {
  areaSqFt: "Area (sq ft)",
  builtUpAreaSqFt: "Built-up area (sq ft)",
  approxSteelTonnageMT: "Approx. steel tonnage (MT)",
  gstin: "GSTIN",
  whatsapp: "WhatsApp",
  positionSlug: "Position page",
};
const LONG = new Set(["message", "projectNotes"]);

export const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
export const label = (k: string) => LABELS[k] ?? k.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());

function value(key: string, v: string) {
  const e = esc(v).replace(/\n/g, "<br>");
  if (key === "email") return `<a href="mailto:${e}" style="color:${NAVY};font-weight:600;text-decoration:none">${e}</a>`;
  if (key === "phone" || key === "whatsapp") return `<a href="tel:${e.replace(/[^+\d]/g, "")}" style="color:${NAVY};font-weight:600;text-decoration:none">${e}</a>`;
  if (key === "positionSlug") return `<a href="${SITE_URL}/careers/${encodeURIComponent(v)}" style="color:${NAVY};text-decoration:none">${e}</a>`;
  return e;
}

function section(title: string, fields: Field[]) {
  const long = fields.filter(([k]) => LONG.has(k));
  const short = fields.filter(([k]) => !LONG.has(k));
  const rows = short
    .map(
      ([k, v], i) => `<tr>
        <td width="38%" style="padding:10px 14px;font-size:12px;color:#64748B;text-transform:uppercase;letter-spacing:.04em;vertical-align:top;${i ? "border-top:1px solid #E2E8F0;" : ""}">${esc(label(k))}</td>
        <td style="padding:10px 14px;font-size:14px;color:#0F172A;vertical-align:top;${i ? "border-top:1px solid #E2E8F0;" : ""}">${value(k, v)}</td></tr>`
    )
    .join("");
  const blocks = long
    .map(([, v]) => `<div style="padding:14px;font-size:14px;line-height:1.6;color:#0F172A;${short.length ? "border-top:1px solid #E2E8F0;" : ""}">${value("", v)}</div>`)
    .join("");
  return `<tr><td style="padding:22px 32px 0">
    <div style="font-size:12px;font-weight:700;color:${NAVY};text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">${esc(title)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px">${rows ? `<tbody>${rows}</tbody>` : ""}${blocks ? `<tbody><tr><td colspan="2">${blocks}</td></tr></tbody>` : ""}</table>
  </td></tr>`;
}

export function renderEmail(type: Type, entries: readonly Field[], ref?: string) {
  const get = (k: string) => entries.find(([key]) => key === k)?.[1] ?? "";
  const name = get("name") || get("fullName");
  const email = get("email");
  const phone = get("phone");
  const used = new Set<string>();
  const sections = GROUPS[type]
    .map(([title, keys]) => {
      const fields = keys.flatMap((k) => entries.filter(([key, v]) => key === k && v !== ""));
      fields.forEach(([k]) => used.add(k));
      return fields.length ? section(title, fields) : "";
    })
    .join("");
  const rest = entries.filter(([k, v]) => !used.has(k) && v !== "");
  const other = rest.length ? section("Other details", rest) : "";

  const t = TITLE[type];
  const subjectLine = encodeURIComponent(`Re: your ${type === "career" ? "application" : type === "quote" ? "quotation request" : "enquiry"} to Yatee Steel Structures${ref ? ` (${ref})` : ""}`);
  const button = (href: string, text: string, solid: boolean) =>
    `<a href="${href}" style="display:inline-block;padding:12px 22px;margin:0 8px 8px 0;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;${solid ? `background:${NAVY};color:#fff;border:1px solid ${NAVY}` : `background:#fff;color:${NAVY};border:1px solid ${NAVY}`}">${text}</a>`;

  return `<!doctype html><html><body style="margin:0;padding:0;background:#EEF2F7;font-family:'Segoe UI',Helvetica,Arial,sans-serif">
<div style="display:none;max-height:0;overflow:hidden;opacity:0">${esc(t.badge)}: ${esc(name)}${ref ? ` (${esc(ref)})` : ""}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#EEF2F7"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 10px rgba(15,23,42,.08)">
  <tr><td style="background:${NAVY};height:6px;font-size:0;line-height:0">&nbsp;</td></tr>
  <tr><td style="padding:24px 32px 8px"><a href="${SITE_URL}"><img src="${SITE_URL}/images/yatee-logo.png" alt="Yatee Steel Structures" width="220" style="display:block;border:0;height:auto;max-width:220px"></a></td></tr>
  <tr><td style="padding:12px 32px 0">
    <span style="display:inline-block;background:#E8EEF9;color:${NAVY};font-size:11px;font-weight:700;letter-spacing:.1em;padding:5px 10px;border-radius:6px">${esc(t.badge)}</span>${ref ? `<span style="display:inline-block;margin-left:8px;font-size:12px;color:#64748B;font-weight:600">Ref ${esc(ref)}</span>` : ""}
    <h1 style="margin:12px 0 4px;font-size:22px;line-height:1.3;color:#0F172A">${esc(t.heading)}</h1>
    <p style="margin:0;font-size:14px;color:#475569">From <b style="color:#0F172A">${esc(name)}</b>${email ? ` &middot; ${esc(email)}` : ""}</p>
  </td></tr>
  <tr><td style="padding:18px 32px 0">${button(`mailto:${esc(email)}?subject=${subjectLine}`, "Reply to " + esc(name.split(" ")[0] || "sender"), true)}${phone ? button(`tel:${esc(phone.replace(/[^+\d]/g, ""))}`, "Call " + esc(phone), false) : ""}</td></tr>
  ${sections}${other}
  <tr><td style="padding:28px 32px">
    <div style="border-top:1px solid #E2E8F0;padding-top:16px;font-size:12px;line-height:1.6;color:#64748B">
      Sent automatically from the <a href="${SITE_URL}" style="color:${NAVY};text-decoration:none">yateesteel.com</a> website form. Replying to this email goes straight to the sender.<br>
      <b style="color:#334155">${esc(companyDetails.name)}</b> &middot; ${esc(hq.addressLine1)}, ${esc(hq.city)}, ${esc(hq.state)} ${esc(hq.postalCode)}
    </div>
  </td></tr>
</table></td></tr></table></body></html>`;
}
