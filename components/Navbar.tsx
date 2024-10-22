"use client";
import React, { useState, useEffect, useRef } from "react";
import TransitionLink from "./hooks/TransitionLink";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true); // Tracks navbar visibility
  const prevScrollPosRef = useRef(0); // Tracks previous scroll position
  const NavbarRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  // Screen size check, if mobile, hide navbar and show hamburger menu
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
    if (container) {
      container!.addEventListener("scroll", handleScroll);
    }

    // Clean up listener on unmount
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
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

  return isMobile ? (
    <nav
      ref={NavbarRef}
      className={`bg-[#101010] text-white z-50 w-screen absolute top-0 right-0 h-auto transition-transform duration-300  ${
        isVisible && !hideNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16">
        <div className="md:hidden flex h-full justify-between items-center w-full">
          <a href="/" className="font-bold text-sm">
            SWDK
          </a>
          <button
            onClick={toggleMenu}
            className={`inline-flex items-center justify-center p-2 rounded-md`}
          >
            {isOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobile && (
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 text-start sm:px-3 text-[#f3f3f3]">
            <a
              href="#AboutUs"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#101010]"
            >
              About Us
            </a>
            <a
              href="#Portfolio"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#101010]"
            >
              Our Work
            </a>
            <a
              href="#OurServices"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#101010]"
            >
              Service
            </a>
            <a
              href="#ContactUs"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#101010]"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  ) : (
    <nav
      ref={NavbarRef}
      className={`fixed w-full h-[70px] p-2.5 bg-[#101010] flex justify-between items-center z-[50] transition-transform duration-300 ${
        isVisible && !hideNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-grow justify-center items-center gap-8">
        <a
          href="#AboutUs"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          About Us
        </a>
        <a
          href="#Portfolio"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Our Work
        </a>
      </div>
      <a
        href="#/"
        className="text-center text-white text-4xl font-bold font-lato leading-tight"
      >
        SWD
      </a>
      <div className="flex flex-grow justify-center items-center gap-8">
        <a
          href="#OurServices"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Service
        </a>
        <a
          href="#ContactUs"
          className="text-center text-white text-2xl font-light font-lato leading-8"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
