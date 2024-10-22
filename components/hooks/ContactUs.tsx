/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6ss53dzhX3W
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-8 pt-[4rem]">
      <h1 className="text-3xl font-bold mb-4">Get in Touch with Us</h1>
      <p className="mb-8 text-center">
        "Ready to take your online presence to the next level? We'd love to hear
        from you! Whether you have questions about our services, need a quote,
        or want to discuss your project ideas, we're here to help."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="name">
              Name <span className="text-muted">(Required)</span>
            </Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">
              Email <span className="text-muted">(Required)</span>
            </Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="phone">
              Phone Number <span className="text-muted">(Optional)</span>
            </Label>
            <Input id="phone" type="tel" placeholder="Your phone number" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="company">
              Company Name <span className="text-muted">(Optional)</span>
            </Label>
            <Input id="company" placeholder="Your company name" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">
              Project Details / Message{" "}
              <span className="text-muted">(Required)</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="min-h-[100px]"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="contact-method">
              Preferred Contact Method{" "}
              <span className="text-muted">(Email or Phone)</span>
            </Label>
            <Input id="contact-method" placeholder="Preferred contact method" />
          </div>
          <Button className="w-full">Send Message!</Button>
        </form>
        <div className="bg-white text-black p-6 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">
            Direct Contact Information:
          </h2>
          <p>Email: info@swisswebdev.ch</p>
          <p>Phone: +41 79 123 45 67</p>
          <p>Business Hours: Monday – Friday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>
      <p className="mt-8 text-center text-sm">
        "We aim to respond to all inquiries within 24 hours. Let's create
        something amazing together!"
      </p>
    </div>
  );
}
