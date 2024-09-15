import React from "react";
import Header from "./Header";

const HeroSection = () => {
  return (
    <div className="w-[100vw] min-h-[100vh] overflow-y-visible relative left-0 top-0 flex flex-col items-start justify-center sm:items-center sm:text-center bg-primary">
      <Header />
      <div className="w-full mt-[10vh] flex flex-col items-start px-16 sm:items-center vsm:px-2 ">
        <h1 className="text-white text-1xl smd:text-lg">Hii, i'm</h1>
        {/* <h1 className="text-white text-1xl">{welcomeText || ""}</h1> */}
        <h1 className="text-6xl sm:text-5xl font-semibold text-secondary my-2 tracking-wider vsm:text-4xl">
          {/* {firstName || ""} {lastName || ""} */}YASH GARG
        </h1>
        <h1 className="text-4xl sm:text-3xl vsm:text-2xl text-white">
          {/* {caption || ""} */}I build things for web
        </h1>
        <p className="text-third text-start w-[60vw] sm:w-[80vw] my-4 tracking-wider sm:text-center">
          {/* {description || ""} */}a passionate and dedicated full-stack
          developer with a knack for turning ideas into powerful digital
          solutions.With a foundation in both frontend and backend technologies,
          I thrive on crafting seamless and user centric experiences that
          elevate businesses and delight users.
        </p>
        <button className="border-[2px] border-third text-third py-3 px-5 rounded-md my-5 cursor-pointer">
          {" "}
          Download CV
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
