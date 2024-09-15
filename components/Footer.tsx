import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiFreelancer } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col items-center opacity-65">
      <div className="h-[1px] w-[100vw] bg-white"></div>
      <div className="my-5 flex flex-col items-center justify-center text-white gap-3">
        <h1>Developed by</h1>
        <h1>Yash Garg</h1>
        <div className="flex text-2xl gap-4">
          <Link href="">
            <BsLinkedin />
          </Link>
          <Link href="">
            <BsGithub />
          </Link>
          <Link href="">
            <BsInstagram />
          </Link>
          <Link href="">
            <SiFreelancer />{" "}
          </Link>
          <Link href="">
            <BsTwitterX />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
