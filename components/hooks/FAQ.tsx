import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Q1: How long does it take to build a website?",
      answer:
        "A: The timeline for a project depends on its complexity and scope. A simple website might take 2-4 weeks, while more complex sites or web applications can take several months. We work closely with you to establish a timeline that meets your needs.",
    },
    {
      id: 2,
      question: "Q2: What is your development process?",
      answer:
        "A: Our process includes seven key steps: Discovery & Consultation, Planning & Strategy, Design & Prototyping, Development, Testing & Quality Assurance, Launch, and Hosting & 24/7 Maintenance. You can learn more about each step in our Our Journey Together section.",
    },
    {
      id: 3,
      question: "Q3: Will my website be mobile-friendly?",
      answer:
        "A: Absolutely! All our websites are designed to be fully responsive, ensuring they look and function perfectly on desktops, tablets, and mobile devices.",
    },
    {
      id: 4,
      question: "Q4: Can you help with website content and images?",
      answer:
        "A: Yes, we offer content creation services, including copywriting and sourcing high-quality images. We can help craft engaging content that resonates with your audience.",
    },
    {
      id: 5,
      question:
        "Q5: Do you provide website maintenance and support after launch?",
      answer:
        "A: Yes, we offer ongoing maintenance and support packages to keep your website up-to-date, secure, and running smoothly. Our services include regular updates, backups, security monitoring, and more.",
    },
    {
      id: 6,
      question: "Q6: How much input will I have in the design process?",
      answer:
        "A: Your input is invaluable. We collaborate closely with you throughout the design process to ensure the final product aligns with your vision and brand identity.",
    },
    {
      id: 7,
      question: "Q7: What technologies do you use?",
      answer:
        "A: We specialize in modern web technologies, including TypeScript, JavaScript, React, Next.js, Tailwind CSS for front-end development, and Node.js for back-end development. We work with various databases like MongoDB, PostgreSQL, and MySQL, and use authentication services like JWT, Auth0, and Firebase Authentication.",
    },
    {
      id: 8,
      question: "Q8: How do you ensure the security of my website?",
      answer:
        "A: We prioritize security at every stage of development. We implement best practices for coding, use secure authentication methods, and regularly update and monitor your website to protect against vulnerabilities.",
    },
    {
      id: 9,
      question: "Q9: What are your payment terms?",
      answer:
        "A: We typically require a deposit before starting the project, with the remaining balance due upon completion or at predefined milestones. We'll discuss and agree on payment terms that work for both parties during our initial consultation.",
    },
    {
      id: 10,
      question: "Q10: How do we get started?",
      answer:
        "A: Simply reach out to us via our contact form or give us a call. We'll set up an initial consultation to discuss your project in detail and determine the best way to move forward.",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen gap-5 flex justify-center items-center flex-col text-center mt-10">
        <h1 className="text-5xl font-bold text-[#f3f3f3]">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-[#f3f3f3] w-[70%]">
          "We understand that embarking on a web development project can bring
          up many questions. To help you navigate the process, we've compiled
          answers to some of the most common questions we receive. If you don't
          find what you're looking for, feel free to contact us directly."
        </p>

        <Accordion
          type="single"
          collapsible
          className="w-[90%] justify-center items-center text-[#f3f3f3]"
        >
          {faqs.map((faq) => (
            <AccordionItem
              className="bg-[#101010]"
              key={faq.id}
              value={`item-${faq.id}`}
            >
              <AccordionTrigger className="hover:font-bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
