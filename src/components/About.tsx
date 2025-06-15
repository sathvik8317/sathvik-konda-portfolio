
const About = () => (
  <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl px-6 py-8 flex flex-col gap-6 border border-[#32324d]">
    <h2 className="text-2xl font-bold text-[#22223b] mb-2">About me</h2>
    <div className="flex flex-col sm:flex-row gap-8">
      <div className="flex-1 text-[#22223b] text-base leading-relaxed">
        <p>
          I am Sathvik, currently in my final year at VNR VJIET pursuing Computer Science with a specialization in Data Science. I'm deeply interested in exploring new technologies, working with tools, and applying machine learning and data analysis to real-world problems. What drives me is the passion to constantly improve and push boundaries in the data world.
        </p>
        {/* Research Work */}
        <div className="mt-6">
          <h3 className="font-semibold text-[#4ea8de] mb-1">Research Work</h3>
          <p className="text-sm text-slate-600">
            Worked on a research paper titled <span className="italic font-medium">“A Modular Time-Aware SMOTE and Autoencoder-XGBoost Framework for Interpretable Credit Card Fraud Detection.”</span> Final draft completed and being prepared for publication.
          </p>
        </div>
      </div>
      {/* Education */}
      <div className="flex-1 bg-[#f5f6fa] rounded-xl px-5 py-4 shadow border border-[#e0e1ec]">
        <h3 className="font-semibold text-[#4ea8de] mb-3">Education</h3>
        <div className="space-y-2">
          <div>
            <div className="font-medium">B.Tech – CSE (Data Science)</div>
            <div className="text-sm text-slate-600">VNR VJIET, 2022 – Present</div>
            <div className="text-sm text-blue-600 font-semibold">GPA: 8.95</div>
          </div>
          <div>
            <div className="font-medium">Class 12 – Shine Junior College</div>
            <div className="text-sm text-slate-600">2022</div>
            <div className="text-sm text-blue-600 font-semibold">97.8%</div>
          </div>
          <div>
            <div className="font-medium">Class 10 – Shine High School</div>
            <div className="text-sm text-slate-600">2020</div>
            <div className="text-sm text-blue-600 font-semibold">10 CGPA</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
