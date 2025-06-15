const About = () => (
  <div className="max-w-4xl mx-auto bg-[#272930] rounded-2xl shadow-md px-6 py-8 flex flex-col gap-6">
    <h2 className="text-2xl font-bold mb-2 text-[#B8B8CA]">About me</h2>
    <div className="flex flex-col sm:flex-row gap-8">
      <div className="flex-1 text-[#B8B8CA] text-base leading-relaxed">
        <p>
          I am Sathvik, currently in my final year at VNR VJIET pursuing Computer Science with a specialization in Data Science. I'm deeply interested in exploring new technologies, working with tools, and applying machine learning and data analysis to real-world problems. What drives me is the passion to constantly improve and push boundaries in the data world.
        </p>
        {/* Increase vertical space here */}
        <div className="mt-10">
          <h3 className="font-semibold mb-1 text-[#00BFFF]">Research Work</h3>
          <p className="text-sm text-[#B8B8CA]/80">
            Worked on a research paper titled{' '}
            <span className="italic font-medium">
              “A Modular Time-Aware SMOTE and Autoencoder-XGBoost Framework for Interpretable Credit Card Fraud Detection.”
            </span>{" "}
            Final draft completed and being prepared for publication.
          </p>
        </div>
      </div>
      {/* Education */}
      <div className="flex-1 bg-[#22223b] rounded-xl px-5 py-4 mt-6 sm:mt-0">
        <h3 className="font-semibold mb-3 text-[#00BFFF]">Education</h3>
        <div className="space-y-6">
          <div>
            <div className="font-medium text-[#B8B8CA]">B.Tech – CSE (Data Science)</div>
            <div className="text-sm text-[#B8B8CA]/70">VNR VJIET, 2022 – Present</div>
            <div className="text-sm text-[#00BFFF] font-semibold">GPA: 8.95</div>
          </div>
          <div>
            <div className="font-medium text-[#B8B8CA]">Class 12 – Shine Junior College</div>
            <div className="text-sm text-[#B8B8CA]/70">2022</div>
            <div className="text-sm text-[#00BFFF] font-semibold">97.8%</div>
          </div>
          <div>
            <div className="font-medium text-[#B8B8CA]">Class 10 – Shine High School</div>
            <div className="text-sm text-[#B8B8CA]/70">2020</div>
            <div className="text-sm text-[#00BFFF] font-semibold">10 CGPA</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
