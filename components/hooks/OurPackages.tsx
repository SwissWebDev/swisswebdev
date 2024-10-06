"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

export default function OurPackages() {
  const packages = [
    {
      id: 1,
      PackageName: "Starter Package",
      SubTitle:
        "Ideal For: Startups and small businesses establishing an online presence.",
      Features: [
        "Custom-designed website with up to 5 pages",
        "Mobile-responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media linking",
      ],
      ButtonText: "Request a Quote",
      popular: false,
    },
    {
      id: 2,
      PackageName: "Professional Package",
      SubTitle:
        "Ideal For: Growing businesses looking to expand their digital capabilities.",
      Features: [
        "Advanced custom design with up to 10 pages",
        "Enhanced SEO strategies",
        "Blog setup and content management system",
        "Basic e-commerce functionality",
        "Google Analytics integration",
      ],
      ButtonText: "Request a Quote",
      popular: true,
    },
    {
      id: 3,
      PackageName: "Premium Package",
      SubTitle:
        "Ideal For: Established businesses needing comprehensive, scalable web solutions.",
      Features: [
        "Fully custom website with unlimited pages",
        "Advanced animations and interactive features",
        "Comprehensive SEO and marketing integration",
        "Full e-commerce solutions with inventory management",
        "Custom web applications and third-party integrations",
      ],
      ButtonText: "Contact us",
      popular: false,
    },
  ];

  return (
    <>
      <div className="w-screen h-screen min-h-screen flex flex-col justify-start items-center">
        <h1 className="text-6xl font-bold text-[#f3f3f3] mb-3">Our Packages</h1>
        <p className="text-1xl text-center font-thin text-[#f3f3f3] max-w-[70%]">
          "At Swiss Web Dev, we recognize that every business is unique. We
          offer a range of customizable services designed to fit your specific
          goals and budget. Whether you're launching your first website or need
          a complex web application, we're here to help you succeed."
        </p>
        <div className="w-[90%] h-full flex flex-row justify-center gap-[100px] items-center">
          {packages &&
            packages.map((item) => (
              <>
                <Card
                  key={item.id}
                  className={`w-[30%] h-[60%] bg-[#1d1d1d] text-[#f3f3f3] flex flex-col justify-between relative flex-wrap ${
                    item.popular ? "border-4 border-red-500" : "border-0"
                  }`}
                >
                  {item.popular && (
                    <Badge className="absolute top-[-12px] left-[30%] right-[30%] bg-red-500 text-[#f3f3f3] text-center flex justify-center items-center">
                      Most Popular
                    </Badge>
                  )}
                  <div>
                    <CardHeader>
                      <CardTitle className="">{item.PackageName}</CardTitle>
                      <CardDescription>{item.SubTitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside font-light text-[80%] text-nowrap">
                        {item.Features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                  <CardFooter className="flex justify-center items-end mt-auto">
                    <Button
                      className={`hover:bg-[#f3f3f3] hover:text-[#101010] ${
                        item.popular ? " bg-red-500" : ""
                      } w-[50%]`}
                      variant={"default"}
                    >
                      {item.ButtonText}
                    </Button>
                  </CardFooter>
                </Card>
              </>
            ))}
        </div>
        <div className="w-full h-[] flex flex-col justify-center items-center text-center">
          <Card className="w-[90%] bg-[#0c0c0c] text-[#f3f3f3] border-[#4c4c4c]">
            <CardHeader>
              <CardTitle>Custom Solutions</CardTitle>
              <CardDescription>
                "Don't see exactly what you're looking for? We specialize in
                creating bespoke web solutions. Let's collaborate to bring your
                unique vision to life."
              </CardDescription>
            </CardHeader>
            <CardFooter className="w-full flex justify-center items-center">
              <Button
                className="hover:invert transition-all"
                variant={"default"}
              >
                Lets Talk About Your Project
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
