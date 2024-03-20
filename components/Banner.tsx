"use client";

import React from "react";
import Image from "next/image";
import useRotatingText from "./useRotatingText.js"; // Adjust the import path as necessary

const Banner: React.FC<{}> = () => {
  const rotatingText = useRotatingText(
    [
      "Software Engineer",
      "Web Developer",
      "UI/UX Designer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "System Architect",
      "DevOps Engineer",
      "Cloud Engineer",
      "JavaScript Developer",
      "React Developer",
      "Node.js Developer",
      "Python Developer",
      "Ruby Developer",
      "Java Developer",
      "PHP Developer",
      "C# Developer",
      "Mobile Developer",
      "Android Developer",
      "iOS Developer",
      "App Developer",
      "Web Architect",
      "Interface Designer",
      "Graphic Designer",
      "Visual Designer",
      "Interaction Designer",
      "Frontend Architect",
      "Backend Architect",
      "Software Craftsman",
      "Code Artisan",
      "Web Artisan",
      "Application Developer",
      "Platform Developer",
      "Integration Developer",
      "Software Analyst",
      "System Developer",
      "IT Engineer",
      "Solutions Architect",
      "Technical Lead",
      "Tech Guru",
      "Programming Wizard",
      "Code Wizard",
      "UI Engineer",
      "UX Engineer",
      "Product Designer",
      "Digital Designer",
      "Creative Technologist",
      "Webmaster",
      "Site Developer",
      "E-commerce Developer",
      "Data Engineer",
      "AI Developer",
      "VR Developer",
      "AR Developer",
      "Game Developer",
      "Multimedia Developer",
      "SEO Specialist",
      "Web Analyst",
      "Cybersecurity Specialist",
      "Network Engineer",
      "Database Developer",
      "Software Tester",
      "QA Engineer",
      "Automation Developer",
      "Script Developer",
      "Software Innovator",
      "Tech Innovator",
      "Application Architect",
      "System Integrator",
      "Middleware Developer",
      "Performance Engineer",
      "Release Engineer",
      "Software Strategist",
      "Technology Advisor",
      "Tech Advocate",
      "Product Engineer",
      "Design Thinker",
      "Creative Coder",
      "Tech Artist",
      "Digital Architect",
      "Code Strategist",
      "Tech Visionary",
      "Digital Innovator",
      "User Advocate",
      "Design Lead",
      "Tech Coordinator",
      "Software Mentor",
      "Technology Coach",
      "Agile Developer",
      "Scrum Master",
      "Tech Pioneer",
      "Digital Nomad",
      "Remote Developer",
      "Freelance Developer",
      "Independent Developer",
      "Contract Developer",
    ],
    1000
  );

  return (
    <div className="flex flex-col items-center justify-center px-20 mt-[150px] z-[20]">
      <div className="flex flex-col items-center text-center">
        <div className="flex justify-center items-center">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="Nate Walchenbach"
          />
        </div>

        {/* Ensure the name is centered regardless of other elements */}
        <div className="mt-4 sm:mt-6 cursor-pointer animate-bounce tracking-tighter text-4xl sm:text-6xl md:text-7xl font-semibold text-white max-w-full w-auto h-auto">
          Nate Walchenbach
        </div>

        {/* Adjusted container for rotating text with a fixed height to prevent layout shifts */}
        <div
          className="text-2xl font-medium tracking-tighter text-gray-300 mb-3 sm:mb-5 single-line"
          style={{ height: "64px" }}
        >
          I am a{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400 nowrap">
            {rotatingText}
          </span>
        </div>

        {/* Expanded static paragraph container */}
        {/* <div className="text-base sm:text-md text-gray-200 my-3 sm:my-5 mx-4 sm:mx-0 w-full lg:max-w-4xl xl:max-w-3xl 2xl:max-w-2xl">
          <p>
            As a fervent Software Developer specializing in Web Applications and
            connecting new technologies, I am committed to propelling industries
            forward by leveraging innovative technologies and development
            strategies. My passion lies in harnessing the power of web
            technologies to create transformative solutions that elevate
            industry standards and drive progress. Expanding my focus to include
            emerging technologies and methodologies, I aim to continually
            challenge and refine my skills to stay at the forefront of digital
            innovation, driving meaningful change and delivering value to users
            and stakeholders alike.
          </p>
        </div> */}

        <div className="text-md flex justify-center">
          <button
            onClick={() => window.open("mailto:nate@nwsolutions.io")}
            className="z-[1] padding-20 hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
