// AboutUs.js
"use client";

import React from "react";

export default function AboutUs() {
  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description:
        "Started learning <span class='font-bold'>C#</span>, establishing a strong software development base.",
    },
    {
      year: "2018 - 2021",
      title: "Skill Development",
      description:
        "Engaged in diverse projects to deepen expertise in <span class='font-bold'>C#</span>.",
    },
    {
      year: "2021 - 2024",
      title: "Web Development Transition",
      description:
        "Shifted to web technologies, mastering <span class='font-bold'>HTML</span>, <span class='font-bold'>CSS</span>, <span class='font-bold'>JavaScript</span>, and advanced frameworks like <span class='font-bold'>React</span> and <span class='font-bold'>Next.js</span>.",
    },
    {
      year: "2024",
      title: "Swiss Web Dev Established",
      description:
        "Founded Swiss Web Dev to provide high-quality web solutions, assuming the role of <span class='font-bold'>Head Developer</span>.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 text-[#101010] bg-[#f3f3f3]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10">
          {/* Header Section */}
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Journey
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              Follow along as we share the key milestones in our company's
              history.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="relative grid gap-10 pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-muted-foreground/20">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="grid gap-2 text-sm relative border-b-2"
              >
                {/* Dot Indicator */}
                <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />

                {/* Milestone Title */}
                <div className="font-medium text-2xl">
                  <span className="text-primary">{milestone.year}</span> -{" "}
                  {milestone.title}
                </div>

                {/* Milestone Description */}
                <div
                  className="text-muted-foreground text-1xl"
                  dangerouslySetInnerHTML={{ __html: milestone.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
