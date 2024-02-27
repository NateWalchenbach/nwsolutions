import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.redtailsteelbuildings.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.jpg"
                height={125}
                width={150}
                alt="RedTail Project"
                className="rounded-md"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Redtail Steel Buildings
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed a modern UI website comprising more than 50 screens,
                  along with the sales integration using next.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://barnpros.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/SecondProject.jpg"
                height={150}
                width={150}
                alt="HireSide"
                className="rounded-md"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Barn Pros</p>
                <p className="text-gray-500 text-[10px]">
                  Developed a static website using Astro that allows users to
                  see a company's products and reach out to them.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://www.dreamcardetail.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="DreamCarDetail"
                className="rounded-md"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                  Dream Car Detail LLC
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Dream Car Detail Website using React
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://plankton-app-7zgcm.ondigitalocean.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourthProject.png"
                height={150}
                width={150}
                alt="Payoasis"
                className="rounded-md"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">
                  HCI Steel Buildings LLC
                </p>
                <p className="text-gray-500 text-[10px]">
                  Designed the modern UI for a 3D quoting software.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
