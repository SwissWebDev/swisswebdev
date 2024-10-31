"use client";

import Footer from "@/components/footer";
import AboutUs from "@/components/hooks/AboutUs";
import ContactUs from "@/components/hooks/ContactUs";
import FAQ from "@/components/hooks/FAQ";
import GrowthData from "@/components/hooks/GrowthData";
import Journey from "@/components/hooks/Journey";
import OurPackages from "@/components/hooks/OurPackages";
import OurProjects from "@/components/hooks/OurProjects";
import OurServices from "@/components/hooks/OurServices";
import ProjectTrackingSection from "@/components/hooks/ProjectTrackingSection";
import TransitionLink from "@/components/hooks/TransitionLink";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const prevScrollPosRef = useRef(0); // Tracks previous scroll position
  const startScale = 1;

  useEffect(() => {
    const container = document.getElementById("page");

    const handleScroll = () => {
      const currentScrollPos = container!.scrollTop; // use container.scrollTop for the scrollable element
      console.log("Sizing Scroll position:", currentScrollPos, scale);

      setScale(currentScrollPos / 2000 + startScale);
      setOpacity(1 - currentScrollPos / 1000);

      prevScrollPosRef.current = currentScrollPos;
    };

    // Add the scroll listener to the container
    container!.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => container!.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="page"
        className="snap-y snap-proximity  overflow-x-hidden overflow-y-scroll h-screen min-h-screen w-full max-w-[100vw] scroll-smooth"
      >
        {" "}
        {/* snap-y snap-proximity */}
        {/* First Section */}
        <div
          style={{ transform: `scale(${scale})`, opacity: opacity }}
          className="w-screen h-screen snap-start fixed z-[-1]"
        >
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
                  <p className="text-[#f3f3f3] sub-title italic font-extralight select-none pl-[5vw] w-[90%] relative z-10">
                    Crafting Modern Digital Experiences For You!
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
        <div className="h-screen w-screen"></div>
        {/* Second Section */}
        <div className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full pb-5 flex justify-center items-start bg-[#f3f3f3] text-[#101010] invert">
            <GrowthData />
          </div>
        </div>
        <div className="w-screen min-h-screen h-screen snap-start">
          <div className="w-full h-full pb-5 flex justify-center items-center bg-[#f3f3f3] text-[#101010]">
            <ProjectTrackingSection />
          </div>
        </div>
        <div id="Portfolio" className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full bg-[#101010]">
            <OurProjects />
          </div>
        </div>
        <div className="w-screen min-h-screen h-auto snap-start">
          <div className="flex justify-center h-full items-center flex-row bg-[#101010]">
            <Journey />
          </div>
        </div>
        <div
          id="OurServices"
          className="w-screen min-h-screen h-auto snap-start"
        >
          <div className="w-full h-full bg-[#101010]">
            <OurServices />
          </div>
        </div>
        <div className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full bg-[#101010]">
            <OurPackages />
          </div>
        </div>
        <div id="Portfolio" className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full bg-[#101010]">
            <div className="h-screen flex justify-center items-center flex-col gap-10 text-[#f3f3f3]">
              <h1 className="text-3xl lg:text-6xl font-bold text-center">
                Want to experience it for Yourself?
              </h1>
              <Button
                className="bg-red-500 w-[50%] lg:w-[25%] hover:bg-[#f3f3f3] hover:text-[#101010] transition-colors"
                variant={"default"}
                asChild
              >
                <TransitionLink href="/live-demo/online-shop">
                  Start Experienece
                </TransitionLink>
              </Button>
            </div>
          </div>
        </div>
        <div className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full bg-[#101010]">
            <FAQ />
          </div>
        </div>
        <div id="ContactUs" className="w-screen min-h-screen h-auto snap-start">
          <div className="w-full h-full bg-[#101010]">
            <ContactUs />
          </div>
        </div>
        {/* <div
        id="AboutUs"
        className="w-screen h-auto min-h-screen h-screensnap-start"
      >
        <div className="w-full h-full bg-[#101010]">
          <AboutUs />
        </div>
      </div> */}
        <div
          id="ContactUs"
          className="w-screen min-h-[100px] py-20 h-auto snap-start"
        >
          <div className="w-full h-full bg-[#101010]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
