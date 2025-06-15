
const groups = [
  {
    label: "Programming",
    skills: ["Python", "C++", "SQL"],
  },
  {
    label: "Technologies",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Gen AI",
      "LLMs",
      "Data Analysis",
      "Data Visualization",
      "DSA",
    ],
  },
  {
    label: "Libraries/Tools",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Pandas",
      "NumPy",
    ],
  },
  {
    label: "Soft Skills",
    skills: [
      "Teamwork",
      "Problem Solving",
      "Strategic Thinking",
      "Time Management",
    ],
  },
];

const badgeColors = [
  "bg-blue-50 text-blue-700 border-blue-200",
  "bg-teal-50 text-teal-700 border-teal-200",
  "bg-yellow-50 text-yellow-800 border-yellow-200",
  "bg-purple-50 text-purple-700 border-purple-200",
];

const Skills = () => (
  <div className="max-w-4xl mx-auto bg-[#fafdff] rounded-3xl shadow-md px-8 py-8 border border-blue-100/60">
    <h2 className="text-2xl font-extrabold text-[#003049] mb-6">Skills</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map((group, i) => (
        <div key={group.label}>
          <h3 className="font-semibold text-[#003049] mb-3">{group.label}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <span
                key={skill}
                className={`inline-block py-1 px-3 rounded-full border text-sm font-medium shadow-sm transition hover:scale-105 ${badgeColors[i % badgeColors.length]}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
