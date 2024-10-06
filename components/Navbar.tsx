"use client";
import React, { useState, useEffect } from "react";
import TransitionLink from "./hooks/TransitionLink";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Tracks navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); // Tracks previous scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Determine if scrolling up or down
      if (currentScrollPos < prevScrollPos || currentScrollPos <= 0) {
        // Scrolling up or at the top of the page
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]); // useEffect only runs when prevScrollPos changes

  return (
    <nav
      className={`fixed w-full h-[70px] p-2.5 bg-black/25 border-b border-gray-800 backdrop-blur-lg flex justify-between items-center z-[200] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
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
