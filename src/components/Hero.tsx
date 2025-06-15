
import React, { useRef, useState } from "react";
import { Camera } from "lucide-react";

const Hero = () => {
  // Store the selected image as a DataURL
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection and update profile image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProfileImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger the file input when the edit button is clicked
  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center gap-10 px-2">
      <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left relative">
        {/* Pattern or overlay behind headline */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[120%] h-40 pointer-events-none select-none"
          style={{
            zIndex: 0,
            background:
              "repeating-linear-gradient(135deg,rgba(0,191,255,0.07) 0 10px,transparent 10px 20px)",
            opacity: 0.7,
            borderRadius: "1.5rem",
            filter: "blur(1.5px)"
          }}
        >
          {/* Semi-transparent pattern */}
        </div>
        <div className="relative z-10 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#B8B8CA]">Hi, I’m </span>
            <span className="text-[#00BFFF]">Sathvik</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#B8B8CA] mb-6 max-w-lg">
            A Data Science enthusiast passionate about ML, Gen AI, and solving problems with code.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-[#00BFFF] text-[#17191A] px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#B8B8CA] hover:text-[#17191A] transition-colors hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFFF]"
              tabIndex={0}
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="border border-[#00BFFF] text-[#00BFFF] px-6 py-2 rounded-lg font-semibold hover:bg-[#17191A] hover:text-[#00BFFF] transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00BFFF]"
              tabIndex={0}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center sm:justify-end">
        <div className="relative group">
          <div className="absolute w-44 h-44 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
          <div className="relative z-10 overflow-hidden rounded-full w-40 h-40 shadow-lg border-4 border-white bg-slate-200 flex items-center justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="User-selected profile"
                className="w-full h-full object-cover"
                aria-label="Profile picture"
              />
            ) : (
              <span
                className="text-slate-400 text-7xl"
                role="img"
                aria-label="Default profile avatar"
              >🧑‍💼</span>
            )}
            {/* Edit Icon Overlay */}
            <button
              onClick={handleEditClick}
              className="absolute bottom-3 right-3 bg-[#17191A]/80 hover:bg-[#17191A] text-[#00BFFF] p-2 rounded-full shadow flex items-center justify-center transition-colors border border-[#272930] group-hover:scale-105 focus:outline-none"
              aria-label="Edit profile picture"
              type="button"
            >
              <Camera size={22} aria-label="Camera icon" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              aria-label="Choose profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
