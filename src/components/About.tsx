
import SectionHeader from "./SectionHeader";

const whoami = [
  { key: "name", value: "Sathvik Konda" },
  { key: "role", value: "Associate Developer @ ISSQUARED Inc." },
  { key: "education", value: "B.Tech CSE (Data Science), VNR VJIET '26" },
  { key: "focus", value: "Machine Learning · Retrieval Systems" },
  { key: "status", value: "Employed" },
];

const About = () => (
  <div className="max-w-shell mx-auto px-4">
    <SectionHeader index="01" title="About" />
    <div className="bg-card border border-border rounded-md p-6 sm:p-8 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Terminal panel + bio */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-border rounded-md bg-background overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-signal2/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            </div>
            <div className="px-4 py-4 font-mono text-sm space-y-2">
              <div>
                <span className="text-signal2">sathvik@portfolio</span>
                <span className="text-muted-foreground">:~$ </span>
                <span className="text-foreground">whoami</span>
                <span className="text-primary animate-caret-blink">_</span>
              </div>
              <div className="pl-0 space-y-1 pt-1">
                {whoami.map(({ key, value }) => (
                  <div key={key} className="flex gap-2">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="text-muted-foreground">=</span>
                    <span className="text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-foreground text-base leading-relaxed">
            I'm Sathvik, an Associate Developer at ISSQUARED Inc. I graduated from VNR VJIET in 2026 with a B.Tech in Computer Science, specializing in Data Science. I'm deeply interested in exploring new technologies and applying machine learning, retrieval systems, and data analysis to real-world problems. What drives me is the passion to constantly improve and push boundaries in the data world.
          </p>
        </div>

        {/* Education + Publication */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="border border-border rounded-md px-6 py-6">
            <h3 className="label-mono mb-4">Education</h3>
            <div className="space-y-6">
              <div>
                <div className="font-medium text-foreground">B.Tech – CSE (Data Science)</div>
                <div className="text-sm text-muted-foreground">VNR VJIET, 2022 – 2026</div>
                <div className="text-sm text-signal2 font-semibold">CGPA: 8.65</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Class 12 – Shine Junior College</div>
                <div className="text-sm text-muted-foreground">2022</div>
                <div className="text-sm text-signal2 font-semibold">97.8%</div>
              </div>
              <div>
                <div className="font-medium text-foreground">Class 10 – Shine High School</div>
                <div className="text-sm text-muted-foreground">2020</div>
                <div className="text-sm text-signal2 font-semibold">10 CGPA</div>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-md px-6 py-6">
            <h3 className="label-mono mb-4">Publication</h3>
            <p className="text-sm text-foreground italic leading-relaxed mb-3">
              "A Modular Time-Aware SMOTE and Autoencoder-XGBoost Framework for Interpretable Credit Card Fraud Detection"
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-1">
              Goru, R., <span className="text-primary not-italic font-medium">Konda, S.</span>, Bonthu, S.S.P., Penmetsa, S.S.S.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Proceedings of the Sixth International Conference on Advances in Computer Engineering and Communication Systems (ICACECS 2025), Smart Innovation, Systems and Technologies, vol. 489, Springer, pp. 194–203.
            </p>
            <a
              href="https://doi.org/10.1007/978-3-032-22118-6_18"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono inline-flex items-center gap-1 text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              ↗ DOI
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
