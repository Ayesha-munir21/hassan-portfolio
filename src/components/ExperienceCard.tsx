
import { Experience } from "@/data/portfolioData";

interface ExperienceCardProps {
  exp: Experience;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
  return (
    <div className="group relative flex flex-col pb-1 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Main left-aligned heading: Job Title and Company Name */}
      <h3 className="font-semibold leading-snug text-slate-200 font-sans text-base">
        <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden rounded md:-inset-x-6 lg:block"></span>
        <span className="inline-flex items-baseline gap-1.5 hover:text-indigo-400 focus-visible:text-indigo-400">
          <span>{exp.role}</span>
          <span className="text-neutral-500 font-normal">·</span>
          <span className="text-slate-200 group-hover:text-indigo-400 transition-colors">
            {exp.company}
          </span>
        </span>
      </h3>
      {/* Subtitle: [Date Period], [Location], [City] */}
      <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500 mt-1.5 font-sans">
        {exp.duration}, {exp.location}
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-neutral-400 font-sans">
        {exp.description}
      </p>

      {/* High-impact custom styled bullet points */}
      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="mt-3.5 space-y-2 text-xs text-neutral-400 font-sans">
          {exp.bullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-2 items-start leading-relaxed">
              <span className="text-indigo-400 select-none mt-1 text-[10px]">▸</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Tech Badges - Clean Sans-serif instead of monospace code style */}
      <ul className="mt-4 flex flex-wrap gap-1.5 font-sans" aria-label="Technologies used">
        {exp.skills.map((skill) => (
          <li key={skill}>
            <div className="flex items-center rounded bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-indigo-300">
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

