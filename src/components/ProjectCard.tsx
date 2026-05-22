"use client";

import React from 'react';
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Background Hover Glassmorphism effect */}
      {/* Content Column - Now spans all 8 columns because images are removed */}
      <div className="z-10 sm:col-span-8">
        <h3 className="font-semibold leading-snug text-slate-200 font-sans">
          <div>
            <span className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 text-base">
              <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block"></span>
              <span>
                {project.title}
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px text-[#858585] group-hover:text-teal-400" />
              </span>
            </span>
          </div>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-neutral-400 font-sans">
          {project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mt-3.5 space-y-2 text-xs text-neutral-400 font-sans">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex gap-2 items-start leading-relaxed">
                <span className="text-teal-400 select-none mt-1 text-[10px]">▸</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges - Text only (Icons removed as per Sir's request) */}
        <ul className="mt-4 flex flex-wrap gap-1.5 font-sans" aria-label="Technologies used">
          {project.skills.map((skill) => (
            <li key={skill}>
              <div className="flex items-center rounded bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300 hover:bg-teal-500/20 transition-colors">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}