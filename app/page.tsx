import AboutUs from "@/components/hooks/AboutUs";
import ContactUs from "@/components/hooks/ContactUs";
import FAQ from "@/components/hooks/FAQ";
import Journey from "@/components/hooks/Journey";
import OurPackages from "@/components/hooks/OurPackages";
import OurServices from "@/components/hooks/OurServices";
import Portfolio from "@/components/hooks/Portfolio";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="snap-y snap-proximity overflow-x-hidden overflow-y-scroll h-screen max-w-[100vw] scroll-smooth">
      {/* First Section */}
      <div className="w-screen h-screen snap-start relative">
        <div className="w-full h-full max-h-screen max-w-[100%] relative">
          {/* Content */}
          <div className="w-full h-full flex flex-row gap-5 justify-center items-center relative z-10">
            <div
              id="header"
              className="w-full h-full flex flex-col justify-center items-start"
            >
              {/* Header Title */}
              <div
                id="headerTitle"
                className="w-full relative overflow-hidden group"
              >
                <h1 className="hover:text-red-500 text-[#f3f3f3] transition-colors header-title font-bold w-full pl-[5vw] select-none relative z-10">
                  Swiss Web Dev
                </h1>
                <div className="absolute inset-0 group-hover:bg-[#f3f3f3] bg-red-500 transform origin-center opacity-100 scale-y-100 transition-all duration-500 z-0"></div>
              </div>
              {/* Header Subtitle */}
              <div
                id="headerSubTitle"
                className="w-full relative overflow-hidden group"
              >
                <p className="text-[#f3f3f3] sub-title italic font-extralight select-none pl-[5vw] relative z-10">
                  Crafting Digital Experiences For You!
                </p>
                <div className="absolute inset-0 bg-red-500 transform origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 z-0"></div>
              </div>
            </div>
          </div>
          <div
            className="blob absolute w-[400px] h-[400px] bg-white z-[9] bottom-0 right-0 blur-3xl rounded-full"
            style={{ "--delay": "5s " } as React.CSSProperties}
          ></div>
          <div
            className="blob absolute w-[400px] h-[400px] bg-white z-[9] top-0 left-100 blur-3xl rounded-full"
            style={{ "--delay": "0s" } as React.CSSProperties}
          ></div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-screen h-screen snap-start">
        <div className="flex justify-center h-full items-center flex-row bg-[#101010]">
          <Journey />
        </div>
      </div>

      {/* Third Section */}
      <div id="AboutUs" className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <AboutUs />
        </div>
      </div>

      {/* Fourth Section */}
      <div id="Portfolio" className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <Portfolio />
        </div>
      </div>
      <div id="OurServices" className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <OurServices />
        </div>
      </div>
      <div className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <OurPackages />
        </div>
      </div>
      <div className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <FAQ />
        </div>
      </div>
      <div id="ContactUs" className="w-screen h-screen snap-start">
        <div className="w-full h-full bg-[#101010]">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}
