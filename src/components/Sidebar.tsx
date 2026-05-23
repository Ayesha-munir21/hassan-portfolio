"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface SidebarProps {
  activeSection: string;
}

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Sidebar({ activeSection }: SidebarProps) {
  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Blog", id: "blog" },
  ];

  return (
    <div className="flex flex-col h-full justify-between py-2 md:py-6 lg:py-0 font-sans">
      <div>
        {/* Profile Picture */}
        <div className="mb-6 flex items-start justify-start">
          <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#2dd4bf] shadow-lg shadow-black/30 bg-[#1e1e1e]">
            <Image src="/profile.jpg" alt="Hassan Ashraf" fill className="object-cover" priority />
          </div>
        </div>
        
        {/* Name In One Line */}
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-100 whitespace-nowrap">
          Hassan Ashraf
        </h1>
        <h2 className="text-base font-semibold text-teal-400 mt-2.5 tracking-wide">
          Technology Leader &amp; AI/ML Platform Expert
        </h2>
        <p className="text-[#999999] text-sm mt-4 leading-relaxed max-w-xs">
          AI/ML Strategy &amp; Data Platform Expert. Building enterprise-grade, highly scalable cloud infrastructure.
        </p>

        <nav className="mt-16 hidden lg:block">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="group flex items-center py-2.5">
                  <span className={`h-[1px] transition-all duration-300 mr-4 ${activeSection === item.id ? "w-16 bg-teal-400" : "w-8 bg-neutral-600 group-hover:w-16 group-hover:bg-teal-400"}`}></span>
                  <span className={`text-xs uppercase tracking-widest transition-colors duration-300 ${activeSection === item.id ? "text-teal-400 font-semibold" : "text-neutral-500 group-hover:text-teal-400"}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Social links (Dynamically driven from portfolioData) */}
      <div className="flex items-center space-x-5 mt-8 lg:mt-0 pt-4 border-t border-[#333333] lg:border-t-0">
        <a href={portfolioData.profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-teal-400 transition-colors">
          <GithubIcon className="h-5 w-5" />
        </a>
        <a href={portfolioData.profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-teal-400 transition-colors">
          <LinkedinIcon className="h-5 w-5" />
        </a>
        <a href={`mailto:${portfolioData.profile.socials.email}`} className="text-neutral-500 hover:text-teal-400 transition-colors">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}