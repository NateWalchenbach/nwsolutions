import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">NWSolutions /</span> Founder
          </p>
          <p className="text-gray-300">MAY 2021 - PRESENT</p>
        </div>
        <p className="text-gray-300 pt-5">
          My mission is to empower organizations worldwide with innovative tech
          solutions. As a seasoned software developer with over 3.5 years of
          experience, I specialize in crafting dynamic and responsive web and
          mobile applications and technologies, tailoring each project to meet
          the unique needs of our clients. My dedication to excellence and
          innovation is the cornerstone of success, making technology accessible
          where it's most needed.
          <br />
          <br />
          My experience with Web Development has allowed me to develop
          cross-platform mobile applications that run seamlessly on iOS, Android
          and Windows. Additionally, my proficiency in React.js has equipped me
          with the skills to create fast, scalable, and dynamic web pages with
          excellent user experiences. I have a deep understanding of
          component-based architecture and state management, and I am
          well-versed in the latest web development trends and technologies.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Next.JS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React.JS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Node
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Astro
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
