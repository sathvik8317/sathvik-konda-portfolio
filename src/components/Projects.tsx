
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

const Projects = () => (
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-slate-900 mb-6">Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, idx) => (
        <div
          key={proj.title}
          className="rounded-2xl bg-white shadow-sm p-6 border border-slate-100 hover:shadow-blue-100 transition-shadow flex flex-col animate-fade-in"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          <h3 className="font-semibold text-lg text-blue-700 mb-2">{proj.title}</h3>
          <p className="text-sm text-slate-700 mb-3">{proj.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {proj.tech.map(t => (
              <span
                key={t}
                className="bg-blue-50 text-blue-700 rounded px-2 py-0.5 text-xs font-medium border border-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-auto flex gap-2">
            {proj.code && (
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm text-blue-600 hover:text-blue-800 transition"
              >
                View Code
              </a>
            )}
            {proj.demo && (
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sm text-blue-600 hover:text-blue-800 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
