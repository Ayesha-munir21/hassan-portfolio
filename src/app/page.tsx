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
  const { profile, experiences, projects, education, skills } = portfolioData;

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
    <div className="relative min-h-screen bg-[#1e1e1e] text-[#999999] font-sans selection:bg-teal-300/20 selection:text-teal-200">
      <div className="flex flex-col lg:flex-row min-h-screen w-full">
        
        {/* Sidebar */}
        <div className="w-full lg:w-[35%] xl:w-[30%] lg:bg-[#181818] lg:border-r lg:border-[#333333]/50 lg:sticky lg:top-0 lg:h-screen px-6 py-12 md:px-12 lg:px-16 xl:px-20 lg:py-24 z-30">
          <Sidebar activeSection={activeSection} />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[65%] xl:w-[70%] px-6 py-12 md:px-12 lg:px-24 xl:px-32 lg:py-24 z-10">
          <main id="content" className="max-w-3xl w-full">
            
            {/* About Section */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-6">About</h2>
              <div className="space-y-4 text-neutral-400 text-sm leading-relaxed md:text-base">
                {profile.longBio.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Experience</h2>
              <ol className="space-y-12">
                {experiences.map((exp, idx) => (
                  <li key={idx}><ExperienceCard exp={exp} /></li>
                ))}
              </ol>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Projects</h2>
              <ol className="space-y-12">
                {projects.map((project, idx) => (
                  <li key={idx}><ProjectCard project={project} /></li>
                ))}
              </ol>
            </section>

            {/* Writing / Blog Section */}
            <section id="blog" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Writing</h2>
              <div className="space-y-12">
                {/* Blog 1 */}
                <div className="grid sm:grid-cols-8 gap-4">
                  <header className="text-xs font-semibold uppercase text-neutral-500 sm:col-span-2">May 15, 2026</header>
                  <div className="sm:col-span-6">
                    <h3 className="text-slate-200 font-semibold hover:text-teal-400">
                      <Link href="/blog">Scaling MLOps: Automating Lifecycles for 100+ Models</Link>
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">How we leveraged Databricks Unity Catalog and MLflow to build automated deployment gates.</p>
                  </div>
                </div>
                {/* Blog 2 */}
                <div className="grid sm:grid-cols-8 gap-4">
                  <header className="text-xs font-semibold uppercase text-neutral-500 sm:col-span-2">Apr 02, 2026</header>
                  <div className="sm:col-span-6">
                    <h3 className="text-slate-200 font-semibold hover:text-teal-400">
                      <Link href="/blog">Standardizing Data Ingestion: Reducing Onboarding from 2 Weeks to 8 Hours</Link>
                    </h3>
                    <p className="mt-2 text-xs text-neutral-400">A deep dive into building declarative ingestion templates using AdVerity and PySpark.</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-teal-400 font-semibold hover:text-teal-300">
                  <span>View All Engineering Notes</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="mb-16 scroll-mt-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-8">Education</h2>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-slate-200">{edu.degree}</h3>
                      <p className="text-xs text-neutral-400">{edu.school}</p>
                    </div>
                    <span className="text-xs text-neutral-500 uppercase">{edu.date}</span>
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