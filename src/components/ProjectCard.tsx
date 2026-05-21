import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
}

// Inline SVG tech icons in teal (#2dd4bf) - replaces missing Lucide brand icons
const TechIcon = ({ skill }: { skill: string }) => {
  const s = skill.toLowerCase();

  if (s.includes("aws") || s.includes("amazon")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.064.056.128.056.184 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.368-1.3-.368-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("azure") || s.includes("microsoft")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M5.483 21.3H22l-8.763-2.19 5.28-5.932-9.05 1.05L13.244 2.7H7.79L2 17.255l3.483 4.045z" fill="#2dd4bf" opacity=".7"/>
        <path d="M12.24 2.7h5.508L8.99 14.228 5.483 21.3 2 17.254 7.778 2.7h4.462z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.94S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.402 3.35-3.402h5.769s3.24.052 3.24-3.13V3.13S18.28 0 11.914 0zm-3.217 1.809a1.046 1.046 0 1 1 0 2.09 1.046 1.046 0 0 1 0-2.09z" fill="#2dd4bf" opacity=".8"/>
        <path d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752H12v-.826h8.082S24 18.211 24 12.031c0-6.18-3.404-5.96-3.404-5.96h-2.03v2.867s.11 3.402-3.35 3.402H9.447S6.207 12.288 6.207 15.47V20.87S5.72 24 12.086 24zm3.217-1.809a1.046 1.046 0 1 1 0-2.09 1.046 1.046 0 0 1 0 2.09z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("kafka")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 1.846c5.595 0 10.154 4.56 10.154 10.154S17.595 22.154 12 22.154 1.846 17.595 1.846 12 6.405 1.846 12 1.846zm-1.23 4.615v2.77c-.692.25-1.154.9-1.154 1.615 0 .384.13.742.352 1.03l-2.044 3.54a.577.577 0 1 0 1 .577l2.044-3.54c.234.09.487.14.748.14.923 0 1.693-.617 1.923-1.462h2.307a.577.577 0 1 0 0-1.154H13.64c-.23-.845-1-1.462-1.923-1.462a1.97 1.97 0 0 0-.37.037V6.46a.577.577 0 1 0-1.154 0l.577.001zm0 4.385c0-.424.345-.77.77-.77s.769.346.769.77c0 .423-.345.769-.77.769s-.769-.346-.769-.77zm-3.462 2.77a.577.577 0 1 0 0 1.153h.984c.23.845 1 1.462 1.923 1.462.262 0 .514-.05.748-.14l1.008 1.748a.577.577 0 1 0 1-.577L10.97 15.51c.222-.288.352-.646.352-1.03 0-.716-.463-1.366-1.154-1.616v-.247H8.923v.001l-.615-.001zM12 13.846c.424 0 .77.346.77.77 0 .423-.346.769-.77.769s-.77-.346-.77-.77.346-.769.77-.769z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("databricks")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M12 2L2 7.5V12l10 5.5L22 12V7.5L12 2zM2 14.5v4.008L12 24l10-5.492V14.5l-10 5.5-10-5.5z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("docker") || s.includes("kubernetes")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("tensorflow") || s.includes("sparkml") || s.includes("pyspark")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zM12.46 24V0l10.248 5.856.015 5.31-6.168-3.564v14.02L12.46 24z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("snowflake")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M21.065 12.29l-2.04-1.148 2.04-1.145a.938.938 0 00.344-1.281.95.95 0 00-1.29-.341l-2.046 1.148V7.219a.945.945 0 00-.947-.942.945.945 0 00-.946.942v2.295l-2.04-1.145a.95.95 0 00-1.29.34.938.938 0 00.343 1.282l2.04 1.148L13.19 12.29l-2.04-1.152a.95.95 0 00-1.29.34.938.938 0 00.343 1.28l2.04 1.15-2.04 1.148a.938.938 0 00-.343 1.281.95.95 0 001.29.34l2.04-1.148v2.29a.945.945 0 00.947.942.945.945 0 00.946-.942v-2.29l2.04 1.148a.95.95 0 001.29-.34.938.938 0 00-.344-1.281l-2.04-1.149 2.04-1.149 2.046 1.148a.95.95 0 001.29-.34.938.938 0 00-.343-1.278zm-9.03-5.146l-1.716-.965V8.57a.945.945 0 01-.947.942.945.945 0 01-.946-.942V6.18l-1.716.965a.95.95 0 01-1.29-.34.938.938 0 01.344-1.282l1.715-.964-1.715-.965a.938.938 0 01-.344-1.281.95.95 0 011.29-.34l1.716.965V1.632a.945.945 0 01.946-.942.945.945 0 01.947.942v2.306l1.716-.965a.95.95 0 011.29.34.938.938 0 01-.344 1.28l-1.716.965 1.716.965a.938.938 0 01.344 1.28.95.95 0 01-1.29.341zm0 13.71l-1.716-.964v2.305a.945.945 0 01-.947.942.945.945 0 01-.946-.942V19.89l-1.716.965a.95.95 0 01-1.29-.34.938.938 0 01.344-1.281l1.715-.965-1.715-.965a.938.938 0 01-.344-1.28.95.95 0 011.29-.34l1.716.963V14.34a.945.945 0 01.946-.941.945.945 0 01.947.941v2.307l1.716-.964a.95.95 0 011.29.34.938.938 0 01-.344 1.28l-1.716.965 1.716.964a.938.938 0 01.344 1.28.95.95 0 01-1.29.342z" fill="#2dd4bf"/>
      </svg>
    );
  }

  if (s.includes("dbt")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
        <path d="M20.688 0A3.312 3.312 0 0124 3.313v17.375A3.312 3.312 0 0120.688 24H3.312A3.312 3.312 0 010 20.688V3.312A3.312 3.312 0 013.313 0h17.375zm-7.618 5.438L9.083 9.42l-3.99 3.988 1.846 1.846 2.144-2.144 2.144 2.144 1.846-1.846-2.144-2.144 2.144-2.144 1.846 1.846 3.988-3.988L19.003 5.1l-5.933 5.935-1.846-1.846 5.933-5.935-3.987 2.184z" fill="#2dd4bf"/>
      </svg>
    );
  }

  // Default terminal icon for any other tech
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 inline-block mr-1" aria-hidden="true">
      <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
    </svg>
  );
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {/* Background Hover Glassmorphism effect */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#252526]/40 lg:group-hover:border lg:group-hover:border-[#333333]/50 lg:group-hover:backdrop-blur-md lg:group-hover:shadow-xl lg:group-hover:shadow-black/20"></div>

      {/* Image Thumbnail Column (25% width on desktop) */}
      <div className="z-10 sm:col-span-2 mb-4 sm:mb-0">
        <div className="w-full h-24 sm:h-20 rounded border border-[#333333]/60 overflow-hidden relative group-hover:border-teal-400/40 transition-colors bg-[#181818]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={180}
              className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-500 font-sans text-xs uppercase tracking-wider font-semibold bg-[#1a1a1a]">
              Project Preview
            </div>
          )}
        </div>
      </div>

      {/* Content Column (75% width on desktop) */}
      <div className="z-10 sm:col-span-6">
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

        {/* Tech Badges - Clean Sans-serif instead of monospace code style */}
        <ul className="mt-4 flex flex-wrap gap-1.5 font-sans" aria-label="Technologies used">
          {project.skills.map((skill) => (
            <li key={skill}>
              <div className="flex items-center rounded bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider leading-5 text-teal-300 hover:bg-teal-500/20 transition-colors">
                <TechIcon skill={skill} />
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
