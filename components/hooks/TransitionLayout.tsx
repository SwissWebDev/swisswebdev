// components/TransitionLayout.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import {
  TransitionContext,
  TransitionProvider,
} from "@/components/hooks/TransitionContext";

const TransitionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigateUrl, setNavigateUrl] = useState<string | null>(null);

  const overlayAnimation = useAnimation();
  const textAnimation = useAnimation();

  // Define the list of blacklisted URLs
  const blacklistedUrls = [
    "/live-demo/online-shop/cart",
    "/live-demo/online-shop/admin-login",
    "/live-demo/online-shop/admin-dashboard",
  ];

  // Helper function to check if a URL is blacklisted
  const isBlacklisted = (url: string) => blacklistedUrls.includes(url);

  const startTransition = (url: string) => {
    if (isBlacklisted(url)) {
      // Navigate immediately without animation
      router.push(url);
    } else {
      setNavigateUrl(url);
      setIsTransitioning(true);
    }
  };

  // When transitioning, animate overlay to cover screen, then navigate
  useEffect(() => {
    if (isTransitioning && navigateUrl) {
      const animateTransition = async () => {
        // Reset overlay position to off-screen at bottom
        await overlayAnimation.set({ y: "100%" });

        // Overlay moves up to cover the content
        await overlayAnimation.start({
          y: 0,
          transition: { duration: 0.8, ease: "easeInOut" },
        });

        // Navigate to the new page after overlay covers the screen
        router.push(navigateUrl);

        // Reset transition state
        setIsTransitioning(false);
        setNavigateUrl(null);
      };
      animateTransition();
    }
  }, [isTransitioning, navigateUrl]);

  // On page load or when pathname changes
  useEffect(() => {
    if (isBlacklisted(pathname)) {
      // Skip the animation if the current pathname is blacklisted
      overlayAnimation.set({ y: "-100%" }); // Ensure overlay is off-screen
      return;
    }

    async function animateInitialLoad() {
      // Ensure overlay is at y:0 (covering the screen)
      await overlayAnimation.set({ y: 0 });

      // Set text to initial position (from the left)
      await textAnimation.set({ x: "-100%", opacity: 0 });

      // Text comes in from the left to center
      await textAnimation.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // Pause in the center
      await textAnimation.start({ transition: { duration: 0.5 } });

      // Text moves off to the right
      await textAnimation.start({
        x: "100%",
        opacity: 0,
        transition: { duration: 0.5, ease: "easeIn" },
      });

      // Delay before overlay moves up to reveal content
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Overlay moves up to reveal the content
      await overlayAnimation.start({
        y: "-100%", // Move overlay up off the screen
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }

    // Run the animation on initial load and when the pathname changes
    animateInitialLoad();
  }, [pathname]); // Run whenever the pathname changes

  return (
    <TransitionProvider>
      <TransitionContext.Provider value={{ startTransition }}>
        <motion.div style={{ position: "relative" }}>
          {/* Page content */}
          {children}

          {/* White overlay for page transition */}
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50"
            initial={{ y: 0 }}
            animate={overlayAnimation}
          >
            <div className="w-full h-full flex justify-center items-center">
              <motion.h1
                className="text-[#101010] font-bold text-[400%] m-0"
                initial={{ x: "-100%", opacity: 0 }}
                animate={textAnimation}
              >
                Swiss Web Development
              </motion.h1>
            </div>
          </motion.div>
        </motion.div>
      </TransitionContext.Provider>
    </TransitionProvider>
  );
};

export default TransitionLayout;
