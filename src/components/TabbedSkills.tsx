
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Library, Wrench, Award, Users } from "lucide-react";

const skillsData = {
  languages: {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C++", "SQL", "R"]
  },
  frameworks: {
    icon: Library,
    title: "Frameworks & Libraries",
    items: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"]
  },
  tools: {
    icon: Wrench,
    title: "Tools & Platforms",
    items: ["Power BI", "MySQL Workbench", "Google Colab", "VS Code", "Excel"]
  },
  certifications: {
    icon: Award,
    title: "Certifications",
    items: ["NPTEL", "Coursera", "Udemy", "Hackerrank ratings"]
  },
  softSkills: {
    icon: Users,
    title: "Soft Skills",
    items: ["Teamwork", "Problem Solving", "Time Management", "Strategic Thinking"]
  }
};

const TabbedSkills = () => {
  const [activeTab, setActiveTab] = useState("languages");

  return (
    <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md px-6 py-8">
      <h2 className="text-2xl font-bold mb-6 text-foreground text-center">Skills & Expertise</h2>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 gap-1 bg-muted p-1 h-auto">
          {Object.entries(skillsData).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <TabsTrigger
                key={key}
                value={key}
                className="flex flex-col items-center gap-1 px-3 py-3 text-xs font-medium rounded-md transition-all duration-200 data-[state=active]:bg-[#3B82F6] data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=inactive]:bg-[#374151] data-[state=inactive]:text-[#F3F4F6] hover:bg-[#3B82F6]/80 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2"
                style={{ minHeight: '44px' }}
              >
                <IconComponent size={16} />
                <span className="hidden sm:block">{section.title}</span>
                <span className="sm:hidden">{section.title.split(' ')[0]}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {Object.entries(skillsData).map(([key, section]) => (
          <TabsContent
            key={key}
            value={key}
            className="mt-6 p-6 bg-muted/50 rounded-lg border animate-fade-in"
            role="tabpanel"
            aria-labelledby={`tab-${key}`}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <section.icon size={20} className="text-[#3B82F6]" />
                {section.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-background rounded-lg border border-border transition-all duration-150 hover:scale-105 hover:shadow-md"
                  >
                    <div className="w-2 h-2 bg-[#D97706] rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-mono text-sm leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabbedSkills;
