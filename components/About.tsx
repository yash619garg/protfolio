import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-start pb-6 bg-primary">
      <SectionTitle title="About" />
      <div className="w-full flex justify-center items-center md:flex-col px-16 sm:items-center vsm:px-2 ">
        <div className="w-1/2 flex justify-center items-center md:w-full ">
          <iframe
            className="w-[500px] h-[400px] md:mx-auto sm:w-[400px] sm:h-[320px]"
            src="https://lottie.host/embed/51e0d5fe-20eb-4fa2-bd3e-f6b617765a34/xF32dpPcqv.json"
          ></iframe>{" "}
        </div>
        <div className="flex  w-1/2 flex-col justify-center px-10 sm:px-5 md:w-full md:min-h-0">
          <p className="text-white py-6 vsm:text-sm ">
            {/* {description1 || ""} */}Greetings! I'm Yash Garg, a MERN stack
            web developer with a passion for building dynamic and immersive web
            applications.With expertise MongoDB, Express.js, React.js, and
            Node.js, I specialize in crafting robust, scalable, and feature-
            rich solutions that push the boundaries of web development
          </p>
          <p className="text-white py-6 vsm:text-sm vsm:py-3">
            {/* {description2 || ""} */}
            As a MERN stack enthusiast, I thrive on the synergy between front-
            end and back - end technologies, harnessing the power of React.js
            for seamless user interfaces and leveraging the flexibility of
            Node.js for efficient server - side operations.My proficiency in
            MongoDB allows me to design and implement databases that are
            tailored to the unique needs of each project, while Express.js
            provides a solid foundation for building RESTful APIs and handling
            server - side logics
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
