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
    <div className="w-[90%] min-h-full h-auto max-w-6xl mx-auto p-2 pt-[4rem]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
        Boost Your Business with a Website
      </h2>

      <div
        className={`flex justify-around items-center h-full ${
          isMobile ? "flex-col" : "flex-row"
        } gap-4 sm:gap-6 md:gap-8 max-w-full w-full`}
      >
        <Card className="w-full overflow-hidden h-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Business Growth Metrics
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Average increases for businesses with a website
            </CardDescription>
          </CardHeader>
          <CardContent className="p-1 sm:p-2 md:p-4 h-[300px] sm:h-[350px] md:h-[400px]">
            <ChartContainer
              config={{
                increase: {
                  label: "Increase",
                  color: "hsl(var(--primary))",
                },
              }}
              className="h-full w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 20, right: 0, left: 0, bottom: 20 }} // Adjusted margins
                  barSize={100} // Reduced bar size for better alignment
                >
                  <XAxis
                    dataKey="metric"
                    tick={{ fontSize: 10, fill: "var(--color-foreground)" }}
                    interval={0}
                    tickMargin={5}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    tick={{ fontSize: 10, fill: "var(--color-foreground)" }}
                    tickFormatter={(value) => `${value}%`}
                    width={40}
                    domain={[0, 100]}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#f3f3f3] text-[#101010] border border-border p-2 shadow rounded text-xs sm:text-sm">
                            <p className="font-semibold">{data.metric}</p>
                            <p>{data.tooltip}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="increase"
                    fill="var(--color-increase)"
                    radius={[4, 4, 0, 0]}
                    name="Increase"
                    maxBarSize={60}
                    className="transition-all duration-300 hover:brightness-110 hover:shadow-lg" // Hover effect
                    style={{ transformOrigin: "center" }} // Ensure the transform stays centered
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

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

      <div className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6">
        <p>Sources: Marketing Scoop, Half a Bubble Out, Graffiti9</p>
      </div>
    </div>
  );
}
