
import React from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ChatPDF – AI-Powered Document Q&A",
    category: "AI/ML",
    description: "Intelligent document analysis system that allows users to query PDF content using natural language processing and retrieval-augmented generation.",
    tech: ["LangChain", "Streamlit", "ChromaDB", "FastEmbed", "ChatOllama"],
    github: "https://github.com/yourusername/chatpdf",
    demo: "https://chatpdf-demo.com",
  },
  {
    title: "X-ray Image Classification",
    category: "Deep Learning",
    description: "Advanced medical imaging classifier using convolutional neural networks to detect and classify anomalies in chest X-ray images.",
    tech: ["TensorFlow", "Keras", "Streamlit"],
    github: "https://github.com/yourusername/xray-classifier",
    demo: "https://xray-demo.com",
  },
  {
    title: "Amazon Prime Video Analytics",
    category: "Data Analytics",
    description: "Comprehensive dashboard analyzing streaming trends, content performance, and user engagement metrics across Prime Video's catalog.",
    tech: ["Power BI", "SQL", "DAX"],
    github: "https://github.com/yourusername/prime-analytics",
    demo: "https://prime-analytics-demo.com",
  },
  {
    title: "Pizza Sales Report",
    category: "Business Intelligence",
    description: "Interactive sales dashboard providing insights into pizza chain performance, customer preferences, and revenue optimization.",
    tech: ["Power BI", "SQL"],
    github: "https://github.com/yourusername/pizza-sales",
    demo: "https://pizza-sales-demo.com",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div 
      className="bg-[#1E1F22] rounded-2xl p-4 shadow-[0_4px_8px_rgba(0,0,0,0.3)] transition-all duration-200 hover:scale-105 hover:border-2 hover:border-[#D97706] focus-within:ring-2 focus-within:ring-[#3B82F6] focus-within:outline-none group"
      tabIndex={0}
      role="region"
      aria-label={`Project: ${project.title} – View details`}
    >
      {/* Category Tag */}
      <div className="mb-3">
        <span className="inline-block bg-[#3B82F6] text-white text-xs font-medium px-2 py-1 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#F3F4F6] text-xl font-semibold mb-3 leading-tight">
        {project.title}
      </h3>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1 mb-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-[#D1D5DB] text-sm mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Action Icons */}
      <div className="flex justify-end gap-3 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors duration-200 hover:bg-[#D97706]/10 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] group/icon"
          aria-label={`View ${project.title} source on GitHub`}
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <Github 
            size={24} 
            className="text-[#F3F4F6] group-hover/icon:text-[#D97706] transition-colors duration-200" 
          />
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-colors duration-200 hover:bg-[#D97706]/10 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] group/icon"
          aria-label={`Open live demo of ${project.title}`}
          style={{ minHeight: '44px', minWidth: '44px' }}
        >
          <ExternalLink 
            size={24} 
            className="text-[#F3F4F6] group-hover/icon:text-[#D97706] transition-colors duration-200" 
          />
        </a>
      </div>
    </div>
  );
};

const InteractiveProjectGallery = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#F3F4F6] mb-8 text-center">
        Featured Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default InteractiveProjectGallery;
