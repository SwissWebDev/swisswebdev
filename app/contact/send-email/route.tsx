import { NextResponse } from "next/server";
import formdata from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: Request) {
  interface formDataContext {
    email: string;
    product: string | null;
    message: string;
    form?: string;
    name?: string;
    phone?: string | null;
    company?: string | null;
    methode?: string | null;
  }
  const body: formDataContext = await req.json();
  const mailgun = new Mailgun(formdata);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY!,
    url: "https://api.eu.mailgun.net",
  });

  const emailObject: formDataContext = {
    email: body.email,
    product: body.product || null,
    message: body.message || "",
    form: body.form || "",
    name: body.name || "",
    phone: body.phone || null,
    company: body.company || null,
    methode: body.methode || null,
  };

  async function sendEmailFromContactUs() {
    try {
      const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
        from: process.env.MAILGUN_FROM!,
        to: [process.env.MAILGUN_TO!],
        subject: `Contact Form Submission:  ${emailObject.email}`,
        text: "Testing some Mailgun awesomeness!",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Form Submission</title>
    <style type="text/css">
        /* Mobile Styles */
        @media only screen and (max-width: 600px) {
            .content {
                width: 100% !important;
                padding: 10px !important;
            }
            .header, .footer {
                text-align: center !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">

    <!-- Wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f4">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <!-- Content -->
                <table class="content" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #007BFF; padding: 20px; color: #ffffff; font-size: 24px; font-weight: bold;">
                            New Contact Form Submission
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 20px; color: #333333;">
                            <p style="font-size: 18px; margin: 0 0 10px 0;">Hello,</p>
                            <p style="font-size: 16px; margin: 0 0 20px 0;">
                                You have received a new message from your website contact form. Here are the details:
                            </p>

                            <!-- Details Table -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 16px;">
                               <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Name:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Email:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Company:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.company}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Contact Methode:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.methode}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Phone:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.phone}</td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 20px 0 0 0;">
                                        <strong>Message:</strong>
                                        <p style="margin: 10px 0 0 0; line-height: 1.5;">${emailObject.message}</p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #f4f4f4; padding: 20px; color: #888888; font-size: 14px; text-align: center;">
                            &copy; 2023 Your Company Name. All rights reserved.
                        </td>
                    </tr>
                </table>
                <!-- End Content -->
            </td>
        </tr>
    </table>
    <!-- End Wrapper -->

</body>
</html>
`,
      });
      console.log(msg);
    } catch (err) {
      return NextResponse.json(
        { msg: "Email sending failed" },
        { status: 500 }
      );
    }
  }

  async function sendEmailFromContactPage() {
    try {
      const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN!, {
        from: process.env.MAILGUN_FROM!,
        to: [process.env.MAILGUN_TO!],
        subject: `Contact Form Submission:  ${emailObject.email}`,
        text: "Testing some Mailgun awesomeness!",
        html: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Form Submission</title>
    <style type="text/css">
        /* Mobile Styles */
        @media only screen and (max-width: 600px) {
            .content {
                width: 100% !important;
                padding: 10px !important;
            }
            .header, .footer {
                text-align: center !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">

    <!-- Wrapper -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f4f4f4">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <!-- Content -->
                <table class="content" width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #007BFF; padding: 20px; color: #ffffff; font-size: 24px; font-weight: bold;">
                            New Contact Form Submission
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 20px; color: #333333;">
                            <p style="font-size: 18px; margin: 0 0 10px 0;">Hello,</p>
                            <p style="font-size: 16px; margin: 0 0 20px 0;">
                                You have received a new message from your website contact form. Here are the details:
                            </p>

                            <!-- Details Table -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size: 16px;">
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Email:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;"><strong>Product:</strong></td>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #dddddd;">${emailObject.product}</td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding: 20px 0 0 0;">
                                        <strong>Message:</strong>
                                        <p style="margin: 10px 0 0 0; line-height: 1.5;">${emailObject.message}</p>
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #f4f4f4; padding: 20px; color: #888888; font-size: 14px; text-align: center;">
                            &copy; 2023 Your Company Name. All rights reserved.
                        </td>
                    </tr>
                </table>
                <!-- End Content -->
            </td>
        </tr>
    </table>
    <!-- End Wrapper -->

</body>
</html>
`,
      });
      console.log(msg);
    } catch (err) {
      return NextResponse.json(
        { msg: "Email sending failed" },
        { status: 500 }
      );
    }
  }

  console.table(emailObject);
  switch (emailObject.form) {
    case "contactus":
      await sendEmailFromContactPage();
      break;
    case "maincontact":
      await sendEmailFromContactUs();
      break;
    default:
      await sendEmailFromContactPage();
      break;
  }
  return NextResponse.json({ status: 200 });
}
