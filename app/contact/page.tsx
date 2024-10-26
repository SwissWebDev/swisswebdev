"use client";

import React, { useState } from "react";
import { sendEmail } from "./actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ClipLoader from "react-spinners/ClipLoader";

import { useRouter } from "next/router";

export default function ContacUs() {
  // const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = {
      // Collect your form data here
      email: event.target.email.value,
      product: event.target.product.value,
      message: event.target.message.value,
      form: "contactus",
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
        setData(result);

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
      <div className="overflow-x-hidden overflow-y-scroll h-auto min-h-screen w-full max-w-[100vw] scroll-smooth pt-[4rem] flex justify-center items-center">
        <div className="w-full h-auto flex justify-center items-center flex-col text-[#101010]">
          <div className="w-[90%] h-auto flex justify-start items-center flex-col gap-3">
            <h1 className="font-bold text-3xl pt-5 text-[#f3f3f3]">
              Contact Us!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-[50%] h-auto flex justify-center items-start flex-col gap-1"
            >
              <Label className="text-[#f3f3f3]" htmlFor="email">
                Email
              </Label>
              <Input
                required
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
              />
              <Separator className="my-5" />
              <Label className="text-[#f3f3f3]" htmlFor="product">
                All Our Packages
              </Label>
              <Select required name="product">
                <SelectTrigger className="w-full">
                  <SelectValue
                    className="w-full text-[#101010]"
                    placeholder="Packages"
                  />
                </SelectTrigger>
                <SelectContent className="w-full text-[#101010]">
                  <SelectGroup>
                    <SelectLabel>Packages</SelectLabel>
                    <SelectItem value="starter">Starter Package</SelectItem>
                    <SelectItem value="professional">
                      Professional Package
                    </SelectItem>
                    <SelectItem value="enterprise">Premium Package</SelectItem>
                    <SelectItem value="custom">Custom Package</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Separator className="my-5" />
              <Label className="text-[#f3f3f3]" htmlFor="message">
                Your Message
              </Label>
              <Textarea
                required
                name="message"
                placeholder="Write about your ideas..."
              />
              <Separator className="my-5" />
              <Button className="w-full" type="submit">
                Contact Us
              </Button>
            </form>
            {error && (
              <div className="w-[50%] h-full flex justify-center items-start flex-col gap-1">
                <h1 className="font-bold text-3xl pt-5 text-red-500">Error</h1>
                <p className="text-red-500">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
