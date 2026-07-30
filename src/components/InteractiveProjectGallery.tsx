
import React from "react";
import { Github } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  tagline?: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  paper?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Multimodal Search for Engineers",
    tagline: "One search index for PDFs, diagrams, tables, and code",
    category: "AI/ML",
    description: "A retrieval system that indexes PDFs, diagrams, tables, and source code into one searchable index instead of treating each modality separately. Combines Cohere's embedding and reranking models with a LanceDB vector store, fusing vector and full-text search via reciprocal rank fusion. FastAPI backend, React/TypeScript frontend.",
    tech: ["Python", "FastAPI", "Cohere", "LanceDB", "React", "TypeScript"],
    github: "https://github.com/sathvik8317/multimodal-search",
  },
  {
    title: "Credit Card Fraud Detection",
    tagline: "Time-aware resampling and an autoencoder-XGBoost hybrid for fraud detection",
    category: "AI/ML",
    description: "An interpretable fraud detection pipeline on the standard Kaggle credit card fraud dataset. Introduces a time-aware SMOTE variant that resamples within time bins to preserve chronological order, then benchmarks Logistic Regression, Random Forest, and XGBoost against a hybrid model that feeds autoencoder reconstruction-error scores into XGBoost. Published as a peer-reviewed conference paper.",
    tech: ["Python", "XGBoost", "Autoencoder", "SMOTE", "SHAP", "scikit-learn"],
    github: "https://github.com/sathvik8317/Credit-Card-Fraud-Detection",
    paper: "https://doi.org/10.1007/978-3-032-22118-6_18",
  },
  {
    title: "ChatPDF – AI-Powered Document Q&A",
    category: "AI/ML",
    description: "Intelligent document analysis system that allows users to query PDF content using natural language processing and retrieval-augmented generation.",
    tech: ["LangChain", "Streamlit", "ChromaDB", "FastEmbed", "ChatOllama"],
    github: "https://github.com/sathvik8317/ChatPDF-AI-Powered-Document-Q-A-System",
  },
  {
    title: "X-ray Image Classification",
    category: "Deep Learning",
    description: "Advanced medical imaging classifier using convolutional neural networks to detect and classify anomalies in chest X-ray images.",
    tech: ["TensorFlow", "Keras", "Streamlit"],
    github: "https://github.com/sathvik8317/X-ray-Image-Classification",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div
      className="bg-card border border-border rounded-md p-5 transition-all duration-200 hover:border-primary hover:shadow-glow focus-within:ring-2 focus-within:ring-ring focus-within:outline-none group flex flex-col"
      tabIndex={0}
      role="region"
      aria-label={`Project: ${project.title} – View details`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="font-mono text-sm text-signal2">{String(index + 1).padStart(2, "0")}</span>
        <span className="label-mono">{project.category}</span>
      </div>

      <h3 className="font-display text-2xl text-foreground mb-1 leading-tight">
        {project.title}
      </h3>

      {project.tagline && (
        <p className="font-mono text-xs text-signal2 mb-3">{project.tagline}</p>
      )}

      <div className="flex flex-wrap gap-1.5 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="label-mono rounded-sm border border-border px-2 py-0.5 text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex justify-end gap-2 mt-auto -mr-2">
        {project.paper && (
          <a
            href={project.paper}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-1 p-2 rounded-md transition-colors duration-200 text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={`Read the published paper for ${project.title}`}
            style={{ minHeight: '44px' }}
          >
            ↗ Paper
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex items-center gap-1 p-2 rounded-md transition-colors duration-200 text-muted-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label={`View live demo of ${project.title}`}
            style={{ minHeight: '44px' }}
          >
            ↗ Live
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-md transition-colors duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-ring group/icon"
          aria-label={`View ${project.title} source on GitHub`}
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <Github
            size={22}
            className="text-foreground group-hover/icon:text-primary transition-colors duration-200"
          />
        </a>
      </div>
    </div>
  );
};

const InteractiveProjectGallery = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <SectionHeader index="03" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveProjectGallery;
