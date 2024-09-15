"use client";
import React, { useEffect, useState } from "react";
import img2 from "../../images/profile-img.webp";
import { people } from "@/Data";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa";
// import { useSelector } from "react-redux";

const Testimonials = () => {
  //   const { portfolioData } = useSelector((store) => store.portfolio);
  //   const { people } = portfolioData;

  const [currentIndex, setIndex] = useState(0);
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex(currentIndex + 1);
    }, 3000);
    return () => clearInterval(slide);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex > people.length - 1) {
      setIndex(0);
    }
    if (currentIndex < 0) {
      setIndex(people.length - 1);
    }
  }, [currentIndex]);

  const nextIndex = () => {
    if (currentIndex < people.length - 1) {
      setIndex(currentIndex + 1);
    } else {
      setIndex(0);
    }
  };
  const prevIndex = () => {
    if (currentIndex !== 0) {
      setIndex(currentIndex - 1);
    } else {
      setIndex(people.length - 1);
    }
  };
  return (
    <div className="flex w-[100vw] min-h-[650px] gap-5 justify-center relative overflow-hidden  ">
      {people.map((person, index) => {
        let position = "nextSlide";
        const { image, name, title, id, quote } = person;
        if (index === currentIndex) {
          position = "activeSlide";
        }
        if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === people.length - 1)
        ) {
          position = "prevSlide";
        }
        return (
          <div
            key={id}
            className={`flex w-[90vw] min-h-[650px] gap-5 flex-col justify-center items-center absolute transition-all duration-500 text-center  ${
              position === "prevSlide" && "translate-x-[-100vw] opacity-0"
            } ${position === "nextSlide" && "translate-x-[100vw] opacity-0"} ${
              position === "activeSlide" && "translate-x-[0vw]"
            }`}
          >
            <div className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] rounded-full ring-2 ring-white">
              <img
                className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] rounded-full object-cover "
                src={image}
                alt=""
              />
            </div>
            <h1 className="text-secondary capitalize text-6xl sm:text-5xl vsm:text-4xl">
              {name}
            </h1>
            <h1 className="text-white text-4xl sm:text-3xl vsm:text-2xl">
              {title}
            </h1>
            <p className="text-third text-xl text-center w-[60vw] sm:w-[80vw] sm:text-l vsm:text-sm tracking-wider">
              {quote}
            </p>
            <div className="text-7xl text-secondary">
              <FaQuoteRight />
            </div>
            <div className="absolute md:static md:gap-5">
              <button
                onClick={() => {
                  nextIndex();
                }}
                className="text-third text-6xl absolute left-80 md:static sm:text-4xl "
              >
                <GrNext />
              </button>
              <button
                onClick={() => {
                  prevIndex();
                }}
                className="text-third text-6xl absolute right-80 md:static md:float-left sm:text-4xl"
              >
                <GrPrevious />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
