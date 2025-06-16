import React, { useState } from "react";

const TRUNCATE_LENGTH = 140;

const projects = [
  {
    title: "Pizza Sales Report (Power BI + SQL)",
    description:
      "Built an interactive dashboard using Power BI and SQL to analyze sales trends, customer preferences, and performance metrics. Applied Power Query and DAX for enhanced insights.",
    tech: ["Power BI", "SQL", "DAX", "Power Query"],
    code: "",
    demo: "",
  },
  {
    title: "ChatPDF – AI-Powered Document QA System",
    description:
      "Created using LangChain, ChromaDB, and ChatOllama; supports document ingestion and smart querying via Streamlit.",
    tech: ["LangChain", "ChromaDB", "ChatOllama", "Streamlit"],
    code: "",
    demo: "",
  },
  {
    title: "X-ray Image Classification",
    description:
      "Deep learning-based model to classify X-ray images. Deployed using Streamlit for real-time predictions.",
    tech: ["Deep Learning", "TensorFlow", "Streamlit"],
    code: "",
    demo: "",
  },
  {
    title: "Amazon Prime Video Analytics",
    description:
      "Built a Power BI dashboard for 5,000+ titles with advanced filtering, genre distribution, and IMDb-based insights.",
    tech: ["Power BI", "Python", "Data Analysis"],
    code: "",
    demo: "",
  },
];

const ProjectCard = ({
  proj,
  idx,
  isTruncated,
  onToggle,
}: {
  proj: typeof projects[0];
  idx: number;
  isTruncated: boolean;
  onToggle: () => void;
}) => {
  const { title, description, tech, code, demo } = proj;
  const displayDescription =
    isTruncated && description.length > TRUNCATE_LENGTH
      ? description.slice(0, TRUNCATE_LENGTH) + "…"
      : description;

  return (
    <div
      className="rounded-2xl bg-card shadow-sm p-6 border border-border flex flex-col h-[340px] transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl focus-within:shadow-2xl focus-within:ring-2 focus-within:ring-[#00BFFF] focus-within:ring-offset-2 outline-none animate-fade-in"
      style={{ animationDelay: `${idx * 50}ms` }}
      tabIndex={0}
      aria-label={`${title} project card`}
    >
      <h3 className="font-semibold text-lg sm:text-xl mb-2 text-[#00BFFF] leading-snug">{title}</h3>
      <p className="text-sm mb-3 text-foreground min-h-[54px]">
        {displayDescription}
        {description.length > TRUNCATE_LENGTH && (
          <button
            className="ml-2 underline text-[#00BFFF] hover:text-muted-foreground text-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
            onClick={onToggle}
            aria-label={isTruncated ? "Expand project description" : "Collapse project description"}
          >
            {isTruncated ? "Read more" : "Show less"}
          </button>
        )}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(t => (
          <span
            key={t}
            className="bg-muted text-[#00BFFF] rounded px-2 py-0.5 text-xs font-medium border border-[#00BFFF]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
            tabIndex={0}
            aria-label={t + " tech used"}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-2">
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm text-[#00BFFF] hover:text-muted-foreground transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
            tabIndex={0}
            aria-label="View code"
          >
            View Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm text-[#00BFFF] hover:text-muted-foreground transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00BFFF]"
            tabIndex={0}
            aria-label="Live demo"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [expanded, setExpanded] = useState<{ [index: number]: boolean }>({});

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground leading-tight">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const isTruncated = !expanded[idx];
          return (
            <ProjectCard
              key={proj.title}
              proj={proj}
              idx={idx}
              isTruncated={isTruncated}
              onToggle={() =>
                setExpanded(e => ({ ...e, [idx]: !e[idx] }))
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
