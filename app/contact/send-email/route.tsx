import { NextResponse } from "next/server";
import formdata from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: Request) {
  interface formDataContext {
    email: string;
    product: string | null;
    message: string;
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
    product: body.product,
    message: body.message,
  };

  console.table(emailObject);
  try {
    await mg.messages.create("swisswebdev.ch", {
      from: "marvin.kiefer@swisswebdev.ch",
      to: ["info@swisswebdev.ch"],
      subject: `Product Question: ${emailObject.product}`,
      text: "Testing some Mailgun awesomeness!",
      html: `
            <h1>Email from: ${emailObject.email}</h1>
            <br />
            <p>${emailObject.message}</p>`,
    });
  } catch (err) {
    return NextResponse.json({ msg: "Email sending failed" }, { status: 500 });
  }
  return NextResponse.json({ status: 200 });
}
