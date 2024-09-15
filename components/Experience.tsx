"use client";
import React, { useState } from "react";
import { experience } from "@/Data";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const changeIndex = (index: number): void => {
    setSelectIndex(index);
  };
  return (
    <div className="flex flex-col bg-primary w-full py-15 ">
      <SectionTitle title="Experience" />
      <div className="flex px-20 py-15 gap-8 mt-5 items-center justify-between smd:flex-col md:px-10 ">
        <div className="flex flex-col w-[40%] smd:flex-row smd:w-[90vw] smd:overflow-x-auto ">
          {experience.map((exp, index) => {
            const { title, id } = exp;
            return (
              <button
                key={index}
                onClick={() => changeIndex(index)}
                className={`text-white border-1 flex justify-start text-start border-l-2 border-third px-4 py-3 smd:text-center smd:min-w-[250px] sm:min-w-[90vw] sm:text-center sm:justify-center sm:items-center smd:text-l  ${
                  index === selectIndex && "border-l-4 bg-[#78f0d876]"
                }`}
              >
                {title.toUpperCase()}
              </button>
            );
          })}
        </div>
        <div className="flex w-[50%] px-5 md:w-full smd:flex-col smd:items-center sm:px-0">
          <div className="w-full smd:w-[90vw] flex justify-center items-center flex-col gap-3 text-center ">
            <h2 className="text-xl sm:text-lg text-secondary font-semibold">
              {experience[selectIndex].company.toUpperCase()}
            </h2>
            <h3 className="text-xl sm:text-lg text-third font-semibold">
              {experience[selectIndex].startDate} -{" "}
              {experience[selectIndex].endDate}
            </h3>
            <p className="text-l text-white">
              {experience[selectIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
