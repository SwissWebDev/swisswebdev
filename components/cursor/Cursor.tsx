// CursorFollower.js
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const mouseOffset = { x: 50, y: 50 };
  const circleSize = 0.2;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(circleSize);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX - mouseOffset.x,
        y: event.clientY - mouseOffset.y,
      });
    };

    const handleMouseDown = () => {
      setScale(circleSize / 2); // Decrease the scale when mouse is down
    };

    const handleMouseUp = () => {
      setScale(circleSize); // Reset the scale when mouse is up
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className="w-[100px] h-[100px] bg-[#f3f3f3] rounded-full fixed pointer-events-none z-[300] transform -translate-x-1/2 -translate-y-1/2"
      animate={{ x: position.x, y: position.y, scale: scale }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CursorFollower;
