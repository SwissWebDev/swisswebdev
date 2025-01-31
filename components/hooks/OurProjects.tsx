"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

import { Skeleton } from "@/components/ui/skeleton";

interface Project {
  title: string;
  description: string;
  role: string;
  impact: string;
  detailedDescription: string;
  technologies: string[];
  imageUrl?: string;
  projectLink?: string;
}

const projects: Project[] = [
  {
    title: "Insider ( Work in Progress )",
    description:
      "A streamlined solution for developers and clients to collaborate effectively by visualizing project progress, providing feedback, and managing team access.",
    role: "Full-Stack Development & Infrastructure Management",
    impact:
      "Simplified client-developer communication by providing a clear overview of project progress and fostering a collaborative environment with real-time feedback and updates.",
    detailedDescription:
      "Insider is a tool designed for developers to showcase progress to clients visually and interactively. Clients can track completed tasks, review ongoing work, and provide feedback through comments. Additionally, the platform allows easy team management by enabling invitations for new collaborators. With a focus on performance and scalability, we built Insider using modern technologies to ensure a seamless experience.",
    technologies: [
      "Node.js",
      "Express",
      "REST",
      "TailwindCSS",
      "Supabase",
      "Next.js",
      "TypeScript",
    ],
    imageUrl:
      "https://utfs.io/f/qXy5qiyfXOB2VXvGYUOhGoYkPMZKIpTuQb7rw6s4OWFzHaXS",
    projectLink: "https://insider.swisswebdev.ch/",
  },

  {
    title: "JerryFlowV2",
    description:
      "A powerful backend for the JerryFlowV2 project, covering everything from authentication to securing the app. We also handled hosting and server management for active user connections and reports.",
    role: "Backend Development & Infrastructure Management",
    impact:
      "Enhanced app security and reliability, ensuring smooth user authentication and report handling for active users.",
    detailedDescription:
      "In the JerryFlowV2 project, we developed a scalable and secure backend architecture that supports thousands of concurrent users. We implemented advanced authentication protocols, optimized server performance, and ensured robust security measures to protect user data.",
    technologies: [
      "Node.js",
      "Express",
      "REST",
      "TailwindCSS",
      "Firebase",
      "NextJS",
      "Typescript",
    ],
    imageUrl:
      "https://jry-media.store/cdn/shop/files/JerryFlow_product_pictures.png?v=1718632761&width=800", // Replace with actual image link
    projectLink: "https://jry-media.store/pages/jerryflow-v2", // Replace with actual project link
  },
  {
    title: "JerrySFX",
    description:
      "Developed the backend for JerrySFX, ensuring robust functionality and performance. Managed various aspects including authentication, server management, and infrastructure.",
    role: "Backend Development & Infrastructure Management",
    impact:
      "Created a reliable and scalable backend to handle increased demand, ensuring a smooth experience for end-users.",
    detailedDescription:
      "The JerrySFX project required a backend system capable of handling high user volume. We implemented modern security standards, designed a seamless authentication process, and set up efficient server-side management to ensure optimal performance.",
    technologies: [
      "Node.js",
      "Express",
      "REST",
      "TailwindCSS",
      "Firebase",
      "NextJS",
      "Typescript",
    ],
    imageUrl:
      "https://jry-media.store/cdn/shop/files/Product_banner_SFX.jpg?v=1726961847&width=800",
    projectLink: "https://jry-media.store/pages/jerrysfx",
  },
  {
    title: "Admin Dashboard & Licensing System",
    description:
      "Built a comprehensive admin dashboard to manage user accounts, licensing, and app functionality. Developed a licensing system to regulate access.",
    role: "Frontend & Backend Development",
    impact:
      "Enabled efficient user management and control over app functionality through a user-friendly interface, enhancing app administration capabilities.",
    detailedDescription:
      "The project involved creating a full-featured admin dashboard allowing administrators to manage, edit, ban, and add new users effectively. Additionally, we developed a licensing system to manage and track software usage rights, ensuring regulatory compliance and revenue control.",
    technologies: [
      "React",
      "NextJS",
      "Typescript",
      "Supabase",
      "Firebase",
      "TailwindCSS",
    ],
    imageUrl: "",
    projectLink: "/",
  },
  {
    title: "FP Waiver Signer",
    description:
      "Developed a waiver signing platform for fitzgeraldperformance.com, providing an affordable solution for large car events.",
    role: "Full Stack Development",
    impact:
      "Delivered a cost-effective and scalable waiver solution capable of managing over 25,000 participants, improving event efficiency and participant experience.",
    detailedDescription:
      "FP Waiver Signer was built as a custom solution for a client hosting large car events. We focused on creating a robust platform that could handle thousands of participants while being simple to use. By utilizing a scalable backend and an intuitive frontend, the client saved significantly in cost and effort compared to pre-existing market solutions.",
    technologies: [
      "React",
      "NextJS",
      "Typescript",
      "Supabase",
      "Firebase",
      "TailwindCSS",
      "OAuth2",
    ],
    imageUrl: "",
    projectLink: "https://fitzgeraldperformance.com",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", checkScreenSize);

    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="projects-section bg-gray-100 py-12">
      <div className="container mx-auto px-6 min-h-screen h-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Our Projects & Impact
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We take pride in the work we've done and the impact we've created.
          Here are some of our recent projects:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog
              key={index}
              onOpenChange={(isOpen: any) =>
                !isOpen && setSelectedProject(null)
              }
            >
              <DialogTrigger asChild>
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 transform transition-all hover:scale-105 cursor-pointer card-entry-anim"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.imageUrl && project.imageUrl !== "" ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                  ) : (
                    <div className="w-full h-48 relative grid place-items-center">
                      <h1>No Image Avaiable</h1>
                      <Skeleton className="w-[100%] h-[192px] absolute" />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="font-semibold text-gray-700">
                    Role: <span className="font-normal">{project.role}</span>
                  </p>
                  <p className="font-semibold text-gray-700">
                    Impact:{" "}
                    <span className="font-normal">{project.impact}</span>
                  </p>
                </motion.div>
              </DialogTrigger>
              {selectedProject && selectedProject.title === project.title && (
                <DialogContent
                  className={`${isMobile ? "dialog-content" : ""}`}
                >
                  <DialogHeader>
                    <DialogTitle>{selectedProject.title}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    {project.imageUrl && project.imageUrl !== "" ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-48 object-contain rounded-md mb-4"
                      />
                    ) : (
                      <div className="w-full h-48 relative grid place-items-center">
                        <h1>No Image Avaiable</h1>
                        <Skeleton className="w-[100%] h-[192px] absolute" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {selectedProject.detailedDescription}
                    </p>
                    <p className="font-semibold text-gray-700 mb-2">
                      Role:{" "}
                      <span className="font-normal">
                        {selectedProject.role}
                      </span>
                    </p>
                    <p className="font-semibold text-gray-700 mb-2">
                      Impact:{" "}
                      <span className="font-normal">
                        {selectedProject.impact}
                      </span>
                    </p>
                    <p className="font-semibold text-gray-700 mb-4">
                      Technologies Used:{" "}
                      <span className="font-normal">
                        {selectedProject.technologies.join(", ")}
                      </span>
                    </p>
                    {selectedProject.projectLink && (
                      <a
                        href={selectedProject.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Visit the project here
                      </a>
                    )}
                  </DialogDescription>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
