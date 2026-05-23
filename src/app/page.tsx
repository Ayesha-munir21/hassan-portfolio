"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const { profile, experiences, projects, education } = portfolioData;

  // Scrollspy logic to highlight sidebar links
  useEffect(() => {
    const sections = ["about", "experience", "projects", "blog"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      observer.observe(el);
      return { el, observer };
    });
    return () => observers.forEach((obs) => { if (obs) obs.observer.unobserve(obs.el); });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#1e1e1e] text-[#999999] font-sans selection:bg-teal-300/20 selection:text-teal-200 transition-colors duration-300">
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[35%] xl:w-[30%] lg:bg-[#181818] lg:border-r lg:border-[#333333]/50 lg:sticky lg:top-0 lg:h-screen px-6 py-12 md:px-12 lg:px-16 xl:px-20 lg:py-24 z-30">
          <Sidebar activeSection={activeSection} />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[65%] xl:w-[70%] px-6 py-12 md:px-12 lg:px-24 xl:px-32 lg:py-24 z-10 flex flex-col items-start justify-start">
          <main id="content" className="max-w-3xl w-full">
            
            {/* 01. ABOUT SECTION */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="About me">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">About</h2>
              <div className="space-y-4 text-neutral-400 text-sm leading-relaxed md:text-base">
                {profile.longBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* 02. EXPERIENCE SECTION */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="Experience">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Experience</h2>
              <ol className="space-y-12">
                {experiences.map((exp, idx) => (
                  <li key={idx}><ExperienceCard exp={exp} /></li>
                ))}
              </ol>
              <div className="mt-12">
                <a className="inline-flex items-center gap-1.5 font-semibold text-teal-400 hover:text-teal-300 transition-colors group text-sm md:text-base" 
                   href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <span>View Full Resume / LinkedIn Profile</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </section>

            {/* 03. PROJECTS SECTION (FULL DATA RESTORED) */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="Projects">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Projects</h2>
              <ol className="space-y-12">
                {projects.map((project, idx) => (
                  <li key={idx}><ProjectCard project={project} /></li>
                ))}
              </ol>
            </section>

            {/* 04. WRITING SECTION (FULL PREVIEWS RESTORED) */}
            <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="Writing">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Writing</h2>
              <div className="space-y-12 mb-10">
                
                {/* Blog Preview 1 */}
                <div className="grid sm:grid-cols-8 gap-4 group">
                  <header className="text-xs font-semibold uppercase text-neutral-500 sm:col-span-2 mt-1">May 15, 2026</header>
                  <div className="sm:col-span-6">
                    <h3 className="text-slate-200 font-semibold text-base group-hover:text-teal-400 transition-colors">
                      <Link href="/blog/scaling-mlops-databricks-lakehouse">Scaling MLOps: Automating Lifecycles for 100+ Models on Databricks Lakehouse</Link>
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      How we leveraged Databricks Unity Catalog, MLflow, and strict schema registries to build automated training, validation, and deployment gates.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="text-[10px] text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded">Databricks</span>
                      <span className="text-[10px] text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded">MLOps</span>
                    </div>
                  </div>
                </div>

                {/* Blog Preview 2 */}
                <div className="grid sm:grid-cols-8 gap-4 group">
                  <header className="text-xs font-semibold uppercase text-neutral-500 sm:col-span-2 mt-1">Apr 02, 2026</header>
                  <div className="sm:col-span-6">
                    <h3 className="text-slate-200 font-semibold text-base group-hover:text-teal-400 transition-colors">
                      <Link href="/blog/standardizing-data-ingestion-customer-onboarding">Standardizing Data Ingestion: Reducing Onboarding from 2 Weeks to 8 Hours</Link>
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      A deep dive into building declarative ingestion templates using AdVerity, PySpark, and custom schema validation pipelines.
                    </p>
                    <div className="mt-3 flex gap-2">
                      <span className="text-[10px] text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded">PySpark</span>
                      <span className="text-[10px] text-teal-300 bg-teal-400/10 px-2 py-0.5 rounded">Lakehouse</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Functional View All Link */}
              <Link href="/blog" className="inline-flex items-center gap-1.5 font-semibold text-teal-400 hover:text-teal-300 transition-colors group text-sm md:text-base">
                <span>View All Engineering Notes</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </section>

            {/* 05. EDUCATION SECTION */}
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36" aria-label="Education">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Education</h2>
              <div className="space-y-8 text-sm">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
                      <p className="text-neutral-400 mt-1">{edu.school}</p>
                    </div>
                    <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider shrink-0 mt-1">{edu.date}</span>
                  </div>
                ))}
              </div>
            </section>

            

          </main>
        </div>
      </div>
    </div>
  );
}