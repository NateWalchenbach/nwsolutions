"use client";

import React from "react";
import Image from "next/image";
import useRotatingText from "./useRotatingText.js"; // Adjust the import path as necessary

const Banner: React.FC<{}> = () => {
  const rotatingText = useRotatingText(
    ["Marketing", "Code Things", "Design Work", "Photography"],
    3000
  );

  return (
    <div className="flex flex-row items-center justify-center px-20 mt-[150px] z-[20]">
      <div className="flex flex-col justify-center text-center">
        <div className="justify-center flex ">
          <Image
            priority
            src="/Me.png"
            height={300}
            width={300}
            alt="Nate Walchenbach"
          />
        </div>

        <div className="flex flex-col gap-6 mt-6 cursor-pointer animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
          Nate Walchenbach
        </div>
        <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
          I do{" "}
          <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400">
            {rotatingText}
          </span>
        </p>
        <p className="text-md text-gray-200 my-5 max-w-[600px]">
          As a fervent Software Engineer specializing in Web Applications, I am
          committed to propelling industries forward by leveraging innovative
          technologies and development strategies. My passion lies in harnessing
          the power of web technologies to create transformative solutions that
          elevate industry standards and drive progress.
        </p>
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
