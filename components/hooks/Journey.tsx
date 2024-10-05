// Journey.js
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Journey() {
  const [hoveredItem, setHoveredItem] = React.useState<number | null>(null);
  const [selectedItem, setSelectedItem] = React.useState<number | null>(1);
  const [rectProps, setRectProps] = React.useState({ top: 0, height: 0 });
  const itemRefs = React.useRef<HTMLLIElement[]>([]);
  const items = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description:
        "Our journey begins with a deep understanding of your business objectives and target audience. We engage in comprehensive consultations to capture your vision, challenges, and goals. This collaborative approach ensures that we align our strategy with your expectations. We'll discuss your requirements, desired functionalities, and any specific preferences for your website or web application. This phase lays the foundation for a successful project by establishing clear communication and mutual understanding.",
    },
    {
      id: 2,
      title: "Planning & Strategy",
      description:
        "Based on our initial discussions, we develop a strategic plan that outlines the project's scope, timelines, and resources. We create detailed project roadmaps and define key milestones to keep everything on track. This phase includes wireframing and creating sitemaps to visualize the structure and flow of your website or app. We also select the most suitable technologies from our code stack—TypeScript, JavaScript, React, Next.js, Tailwind CSS, and Node.js—to ensure scalability, performance, and security.",
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description:
        "Our creative team crafts intuitive and engaging user interfaces using modern design principles. We utilize Tailwind CSS for rapid and responsive UI development, ensuring your site looks great on all devices. Interactive prototypes are created using tools like Figma or Adobe XD, allowing you to experience the look and feel of your site before development begins. We focus on user experience (UX) and user interface (UI) design to make your website or app both visually appealing and easy to navigate.",
    },
    {
      id: 4,
      title: "Development",
      description: `In this phase, we transform designs into a fully functional website or web application. Our front-end development leverages React and Next.js for building dynamic, high-performance interfaces. Next.js enhances SEO and improves load times through server-side rendering and static site generation. We use TypeScript for type-safe coding, reducing errors and improving maintainability. On the back-end, we utilize Node.js to create robust and scalable server environments. We integrate databases such as MongoDB, PostgreSQL, or MySQL for efficient data management. For authentication, we implement secure services like JWT, Auth0, Firebase or Supabase Authentication to protect user data.`,
    },
    {
      id: 5,
      title: "Testing & Quality Assurance",
      description:
        "Quality is at the heart of our development process. We conduct thorough testing using frameworks like Jest and Cypress to perform unit tests, integration tests, and end-to-end tests. Our QA team ensures that your website or app functions flawlessly across different browsers and devices. We also perform performance optimization and security assessments, addressing any vulnerabilities to safeguard your site. This rigorous process guarantees a seamless and secure user experience upon launch.",
    },
    {
      id: 6,
      title: "Launch",
      description:
        "With everything tested and approved, we prepare for launch. We handle all technical aspects of deploying your website or app to the production environment. Using platforms like Vercel, Netlify, or AWS, we ensure that your site is hosted on reliable and scalable infrastructure. We set up domain configurations, SSL certificates for secure connections, and monitor the initial launch to promptly address any issues. This phase marks the culmination of our collaborative effort, making your digital presence accessible to your audience.",
    },
    {
      id: 7,
      title: "Hosting & 24/7 Maintenance",
      description:
        "Our commitment doesn't end at launch. We offer reliable hosting solutions and ongoing maintenance to ensure your website or app remains up-to-date, secure, and performing optimally. We provide 24/7 monitoring, regular updates, backups, and support services. Whether it's updating content, adding new features, or scaling resources to handle increased traffic, we're here to support your evolving needs. With our maintenance services, you can focus on your core business while we take care of the technical details.",
    },
  ];

  // Function to update the rectangle's position and size
  const updateRectProps = (itemId: number | null) => {
    const el = itemId ? itemRefs.current[itemId] : null;
    if (el) {
      const { offsetTop, offsetHeight } = el;
      setRectProps({ top: offsetTop, height: offsetHeight });
    }
  };

  // Update rectangle position when hovered or selected item changes
  React.useEffect(() => {
    if (hoveredItem !== null) {
      updateRectProps(hoveredItem);
    } else if (selectedItem !== null) {
      updateRectProps(selectedItem);
    } else {
      setRectProps({ top: 0, height: 0 });
    }
  }, [hoveredItem, selectedItem]);

  // Determine which item's details to display on the right
  const currentItemId = hoveredItem !== null ? hoveredItem : selectedItem;

  return (
    <div className="flex justify-center items-center w-full h-full min-h-screen bg-[#101010] text-[#f3f3f3]">
      <div className="flex flex-col justify-between w-1/2 p-8">
        <h1 className="text-5xl font-bold mb-2">Our Journey Together</h1>
        <p className="text-md text-gray-400 mb-4">
          From Vision to Reality and Beyond
        </p>
        <div className="flex-1 relative">
          {currentItemId !== null && (
            <motion.div
              className="absolute left-0 right-0 bg-[#f3f3f3] rounded-md pointer-events-none"
              style={{ top: rectProps.top, height: rectProps.height }}
              animate={{
                top: rectProps.top,
                height: rectProps.height,
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <ul className="flex flex-col relative z-10">
            {items.map((item) => (
              <li
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el!;
                }}
                className={`cursor-pointer text-2xl hover:text-[#101010] flex items-center justify-between py-4 transition-colors duration-200 ${
                  selectedItem === item.id || hoveredItem === item.id
                    ? "font-bold  text-red-500"
                    : ""
                } select-none`}
                onMouseEnter={() => {
                  setHoveredItem(item.id);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                }}
                onClick={() => {
                  if (selectedItem === item.id) {
                    setSelectedItem(null);
                  } else {
                    setSelectedItem(item.id);
                    updateRectProps(item.id);
                  }
                }}
              >
                <span>
                  {item.id}. {item.title}
                </span>
                {(selectedItem === item.id || hoveredItem === item.id) && (
                  <span className="ml-2"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center h-full min-h-screen bg-[#f3f3f3] text-[#101010] justify-center w-1/2 p-8">
        {currentItemId && (
          <div>
            <h2 className="text-4xl font-bold mb-2 ">
              {items.find((item) => item.id === currentItemId)?.title}
            </h2>
            <p className="mt-4 text-md">
              {items.find((item) => item.id === currentItemId)?.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
