import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface GuestyLeadPayload {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country?: string;
  companySize?: string;
  currentPlatform?: string;
  projectType?: string;
  howHeard?: string;
  referredBy?: string;
  budget?: string;
  message?: string;
  leadSource?: string;
  utmSource?: string;
  utmCampaign?: string;
  referralId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: GuestyLeadPayload = await request.json();
    const {
      name,
      email,
      company,
      phone,
      country,
      companySize,
      currentPlatform,
      projectType,
      howHeard,
      referredBy,
      budget,
      message,
      leadSource,
      utmSource,
      utmCampaign,
      referralId,
    } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { message: 'Name, email and company are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const row = (label: string, value?: string) =>
      value
        ? `<tr>
            <td style="padding: 12px 20px; border-bottom: 1px solid #e8e8e8; width: 160px; color: #666666; font-size: 14px; font-weight: 500;">${label}</td>
            <td style="padding: 12px 20px; border-bottom: 1px solid #e8e8e8; color: #333333; font-size: 14px; font-weight: 600;">${value}</td>
          </tr>`
        : '';

    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Guesty Lead — ${company} (${leadSource || 'guesty-marketplace'})`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color:#f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:30px 15px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                <tr>
                  <td style="background-color:#4A1A5C; padding:30px; text-align:center;">
                    <h1 style="color:#ffffff; margin:0; font-size:22px; font-weight:600;">New Guesty Ecosystem Lead</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 30px 0; text-align:center;">
                    <span style="display:inline-block; background-color:#FF6B35; color:#ffffff; padding:8px 20px; border-radius:4px; font-weight:600; font-size:12px; text-transform:uppercase; letter-spacing:0.5px;">
                      Source: ${leadSource || 'guesty-marketplace'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:30px;">
                    <h2 style="color:#333333; margin:0 0 16px; font-size:17px; font-weight:600; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">Contact Details</h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8; border-radius:6px;">
                      ${row('Name', name)}
                      ${row('Email', `<a href="mailto:${email}" style="color:#FF6B35; text-decoration:none;">${email}</a>`)}
                      ${row('Phone', phone)}
                      ${row('Company', company)}
                      ${row('Country', country)}
                      ${row('Company size', companySize)}
                      ${row('Current platform', currentPlatform)}
                    </table>

                    <h2 style="color:#333333; margin:26px 0 16px; font-size:17px; font-weight:600; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">Project</h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8; border-radius:6px;">
                      ${row('Project type', projectType)}
                      ${row('Estimated budget', budget)}
                    </table>

                    <h2 style="color:#333333; margin:26px 0 16px; font-size:17px; font-weight:600; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">Attribution</h2>
                    <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e8e8e8; border-radius:6px;">
                      ${row('How they heard about us', howHeard)}
                      ${row('Referred by (Guesty rep)', referredBy)}
                      ${row('Lead source / ref', leadSource)}
                      ${row('UTM source', utmSource)}
                      ${row('UTM campaign', utmCampaign)}
                      ${row('Referral ID', referralId)}
                    </table>

                    ${
                      message
                        ? `<h2 style="color:#333333; margin:26px 0 12px; font-size:17px; font-weight:600; border-bottom:2px solid #f0f0f0; padding-bottom:10px;">Message</h2>
                           <div style="background-color:#f9f9f9; border-left:3px solid #FF6B35; padding:16px 20px; border-radius:4px; color:#333333; font-size:14px; line-height:1.7;">
                             ${message.replace(/\n/g, '<br>')}
                           </div>`
                        : ''
                    }

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                      <tr><td align="center">
                        <a href="mailto:${email}" style="display:inline-block; background-color:#4A1A5C; color:#ffffff; padding:14px 32px; border-radius:6px; text-decoration:none; font-weight:600; font-size:14px;">
                          Reply to ${name}
                        </a>
                      </td></tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#f9f9f9; padding:22px 30px; text-align:center; border-top:1px solid #e8e8e8;">
                    <p style="color:#666666; margin:0; font-size:12.5px; line-height:1.6;">
                      <strong style="color:#333333;">JebiTech</strong> · Guesty Ecosystem Partner Page<br>
                      © ${new Date().getFullYear()} All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    };

    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out to JebiTech — we got your Guesty request',
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="margin:0; padding:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color:#f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5; padding:30px 15px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.08);">
                <tr>
                  <td style="background-color:#4A1A5C; padding:36px 30px; text-align:center;">
                    <h1 style="color:#ffffff; margin:0; font-size:24px; font-weight:600;">We've got your request</h1>
                    <p style="color:rgba(255,255,255,0.9); margin:10px 0 0; font-size:14px;">A member of our team will reach out within one business day.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:34px 30px;">
                    <p style="font-size:15px; color:#333333; line-height:1.7; margin:0 0 18px;">Hi <strong>${name}</strong>,</p>
                    <p style="font-size:15px; color:#333333; line-height:1.7; margin:0 0 20px;">
                      Thanks for telling us about ${company}'s Guesty setup. We help property managers extend Guesty with
                      custom development, dedicated engineering teams, and integrations — and we'll follow up shortly with
                      a scoped recommendation for what you shared.
                    </p>
                    <p style="font-size:15px; color:#333333; line-height:1.7; margin:0;">
                      Best,<br><strong style="color:#4A1A5C;">The JebiTech Team</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#f9f9f9; padding:22px 30px; text-align:center; border-top:1px solid #e8e8e8;">
                    <p style="color:#666666; margin:0; font-size:12.5px; line-height:1.6;">
                      <strong style="color:#333333;">JebiTech</strong> · sales@jebitech.com<br>
                      © ${new Date().getFullYear()} All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ message: 'Lead submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending Guesty lead email:', error);
    return NextResponse.json(
      { message: 'Failed to submit lead', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
