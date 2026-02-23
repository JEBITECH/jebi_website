import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, inquiryType, product, message, subscribe } = body;

    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email content for admin
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission - ${inquiryType.replace(/-/g, ' ').toUpperCase()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 30px 15px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                  <tr>
                    <td style="background-color: #4A1A5C; padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">
                        New Contact Form Submission
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 25px 30px 0 30px; text-align: center;">
                      <span style="display: inline-block; background-color: #FF6B35; color: #ffffff; padding: 8px 20px; border-radius: 4px; font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">
                        ${inquiryType.replace(/-/g, ' ')}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px;">
                        Contact Information
                      </h2>
                      <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e8e8e8; border-radius: 6px;">
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Name</td>
                                <td style="color: #333333; font-size: 14px; font-weight: 600;">${name}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Email</td>
                                <td style="color: #FF6B35; font-size: 14px; font-weight: 600;">
                                  <a href="mailto:${email}" style="color: #FF6B35; text-decoration: none;">${email}</a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ${phone ? `
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Phone</td>
                                <td style="color: #333333; font-size: 14px; font-weight: 600;">${phone}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Company</td>
                                <td style="color: #333333; font-size: 14px; font-weight: 600;">${company}</td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ${product ? `
                        <tr>
                          <td style="padding: 15px 20px; border-bottom: 1px solid #e8e8e8;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Product</td>
                                <td style="color: #333333; font-size: 14px;">
                                  <span style="background-color: #f5f5f5; padding: 4px 12px; border-radius: 4px; font-weight: 600; font-size: 13px;">${product}</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        ` : ''}
                        <tr>
                          <td style="padding: 15px 20px;">
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td width="120" style="color: #666666; font-size: 14px; font-weight: 500;">Newsletter</td>
                                <td style="color: #333333; font-size: 14px; font-weight: 600;">
                                  ${subscribe ? '<span style="color: #10b981;">Subscribed</span>' : '<span style="color: #999999;">Not subscribed</span>'}
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <h2 style="color: #333333; margin: 30px 0 15px 0; font-size: 18px; font-weight: 600; border-bottom: 2px solid #f0f0f0; padding-bottom: 12px;">
                        Message
                      </h2>
                      <div style="background-color: #f9f9f9; border-left: 3px solid #FF6B35; padding: 20px; border-radius: 4px; color: #333333; font-size: 14px; line-height: 1.7;">
                        ${message.replace(/\n/g, '<br>')}
                      </div>
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display: inline-block; background-color: #4A1A5C; color: #ffffff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <p style="color: #666666; margin: 0; font-size: 13px; line-height: 1.6;">
                        <strong style="color: #333333;">JebiTech</strong><br>
                        Hospitality Technology Solutions<br>
                        © ${new Date().getFullYear()} All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Email content for customer (auto-reply)
    const customerMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting JebiTech',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - JebiTech</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 30px 15px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                  <tr>
                    <td style="background-color: #4A1A5C; padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600; letter-spacing: -0.5px;">
                        Thank You for Contacting Us
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 12px 0 0 0; font-size: 15px;">
                        We've received your inquiry
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 0 0 20px 0;">
                        Dear <strong>${name}</strong>,
                      </p>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 0 0 25px 0;">
                        Thank you for reaching out to <strong style="color: #4A1A5C;">JebiTech</strong>. We have received your inquiry and our team is currently reviewing your message. We are committed to providing you with the best hospitality technology solutions.
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-left: 3px solid #FF6B35; border-radius: 6px; margin: 30px 0;">
                        <tr>
                          <td style="padding: 25px;">
                            <h2 style="color: #333333; margin: 0 0 18px 0; font-size: 17px; font-weight: 600;">
                              What Happens Next
                            </h2>
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                                        <div style="width: 20px; height: 20px; background-color: #FF6B35; border-radius: 50%; color: white; font-weight: 600; font-size: 11px; text-align: center; line-height: 20px;">1</div>
                                      </td>
                                      <td style="color: #555555; font-size: 14px; line-height: 1.6; padding-left: 12px;">
                                        Our team will carefully review your inquiry
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                                        <div style="width: 20px; height: 20px; background-color: #FF6B35; border-radius: 50%; color: white; font-weight: 600; font-size: 11px; text-align: center; line-height: 20px;">2</div>
                                      </td>
                                      <td style="color: #555555; font-size: 14px; line-height: 1.6; padding-left: 12px;">
                                        We will respond within <strong style="color: #333333;">2-4 business hours</strong>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 10px 0;">
                                  <table cellpadding="0" cellspacing="0">
                                    <tr>
                                      <td style="width: 28px; vertical-align: top; padding-top: 2px;">
                                        <div style="width: 20px; height: 20px; background-color: #FF6B35; border-radius: 50%; color: white; font-weight: 600; font-size: 11px; text-align: center; line-height: 20px;">3</div>
                                      </td>
                                      <td style="color: #555555; font-size: 14px; line-height: 1.6; padding-left: 12px;">
                                        You will receive a personalized response tailored to your needs
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 30px 0 15px 0;">
                        In the meantime, you may find these resources helpful:
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="50%" style="padding-right: 8px; padding-bottom: 12px;">
                            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://jebitech.com'}/products" style="display: block; background-color: #4A1A5C; color: #ffffff; padding: 14px 20px; border-radius: 6px; text-decoration: none; text-align: center; font-weight: 600; font-size: 14px;">
                              Our Products
                            </a>
                          </td>
                          <td width="50%" style="padding-left: 8px; padding-bottom: 12px;">
                            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://jebitech.com'}/about" style="display: block; background-color: #FF6B35; color: #ffffff; padding: 14px 20px; border-radius: 6px; text-decoration: none; text-align: center; font-weight: 600; font-size: 14px;">
                              About Us
                            </a>
                          </td>
                        </tr>
                      </table>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px; padding: 20px; margin-top: 30px;">
                        <tr>
                          <td>
                            <h3 style="color: #333333; margin: 0 0 12px 0; font-size: 15px; font-weight: 600;">
                              Need Immediate Assistance?
                            </h3>
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <tr>
                                <td style="padding: 6px 0; color: #666666; font-size: 14px;">
                                  <strong style="color: #333333;">Email:</strong>
                                  <a href="mailto:sales@jebitech.com" style="color: #FF6B35; text-decoration: none; margin-left: 8px;">sales@jebitech.com</a>
                                </td>
                              </tr>
                              <tr>
                                <td style="padding: 6px 0; color: #666666; font-size: 14px;">
                                  <strong style="color: #333333;">Phone:</strong>
                                  <span style="margin-left: 8px;">+91 20 1234 5678</span>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 30px 0 0 0;">
                        Best regards,<br>
                        <strong style="color: #4A1A5C;">The JebiTech Team</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <table cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto 15px auto;">
                        <tr>
                          <td style="padding: 0 12px;">
                            <a href="https://www.linkedin.com/company/jebi-softech-services/" style="color: #666666; text-decoration: none; font-size: 13px;">LinkedIn</a>
                          </td>
                          <td style="padding: 0 4px; color: #cccccc;">|</td>
                          <td style="padding: 0 12px;">
                            <a href="https://twitter.com/jebitech" style="color: #666666; text-decoration: none; font-size: 13px;">Twitter</a>
                          </td>
                        </tr>
                      </table>
                      <p style="color: #666666; margin: 0; font-size: 13px; line-height: 1.6;">
                        <strong style="color: #333333;">JebiTech</strong><br>
                        Hospitality Technology Solutions<br>
                        © ${new Date().getFullYear()} All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
