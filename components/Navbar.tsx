"use client";
import React, { useState, useEffect, useRef } from "react";
import TransitionLink from "./hooks/TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Tracks navbar visibility
  const prevScrollPosRef = useRef(0); // Tracks previous scroll position
  useEffect(() => {
    const container = document.getElementById("page");

    const handleScroll = () => {
      const currentScrollPos = container!.scrollTop; // use container.scrollTop for the scrollable element
      console.log("Scroll position:", currentScrollPos);

      if (
        currentScrollPos < prevScrollPosRef.current ||
        currentScrollPos <= 0
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPosRef.current = currentScrollPos;
    };

    // Add the scroll listener to the container
    container!.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => container!.removeEventListener("scroll", handleScroll);
  }, []);

  const [hideNavBar, setHideNavBar] = useState(false);
  const currURL = usePathname();
  useEffect(() => {
    if (currURL.includes("live-demo")) {
      setHideNavBar(true);
    } else {
      setHideNavBar(false);
    }
  }, [currURL]);

  return (
    <nav
      className={`fixed w-full h-[70px] p-2.5 bg-black/25 border-b border-gray-800 backdrop-blur-lg flex justify-between items-center z-[200] transition-transform duration-300 ${
        isVisible && !hideNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-grow justify-center items-center gap-8">
        <TransitionLink
          href="#AboutUs"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          About Us
        </TransitionLink>
        <TransitionLink
          href="#Portfolio"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Our Work
        </TransitionLink>
      </div>
      <TransitionLink
        href="#/"
        className="text-center text-white text-4xl font-bold font-lato leading-tight"
      >
        SWD
      </TransitionLink>
      <div className="flex flex-grow justify-center items-center gap-8">
        <TransitionLink
          href="#OurServices"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Service
        </TransitionLink>
        <TransitionLink
          href="#ContactUs"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Contact Us
        </TransitionLink>
      </div>
    </nav>
  );
}
