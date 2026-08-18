import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, program } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Step2ITCareer-AI <onboarding@resend.dev>",
      to: ["step2itcareer@gmail.com"],
      subject: `New Lead: ${name} — ${program || "General Inquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f6f8fc; border-radius: 12px;">
          <div style="background: #3B5BFF; padding: 20px 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Counseling Request</h2>
            <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 13px;">Step2ITCareer-AI Website</p>
          </div>
          <div style="background: white; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; color: #5B6478; font-size: 13px; width: 140px;">Full Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; font-weight: 700; color: #0E1526;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; color: #5B6478; font-size: 13px;">WhatsApp Number</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; font-weight: 700; color: #0E1526;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; color: #5B6478; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E8ECF4; font-weight: 700; color: #0E1526;">${email || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #5B6478; font-size: 13px;">Interested Program</td>
                <td style="padding: 12px 0; font-weight: 700; color: #3B5BFF;">${program || "Not specified"}</td>
              </tr>
            </table>

            <div style="margin-top: 24px; padding: 16px; background: #EEF2FF; border-radius: 8px; text-align: center;">
              <a href="https://wa.me/${phone.replace(/\D/g, "")}" 
                style="display: inline-block; background: #16A34A; color: white; padding: 12px 28px; border-radius: 100px; text-decoration: none; font-weight: 700; font-size: 14px;">
                WhatsApp This Student
              </a>
            </div>

            <p style="margin-top: 16px; color: #5B6478; font-size: 12px; text-align: center;">
              Received from step2itcareer.vercel.app — respond within 24 hours
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
