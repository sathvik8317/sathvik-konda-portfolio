
const About = () => (
  <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-md px-6 py-12 flex flex-col gap-10">
    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground leading-tight">About me</h2>
    <div className="flex flex-col sm:flex-row gap-12">
      <div className="flex-1 text-foreground text-base leading-relaxed">
        <p>
          I am Sathvik, currently in my final year at VNR VJIET pursuing Computer Science with a specialization in Data Science. I'm deeply interested in exploring new technologies, working with tools, and applying machine learning and data analysis to real-world problems. What drives me is the passion to constantly improve and push boundaries in the data world.
        </p>
        {/* Increase vertical space here */}
        <div className="mt-10">
          <h3 className="font-semibold mb-2 text-[#00BFFF] text-xl leading-tight">Research Work</h3>
          <p className="text-sm text-muted-foreground">
            Worked on a research paper titled{' '}
            <span className="italic font-medium">
              "A Modular Time-Aware SMOTE and Autoencoder-XGBoost Framework for Interpretable Credit Card Fraud Detection."
            </span>{" "}
            Final draft completed and being prepared for publication.
          </p>
        </div>
      </div>
      {/* Education */}
      <div className="flex-1 bg-muted rounded-xl px-7 py-6 mt-10 sm:mt-0">
        <h3 className="font-semibold mb-4 text-[#00BFFF] text-xl leading-tight">Education</h3>
        <div className="space-y-7">
          <div>
            <div className="font-medium text-foreground">B.Tech – CSE (Data Science)</div>
            <div className="text-sm text-muted-foreground">VNR VJIET, 2022 – Present</div>
            <div className="text-sm text-[#00BFFF] font-semibold">GPA: 8.95</div>
          </div>
          <div>
            <div className="font-medium text-foreground">Class 12 – Shine Junior College</div>
            <div className="text-sm text-muted-foreground">2022</div>
            <div className="text-sm text-[#00BFFF] font-semibold">97.8%</div>
          </div>
          <div>
            <div className="font-medium text-foreground">Class 10 – Shine High School</div>
            <div className="text-sm text-muted-foreground">2020</div>
            <div className="text-sm text-[#00BFFF] font-semibold">10 CGPA</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
