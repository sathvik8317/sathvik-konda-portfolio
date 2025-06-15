
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
  "bg-[#22223b] text-[#00BFFF] border-[#00BFFF]/40",
  "bg-[#272930] text-[#00BFFF] border-[#00BFFF]/30",
  "bg-[#17191A] text-[#00BFFF] border-[#00BFFF]/20",
  "bg-[#22223b] text-[#00BFFF] border-[#00BFFF]/30",
];
// changed color for badge backgrounds and borders, all text accent

const Skills = () => (
  <div className="max-w-4xl mx-auto bg-[#272930] rounded-2xl shadow-md px-6 py-8">
    <h2 className="text-2xl font-bold mb-6 text-[#B8B8CA]">Skills</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {groups.map((group, i) => (
        <div key={group.label}>
          <h3 className="font-semibold mb-3 text-[#00BFFF]">{group.label}</h3>
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
