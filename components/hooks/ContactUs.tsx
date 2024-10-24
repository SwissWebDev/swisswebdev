"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function ContactUs() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      // Collect your form data here
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
      phone: event.target.phone.value,
      company: event.target.company.value,
      methode: event.target.methode.value,
      form: "maincontact",
    };

    try {
      const response = await fetch("/contact/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);

        // router.push("/contact/success");
        window.location.href = "/contact/success";
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        setError(errorData.error || "An error occurred");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {" "}
      {loading && (
        <div className="w-screen h-screen flex justify-center items-center absolute top-0 left-0 bg-[#10101051] z-50">
          <ClipLoader
            color="#f3f3f3"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h1 className="text-center font-thin text-base">Sending Email...</h1>
        </div>
      )}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 pt-[4rem]">
        <h1 className="text-3xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="mb-8 text-center">
          "Ready to take your online presence to the next level? We'd love to
          hear from you! Whether you have questions about our services, need a
          quote, or want to discuss your project ideas, we're here to help."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-4 text-[#101010]">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-[#f3f3f3]">
                Name <span className="text-muted">(Required)</span>
              </Label>
              <Input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-[#f3f3f3]">
                Email <span className="text-muted">(Required)</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your email"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-[#f3f3f3]">
                Phone Number <span className="text-muted">(Optional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your phone number"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="company" className="text-[#f3f3f3]">
                Company Name <span className="text-muted">(Optional)</span>
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="Your company name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="message" className="text-[#f3f3f3]">
                Project Details / Message{" "}
                <span className="text-muted">(Required)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
                className="min-h-[100px]"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="contact-method" className="text-[#f3f3f3]">
                Preferred Contact Method{" "}
                <span className="text-muted">(Email or Phone)</span>
              </Label>
              <Input
                id="contact-method"
                name="methode"
                placeholder="Preferred contact method"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message!
            </Button>
          </form>
          <div className="bg-white text-black p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">
              Direct Contact Information:
            </h2>
            <p>Email: info@swisswebdev.ch</p>
            <p>Phone: +41 78 403 68 32</p>
            <p>Business Hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">
          "We aim to respond to all inquiries within 24 hours. Let's create
          something amazing together!"
        </p>
      </div>
    </>
  );
}
