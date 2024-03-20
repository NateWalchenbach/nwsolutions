import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px]"
    >
      <div className="flex flex-col justify-around flex-wrap items-center px-4 sm:px-0 max-w-[900px] mx-auto">
        <h1 className="text-white font-semibold text-center text-4xl sm:text-5xl md:text-6xl">
          About
        </h1>
        <p className="tracking-[0.3em] sm:tracking-[0.5em] text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-lg sm:text-xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg pt-5">
          As a passionate software engineer, I thrive on the intricate dance
          between logic and creativity. Currently immersed in the dynamic world
          of Construction, my expertise centers around React / Next Web
          Applications, where I seamlessly blend technology with the industry.
          <br />
          <br />
          With a fervor for crafting elegant solutions, I navigate the
          ever-evolving landscape of software development. My journey involves
          translating concepts into code, creating seamless user experiences,
          and constantly pushing the boundaries of what's possible.
        </p>
      </div>
    </section>
  );
};

export default About;
