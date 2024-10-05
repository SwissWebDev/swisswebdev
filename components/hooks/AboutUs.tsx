// AboutUs.js
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [rectProps, setRectProps] = useState({ top: 0, height: 0 });
  const itemRefs = useRef<HTMLDivElement[]>([]);

  const items = [
    {
      id: 1,
      title: "2018: The Beginning",
      content: [
        "<span class='font-bold'>MarvinK.</span> discovers his passion for coding.",
        "Begins learning <span class='font-bold'>C#</span>, laying a strong foundation in software development.",
      ],
      align: "text-left",
    },
    {
      id: 2,
      title: "2018 – 2021: Building Skills",
      content: [
        "Continues to hone programming abilities.",
        "Explores various projects to apply and expand knowledge in <span class='font-bold'>C#</span>.",
      ],
      align: "text-right",
    },
    {
      id: 3,
      title: "2021 - 2024: Transition to Web Development",
      content: [
        "Makes the shift to web development technologies.",
        "Starts with the fundamentals: <span class='font-bold'>HTML</span>, <span class='font-bold'>CSS</span>, and <span class='font-bold'>JavaScript</span>.",
        "Quickly advances to modern frameworks like <span class='font-bold'>React</span> and <span class='font-bold'>Next.js</span>.",
      ],
      align: "text-left",
    },
    {
      id: 4,
      title: "2024: Establishing Swiss Web Dev",
      content: [
        "Founds Swiss Web Dev with a vision to deliver exceptional web solutions.",
        "Takes on the role of <span class='font-bold'>Head Developer</span>.",
      ],
      align: "text-right",
    },
  ];

  useEffect(() => {
    if (hoveredItem !== null) {
      const el = itemRefs.current[hoveredItem];
      if (el) {
        const { offsetTop, offsetHeight } = el;
        setRectProps({ top: offsetTop, height: offsetHeight });
      }
    }
    // Do not update rectProps when hoveredItem is null to keep the rectangle in place
  }, [hoveredItem]);

  return (
    <div className="w-full min-h-screen bg-[#101010] pt-20 text-[#f3f3f3] p-8 relative">
      <div className="text-center mb-8">
        <h1 className="text-5xl  font-bold">About Us</h1>
        <p className="text-3xl">Our Story</p>
      </div>
      <div className="space-y-8 relative">
        {/* Always render the background rectangle */}
        <motion.div
          className="absolute left-0 right-0 bg-[#f3f3f3] pointer-events-none z-0"
          style={{ top: rectProps.top, height: rectProps.height }}
          animate={{
            top: rectProps.top,
            height: rectProps.height,
            opacity: hoveredItem !== null ? 1 : 0,
          }}
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <div
              ref={(el) => {
                itemRefs.current[index] = el!;
              }}
              className={`relative group ${item.align} z-10 py-4 cursor-pointer`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`transition-colors duration-200 ${
                  hoveredItem === index ? "font-bold text-[#101010]" : ""
                }`}
              >
                <h2 className="text-xl font-bold">{item.title}</h2>
                <ul className="list-none pl-5">
                  {item.content.map((text, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: text }} />
                  ))}
                </ul>
              </div>
            </div>
            {/* Ensure the hr is part of the group for hover effect */}
            <hr className="border-gray-700" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
