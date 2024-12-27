"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   MailOpen,
//   Phone,
// } from "lucide-react";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <footer className="bg-[#101010] w-full h-auto flex justify-center items-center">
      <div
        className={`w-full min-h-[100px] h-auto flex ${
          isMobile ? "flex-col gap-5" : "flex-row"
        } justify-between items-center text-[#f3f3f3]`}
      >
        <div className="w-full h-full flex justify-center items-center flex-col text-center">
          <h1 className="font-bold text-xl">Follow Us On Our Socials</h1>
          <ul className="decoration-transparent flex justify-center items-center flex-col">
            <li className="text-center">
              <a href="">Instagram</a>
            </li>
            <li className="text-center">
              <a href="">Youtube</a>
            </li>
            <br />
            <li>info@swisswebdev.ch</li>
            <li>+41 78 403 68 32</li>
          </ul>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col text-center">
          <h1 className="font-bold text-2xl">SWDK</h1>
          <p className="font-thin text-xl">
            Crafting Modern Digital Experiences For You!
          </p>
          <br />
          <p className="font-thin text-base">
            © 2024 Swiss Web Development Kiefer
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center flex-col text-center">
          <h1 className="font-bold text-xl">Legal Links</h1>
          <ul className="decoration-transparent text-center">
            <li>
              <a href="/legal/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/legal/privacy-policy">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
