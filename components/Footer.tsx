import { Social_Icons } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC<{}> = () => {
  return (
    <div className=" container mx-auto 2xl pt-[50px] pb-8 ">
      <div className="pb-10 justify-center flex ">
        {Social_Icons.map((social) => {
          return (
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              key={social.alt}
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={40}
                width={40}
                className="mx-5"
                alt={social.alt}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
