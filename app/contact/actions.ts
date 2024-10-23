"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import formdata from "form-data";
import Mailgun from "mailgun.js";

export async function sendEmail(formData: FormData) {
  const mailgun = new Mailgun(formdata);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY!,
    url: "https://api.eu.mailgun.net", // Include this if you're in the EU region
  });

  interface formDataContext {
    email: string;
    product: string | null;
    message: string;
  }

  const emailObject: formDataContext = {
    email: formData.get("email") as string,
    product: formData.get("product") as string,
    message: formData.get("message") as string,
  };

  console.table(emailObject);

  try {
    const msg = await mg.messages.create("swisswebdev.ch", {
      from: "marvin.kiefer@swisswebdev.ch",
      to: ["info@swisswebdev.ch"],
      subject: `Product Question: ${emailObject.product}`,
      text: "Testing some Mailgun awesomeness!",
      html: `
        <h1>Email from: ${emailObject.email}</h1>
        <br />
        <p>${emailObject.message}</p>`,
    });

    console.log(msg); // logs response data

    revalidatePath("/contact");
    redirect("/contact/succses");
  } catch (err) {
    // Handle non-redirect errors
    console.error("Email sending failed:", err);
  }
}
