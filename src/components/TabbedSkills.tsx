
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Library, Wrench } from "lucide-react";
import SectionHeader from "./SectionHeader";

const skillsData = {
  languages: {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C#", "SQL", "TypeScript"]
  },
  frameworks: {
    icon: Library,
    title: "Frameworks & Libraries",
    items: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "FastAPI", "React", "XGBoost", "SHAP", "Cohere", "LanceDB", ".NET / ASP.NET Core", "Angular", "EF Core", "PyTorch", "LangChain", "Streamlit"]
  },
  tools: {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Git", "Power BI"]
  }
};

const TabbedSkills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className="max-w-shell mx-auto px-4">
      <SectionHeader index="02" title="Skills" />
      <div className="bg-card border border-border rounded-md px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 items-stretch gap-1 bg-secondary p-1 h-auto">
            {Object.entries(skillsData).map(([key, section]) => {
              const IconComponent = section.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="label-mono min-w-0 flex flex-col items-center justify-center gap-1 px-1 py-3 rounded-sm text-center leading-tight tracking-normal whitespace-normal transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  style={{ minHeight: '44px' }}
                >
                  <IconComponent size={16} />
                  <span className="break-words">{section.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(skillsData).map(([key, section]) => (
            <TabsContent
              key={key}
              value={key}
              className="mt-6 p-6 bg-background rounded-md border border-border animate-fade-in"
              role="tabpanel"
              aria-labelledby={`tab-${key}`}
            >
              <div className="space-y-4">
                <h3 className="label-mono flex items-center gap-2 text-foreground">
                  <section.icon size={16} className="text-primary" />
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {section.items.map((item, index) => (
                    <span
                      key={index}
                      className="label-mono inline-flex items-center rounded-full border border-border px-3 py-1.5 text-foreground transition-colors duration-150 hover:border-primary hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabbedSkills;
