import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAstro,
  SiCplusplus,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTypescript,
} from "react-icons/si";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>

      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">NWSolutions /</span> Founder
          </p>
          <p className="text-gray-300">MAY 2021 - PRESENT</p>
        </div>
        <p className="text-gray-300 pt-5">
          Empowering organizations with innovative tech solutions, specializing
          in web and mobile app development. Focused on creating user-centric
          designs and enhancing client engagement through state-of-the-art
          technologies.
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <FaReact /> React.js
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <SiNextdotjs /> Next.js
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <SiJavascript /> JavaScript
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <SiTypescript /> TypeScript
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <FaNodeJs /> Node.js
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <SiCplusplus /> C++
          </span>
          <span className="flex items-center gap-2 bg-transparent cursor-pointer rounded-xl text-white py-1 px-3 border border-gray-700">
            <SiPython /> Python
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
