"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useEffect, useState } from "react";

const data = [
  {
    metric: "Revenue",
    increase: 75,
    tooltip: "60-90% increase in revenue",
  },
  {
    metric: "Leads",
    increase: 67,
    tooltip: "67% increase in monthly leads",
  },
  {
    metric: "Conversion",
    increase: 64,
    tooltip: "64% increase in conversion rates",
  },
];

export default function GrowthData() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsMobile(window.innerWidth < 950);
    }
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="w-[90%] min-h-full h-auto max-w-6xl mx-auto p-2 pt-[4rem] flex justify-center items-center flex-col">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
        Boost Your Business with a Website
      </h2>

      <div
        className={`flex justify-around items-center h-full ${
          isMobile ? "flex-col" : "flex-row"
        } gap-4 sm:gap-6 md:gap-8 max-w-full w-full`}
      >
        <Card
          className={`w-full h-full flex flex-col items-center justify-center ${
            isMobile ? "" : "bg-transparent border-none shadow-none"
          }`}
        >
          <CardHeader className="h-full flex flex-col justify-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-center">
              10-20X
            </CardTitle>
            <CardDescription className="text-center text-base sm:text-lg mt-2">
              Average return on investment from having a well-optimized website
            </CardDescription>
          </CardHeader>
          <CardContent className="h-full flex items-center justify-center">
            <p className="text-center text-sm sm:text-base text-muted-foreground">
              Invest in your online presence and see significant returns
            </p>
          </CardContent>
          <CardFooter className="text-center"></CardFooter>
        </Card>
      </div>

      <div className="text-center text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
        <p>Sources: Marketing Scoop, Half a Bubble Out, Graffiti9</p>
      </div>
    </div>
  );
}
