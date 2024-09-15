"use client";
import React, { useState, useEffect } from "react";
import { Project } from "@/Data";
// import { CgScrollH } from "react-icons/cg";
// import { useSelector } from "react-redux";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  //   const { portfolioData } = useSelector((store) => store.portfolio);
  //   const { project } = portfolioData;
  // const { title, image, link, description } = project;
  const [selectIndex, setSelectIndex] = useState(0);
  const changeIndex = (index: number): void => {
    setSelectIndex(index);
  };
  return (
    <div className="flex flex-col bg-primary w-full py-20 ">
      <SectionTitle title="Projects" />
      <div className="flex px-20 py-15 gap-5 items-center md:flex-col md:px-10 ">
        <div className="flex flex-col w-1/3 md:flex-row md:w-[90vw] md:overflow-x-auto ">
          {Project.map((proj, index) => {
            const { title, id } = proj;
            return (
              <button
                key={index}
                onClick={() => changeIndex(index)}
                className={`text-white border-1 flex justify-start text-start border-l-2 border-third px-4 py-3 md:text-center md:min-w-[250px] sm:min-w-[90vw] sm:text-center sm:justify-center md:text-xl ${
                  index === selectIndex && "border-l-4 bg-[#78f0d876]"
                }`}
              >
                {title}
              </button>
            );
          })}
        </div>
        <div className="flex w-2/3 md:w-full smd:flex-col smd:items-center sm:px-0">
          <div className=" w-1/3 flex items-center smd:w-[80vw] smd:justify-center">
            <Image
              className="max-w-[300px] max-h-[300px] overflow-hidden"
              src={Project[selectIndex].image}
              alt=""
            />
          </div>
          <div className="w-2/3 smd:w-[90vw] flex justify-center items-center flex-col gap-3 text-center ">
            <h1 className="text-3xl sm:text-2xl text-secondary font-semibold">
              {Project[selectIndex].title}
            </h1>
            <p className="text-l text-white">
              {Project[selectIndex].description}
            </p>
            <a
              className="border-[2px] border-third text-third py-3 px-5 rounded-md cursor-pointer"
              href={Project[selectIndex].link}
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
