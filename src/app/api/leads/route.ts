import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Escape user input before it goes into the email HTML. */
const esc = (v: unknown) =>
  String(v ?? "").slice(0, 300).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const row = (label: string, value: string, last = false, color = "#0E1526") => `
  <tr>
    <td style="padding: 12px 0; ${last ? "" : "border-bottom: 1px solid #E8ECF4;"} color: #5B6478; font-size: 13px; width: 150px;">${label}</td>
    <td style="padding: 12px 0; ${last ? "" : "border-bottom: 1px solid #E8ECF4;"} font-weight: 700; color: ${color};">${value}</td>
  </tr>`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, program, background, source } = body ?? {};

    if (!name || !phone || String(phone).replace(/\D/g, "").length < 10) {
      return NextResponse.json({ error: "Name and a valid phone number are required" }, { status: 400 });
    }

    const digits = String(phone).replace(/\D/g, "");
    const wa = digits.length === 10 ? `91${digits}` : digits;
    const kind = String(source ?? "").startsWith("/workshops") ? "Workshop signup" : "Counseling request";

    await resend.emails.send({
      from: "Step2ITCareer-AI <onboarding@resend.dev>",
      to: ["step2itcareer@gmail.com"],
      subject: `${kind}: ${String(name).slice(0, 60)} — ${String(program || "General inquiry").slice(0, 80)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f6f8fc; border-radius: 12px;">
          <div style="background: #3B5BFF; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New ${kind}</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">Step2ITCareer-AI website</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              ${row("Full name", esc(name))}
              ${row("WhatsApp number", esc(phone))}
              ${row("Email", esc(email) || "Not provided")}
              ${row("Background", esc(background) || "Not specified")}
              ${row("Interested in", esc(program) || "Not specified", false, "#3B5BFF")}
              ${row("Came from page", esc(source) || "—", true)}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #EEF2FF; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/${wa}"
                style="display: inline-block; background: #16A34A; color: white; padding: 12px 28px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px;">
                WhatsApp this learner
              </a>
            </div>
            <p style="margin-top: 16px; color: #5B6478; font-size: 12px; text-align: center;">
              Reply fast — leads that hear back within minutes convert far better.
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
