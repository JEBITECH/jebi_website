import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source = 'unknown' } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Email to admin about new subscriber
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.GMAIL_USER,
      subject: `New Newsletter Subscription - ${source}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 30px 15px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                  <tr>
                    <td style="background-color: #4A1A5C; padding: 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">
                        🎉 New Newsletter Subscriber
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 30px;">
                      <p style="font-size: 15px; color: #333333; margin: 0 0 20px 0;">
                        A new visitor has subscribed to your newsletter!
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px; padding: 20px; margin: 20px 0;">
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #666666;">Email:</strong>
                            <span style="color: #FF6B35; margin-left: 10px; font-weight: 600;">${email}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #666666;">Source:</strong>
                            <span style="color: #333333; margin-left: 10px;">${source}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 10px 0;">
                            <strong style="color: #666666;">Date:</strong>
                            <span style="color: #333333; margin-left: 10px;">${new Date().toLocaleString()}</span>
                          </td>
                        </tr>
                      </table>
                      <p style="font-size: 13px; color: #666666; margin: 20px 0 0 0;">
                        Make sure to add this email to your mailing list!
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

    // Welcome email to subscriber
    const subscriberMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome to JebiTech Newsletter!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 30px 15px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);">
                  <tr>
                    <td style="background-color: #4A1A5C; padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                        Welcome to JebiTech! 🎉
                      </h1>
                      <p style="color: rgba(255, 255, 255, 0.9); margin: 12px 0 0 0; font-size: 15px;">
                        Thanks for joining our community
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 40px 30px;">
                      <p style="font-size: 16px; color: #333333; line-height: 1.7; margin: 0 0 20px 0;">
                        Hi there! 👋
                      </p>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 0 0 25px 0;">
                        Thank you for subscribing to the <strong style="color: #4A1A5C;">JebiTech</strong> newsletter! We're excited to have you as part of our community of hospitality technology professionals.
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-left: 3px solid #FF6B35; border-radius: 6px; margin: 30px 0;">
                        <tr>
                          <td style="padding: 25px;">
                            <h2 style="color: #333333; margin: 0 0 15px 0; font-size: 17px; font-weight: 600;">
                              What to Expect
                            </h2>
                            <ul style="margin: 0; padding-left: 20px; color: #555555; font-size: 14px; line-height: 1.8;">
                              <li style="margin-bottom: 8px;">Latest product updates and feature releases</li>
                              <li style="margin-bottom: 8px;">Industry insights and best practices</li>
                              <li style="margin-bottom: 8px;">Exclusive offers and early access</li>
                              <li style="margin-bottom: 8px;">Tips to optimize your hospitality operations</li>
                            </ul>
                          </td>
                        </tr>
                      </table>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 30px 0 15px 0;">
                        In the meantime, explore what we have to offer:
                      </p>
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="50%" style="padding-right: 8px; padding-bottom: 12px;">
                            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://jebitech.com'}/products" style="display: block; background-color: #4A1A5C; color: #ffffff; padding: 14px 20px; border-radius: 6px; text-decoration: none; text-align: center; font-weight: 600; font-size: 14px;">
                              Explore Products
                            </a>
                          </td>
                          <td width="50%" style="padding-left: 8px; padding-bottom: 12px;">
                            <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'https://jebitech.com'}/services" style="display: block; background-color: #FF6B35; color: #ffffff; padding: 14px 20px; border-radius: 6px; text-decoration: none; text-align: center; font-weight: 600; font-size: 14px;">
                              Our Services
                            </a>
                          </td>
                        </tr>
                      </table>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 30px 0 0 0;">
                        Questions? Feel free to reach out at <a href="mailto:sales@jebitech.com" style="color: #FF6B35; text-decoration: none;">sales@jebitech.com</a>
                      </p>
                      <p style="font-size: 15px; color: #333333; line-height: 1.7; margin: 20px 0 0 0;">
                        Best regards,<br>
                        <strong style="color: #4A1A5C;">The JebiTech Team</strong>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color: #f9f9f9; padding: 25px 30px; text-align: center; border-top: 1px solid #e8e8e8;">
                      <p style="color: #666666; margin: 0 0 10px 0; font-size: 13px;">
                        <strong style="color: #333333;">JebiTech</strong><br>
                        Hospitality Technology Solutions
                      </p>
                      <p style="color: #999999; margin: 0; font-size: 12px;">
                        You're receiving this because you subscribed to our newsletter.<br>
                        <a href="#" style="color: #666666; text-decoration: underline;">Unsubscribe</a>
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
    await transporter.sendMail(subscriberMailOptions);

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { message: 'Failed to subscribe', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
