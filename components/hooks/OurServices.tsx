"use client";

import { useEffect, useState } from "react";

export default function OurServices() {
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

  return isMobile ? (
    <>
      {" "}
      <div className="bg-[#101010] invert text-white p-8 min-h-screen h-auto flex justify-start items-center flex-col pt-[4rem]">
        <div className="h-fit w-[90%] flex justify-center items-center flex-col pb-3">
          <h1 className="text-2xl font-bold text-center">Our Services</h1>
          <p className="text-base font-medium mt-2 text-center">
            "At Swiss Web Dev, we offer a comprehensive suite of web development
            services designed to help your business thrive in the digital
            landscape."
          </p>
        </div>
        <div className="w-[90%]">
          <div className="border-t border-gray-700 py-8">
            <h2 className="text-2xl font-semibold">Web Development</h2>
            <p className="mt-2 font-thin">
              Custom Websites
              <br />
              Tailored solutions that reflect your brand and engage your
              audience.
              <br />
              Web Applications
              <br />
              Robust apps that streamline your business processes.
              <br />
              Design Services
            </p>
          </div>
          <div className="border-t border-gray-700 py-8">
            <h2 className="text-xl font-semibold">UI/UX Design</h2>
            <p className="mt-2 font-thin">
              Intuitive designs that offer seamless user experiences.
              <br />
              Branding
              <br />
              Creating a strong visual identity that resonates with your
              customers.
              <br />
              E-commerce Solutions
            </p>
          </div>
          <div className="border-t border-gray-700 py-8">
            <h2 className="text-xl font-semibold">Online Stores</h2>
            <p className="mt-2 font-thin">
              Secure and scalable e-commerce platforms to boost your sales.
              <br />
              Payment Integration
              <br />
              Seamless checkout experiences with trusted payment gateways.
              <br />
              Maintenance & Hosting
            </p>
          </div>
          <div className="border-t border-gray-700 py-8">
            <h2 className="text-xl font-semibold">24/7 Support</h2>
            <p className="mt-2 font-thin">
              Around-the-clock assistance to keep your site running smoothly.
              <br />
              Security Updates
              <br />
              Regular updates to protect your site from vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="bg-[#101010] text-white p-8 min-h-screen flex justify-center items-center flex-col">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="text-lg mt-2">
            "At Swiss Web Dev, we offer a comprehensive suite of web development
            services designed to help your business thrive in the digital
            landscape."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-b border-gray-700 py-8">
          <div className="border-r border-gray-700 px-4">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2">
              Custom Websites
              <br />
              Tailored solutions that reflect your brand and engage your
              audience.
              <br />
              Web Applications
              <br />
              Robust apps that streamline your business processes.
              <br />
              Design Services
            </p>
          </div>
          <div className="border-r border-gray-700 px-4">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="mt-2">
              Intuitive designs that offer seamless user experiences.
              <br />
              Branding
              <br />
              Creating a strong visual identity that resonates with your
              customers.
              <br />
              E-commerce Solutions
            </p>
          </div>
          <div className="border-r border-gray-700 px-4">
            <h3 className="text-xl font-semibold">Online Stores</h3>
            <p className="mt-2">
              Secure and scalable e-commerce platforms to boost your sales.
              <br />
              Payment Integration
              <br />
              Seamless checkout experiences with trusted payment gateways.
              <br />
              Maintenance & Hosting
            </p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-semibold">24/7 Support</h3>
            <p className="mt-2">
              Around-the-clock assistance to keep your site running smoothly.
              <br />
              Security Updates
              <br />
              Regular updates to protect your site from vulnerabilities.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>
            "Not sure which service fits your needs?{" "}
            <a href="#" className="underline text-blue-400">
              Contact us
            </a>{" "}
            for a free consultation."
          </p>
        </div>
      </div>
    </>
  );
}
