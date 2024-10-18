import TransitionLink from "@/components/hooks/TransitionLink";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CmtWAyaqs4K
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  const portfolioItems = [
    {
      title: "Dashboard",
      description:
        "The Dashboard that is being used to Display all User that are currently active",
      technologies: ["TS", "NextJS", "Firebase", "TailwindCSS", "ShadCN"],
      link: "/portfolio/dashboard",
    },
    {
      title: "E-commerce Platform",
      description:
        "A robust e-commerce platform built with the latest technologies to provide a seamless shopping experience",
      technologies: ["React", "Redux", "Stripe", "Prisma", "GraphQL"],
      link: "#",
    },
    {
      title: "Productivity App",
      description:
        "A comprehensive productivity app that helps users stay organized and on top of their tasks",
      technologies: ["Vue", "Vuex", "Firebase", "Electron", "Quasar"],
      link: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "A modern social media platform that connects people from all around the world",
      technologies: ["Angular", "RxJS", "NestJS", "MongoDB", "AWS"],
      link: "#",
    },
    {
      title: "Fintech Solution",
      description:
        "A cutting-edge fintech solution that revolutionizes the way people manage their finances",
      technologies: ["React Native", "Expo", "Plaid", "Twilio", "Sentry"],
      link: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A comprehensive fitness tracker that helps users achieve their health and wellness goals",
      technologies: ["Flutter", "Dart", "Firebase", "Google Fit", "Amplitude"],
      link: "#",
    },
  ];
  return (
    <div className="w-full h-auto min-h-[100%] flex justify-center items-center bg-[#101010] mt-3">
      <section className="w-[90%] bg-[#101010] text-[#f3f3f3]">
        <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        <p className="text-xl mb-8 text-center">Our Previous Work</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#1d1d1d] hover:bg-[#f3f3f3] hover:text-[#101010] transition-all select-none rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-sm font-medium bg-[#101010] text-[#f3f3f3] rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <TransitionLink href={item.link} className="text-sm underline">
                Click to see more
              </TransitionLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
