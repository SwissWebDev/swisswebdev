"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/hooks/TransitionLink";
import Image from "next/image";

export default function ProjectTrackingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("project-tracking-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="project-tracking-section"
      className="w-full h-full flex justify-center items-center flex-col"
    >
      <div className="w-full h-auto bg-[#f5f5f5] text-[#101010] py-20">
        <div
          className={`container mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Track Your Website Progress
              </h2>
              <p className="text-xl">
                Access real-time data and track the development of your custom
                website seamlessly. Stay updated with real-time analytics and
                project milestones.
              </p>
              <Button
                className="bg-red-500 hover:bg-[#101010] hover:text-[#f3f3f3] transition-colors"
                size="lg"
                asChild
              >
                <TransitionLink href="https://mywebsite.swisswebdev.ch">
                  View Your Dashboard
                </TransitionLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
