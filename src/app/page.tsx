"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const containerRef = useRef<HTMLDivElement>(null);

  const { profile, experiences, projects, education, skills } = portfolioData;

  // Spotlight radial gradient cursor tracker - smooth coordinates via CSS variables
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // Scrollspy tracking using an IntersectionObserver
  useEffect(() => {
    const sections = ["about", "experience", "projects", "blog"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-25% 0px -65% 0px", // triggers when element is in the middle of viewport
        }
      );

      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#1e1e1e] text-[#999999] font-sans selection:bg-teal-300/20 selection:text-teal-200 transition-colors duration-300 lg:bg-[radial-gradient(600px_at_var(--mouse-x,_0px)_var(--mouse-y,_0px),_rgba(45,212,191,0.04),_transparent_80%)]"
    >
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        
        {/* Left Sticky Sidebar Panel (30-35% width, darker depth background) */}
        <div className="w-full lg:w-[35%] xl:w-[30%] lg:bg-[#181818] lg:border-r lg:border-[#333333]/50 lg:sticky lg:top-0 lg:h-screen px-6 py-12 md:px-12 lg:px-16 xl:px-20 lg:py-24 z-30 flex flex-col justify-between">
          <Sidebar activeSection={activeSection} />
        </div>

        {/* Right Scrollable Panel (65-70% width, VS Code background) */}
        <div className="w-full lg:w-[65%] xl:w-[70%] px-6 py-12 md:px-12 lg:px-24 xl:px-32 lg:py-24 z-10 flex flex-col items-start justify-start">
          <main id="content" className="max-w-3xl w-full">
            
            {/* About Section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              {/* Mobile sticky header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1e1e1e]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 font-sans">
                  About
                </h2>
              </div>
              
              {/* Headings */}
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 font-sans hidden lg:block">
                About
              </h2>

              <div className="space-y-4 text-neutral-400 text-sm leading-relaxed md:text-base">
                {profile.longBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Skill Grid list */}
              <div className="mt-10">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-sans">
                  Core Expertise &amp; Leadership Focus
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-300 font-medium font-sans">
                  {skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="text-teal-400">✦</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1e1e1e]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 font-sans">
                  Experience
                </h2>
              </div>
              
              {/* Headings */}
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 font-sans hidden lg:block">
                Experience
              </h2>

              <div>
                <ol className="group/list space-y-12">
                  {experiences.map((exp, idx) => (
                    <li key={idx}>
                      <ExperienceCard exp={exp} />
                    </li>
                  ))}
                </ol>

                {/* Resume Download / Full CV section at the bottom */}
                <div className="mt-12">
                  <a
                    className="inline-flex items-center gap-1.5 font-semibold text-teal-400 hover:text-teal-300 transition-colors group text-sm md:text-base font-sans"
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span>View Full Resume / LinkedIn Profile</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1e1e1e]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 font-sans">
                  Projects
                </h2>
              </div>

              {/* Headings */}
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 font-sans hidden lg:block">
                Projects
              </h2>

              <div>
                <ol className="group/list space-y-12">
                  {projects.map((project, idx) => (
                    <li key={idx}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ol>
              </div>
            </section>

            {/* Blog Section */}
            <section
              id="blog"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Recent Blog Posts"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1e1e1e]/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-0 lg:w-auto lg:bg-transparent lg:px-0 lg:py-0 lg:hidden">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 font-sans">
                  Blog
                </h2>
              </div>
              
              {/* Headings */}
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 font-sans hidden lg:block">
                Writing
              </h2>
              
              <div>
                <div className="space-y-8 group/list mb-8">
                  {/* Preview of MLOps blog post */}
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#252526]/50 lg:group-hover:border lg:group-hover:border-[#333333]/60 lg:group-hover:backdrop-blur-md lg:group-hover:shadow-xl lg:group-hover:shadow-black/20"></div>
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2 font-sans">
                      May 15, 2026
                    </header>
                    
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-semibold leading-snug text-slate-200 font-sans">
                        <Link href="/blog" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 text-base">
                          <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block"></span>
                          <span>
                            Scaling MLOps: Automating Lifecycles for 100+ Models on Databricks Lakehouse
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        How we leveraged Databricks Unity Catalog, MLflow, and strict schema registries to build automated training, validation, and deployment gates.
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2 font-sans">
                        <li>
                          <span className="flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300">
                            Databricks
                          </span>
                        </li>
                        <li>
                          <span className="flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300">
                            MLOps
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Preview of Ingestion blog post */}
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#252526]/50 lg:group-hover:border lg:group-hover:border-[#333333]/60 lg:group-hover:backdrop-blur-md lg:group-hover:shadow-xl lg:group-hover:shadow-black/20"></div>
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2 font-sans">
                      Apr 02, 2026
                    </header>
                    
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-slate-200 font-sans">
                        <Link href="/blog" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 text-base">
                          <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block"></span>
                          <span>
                            Standardizing Data Ingestion: Reducing Onboarding from 2 Weeks to 8 Hours
                          </span>
                        </Link>
                      </h3>
                      <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                        A deep dive into building declarative ingestion templates using AdVerity, PySpark, and custom schema validation pipelines.
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2 font-sans">
                        <li>
                          <span className="flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300">
                            PySpark
                          </span>
                        </li>
                        <li>
                          <span className="flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300">
                            Lakehouse
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    className="inline-flex items-center gap-1.5 font-semibold text-teal-400 hover:text-teal-300 transition-colors group text-sm md:text-base font-sans"
                    href="/blog"
                  >
                    <span>View All Blog Posts / Engineering Notes</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </section>

            {/* Credentials / Education Subsection */}
            <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="Education">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6 font-sans">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h3 className="font-semibold text-slate-200 text-sm md:text-base font-sans">
                        {edu.degree}
                      </h3>
                      <p className="text-xs md:text-sm text-neutral-400 mt-0.5">
                        {edu.school}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider shrink-0 mt-1 font-sans">
                      {edu.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer with credit */}
            <footer className="max-w-md pb-16 text-xs text-neutral-500 sm:pb-0 font-sans">
              <p>
                Built with{" "}
                <span className="text-neutral-400 hover:text-teal-300">Next.js</span>,{" "}
                <span className="text-neutral-400 hover:text-teal-300">Tailwind CSS</span> and{" "}
                <span className="text-neutral-400 hover:text-teal-300">TypeScript</span>.
                Inspired by the layouts of{" "}
                <a
                  className="font-medium text-neutral-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  brittanychiang.com
                </a>.
              </p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}

