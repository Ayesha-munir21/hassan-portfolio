import { ArrowUpRight } from "lucide-react";
import { Experience } from "@/data/portfolioData";

interface ExperienceCardProps {
  exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Background Hover Glassmorphism effect */}
           {/* Date Column - Clean Sans-serif */}
      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2 font-sans animate-fade-in" aria-label={exp.duration}>
        {exp.duration}
      </header>

      {/* Content Column */}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-semibold leading-snug text-slate-200 font-sans">
          <div>
            <span className="inline-flex items-baseline font-semibold leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 text-base">
              {/* Overlay link for accessibility and hover clickability */}
              <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block"></span>
              <span>
                {exp.role} ·{" "}
                <span className="inline-block text-slate-200 group-hover:text-teal-400 transition-colors">
                  {exp.company}
                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px text-[#858585] group-hover:text-teal-400" />
                </span>
              </span>
            </span>
          </div>
          <div className="text-xs text-neutral-500 mt-1 font-sans" aria-hidden="true">
            {exp.location}
          </div>
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-neutral-400 font-sans">
          {exp.description}
        </p>

        {/* High-impact custom styled bullet points */}
        {exp.bullets && exp.bullets.length > 0 && (
          <ul className="mt-3.5 space-y-2 text-xs text-neutral-400 font-sans">
            {exp.bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-2 items-start leading-relaxed">
                <span className="text-teal-400 select-none mt-1 text-[10px]">▸</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech Badges - Clean Sans-serif instead of monospace code style */}
        <ul className="mt-4 flex flex-wrap gap-1.5 font-sans" aria-label="Technologies used">
          {exp.skills.map((skill) => (
            <li key={skill}>
              <div className="flex items-center rounded bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300">
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

