import React from "react";
const skills = [
  "JavaScript",
  "React",
  "Node",
  "Express",
  "Mongodb",
  "Tailwind",
  "Sass",
  "Python",
  "Numpy",
  "Pandas",
  "Redux",
];

const Skills = () => {
  return (
    <div className="flex flex-col min-h-[20vh] bg-primary text-center px-10 py-5">
      <h1 className="text-third">
        here are a few technologies I've been working with recently :{" "}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center my-6">
        {skills.map((skill, index) => {
          return (
            <button
              key={index}
              className="text-third border-[2px] w-40 border-third rounded-md px-4 py-2"
            >
              {skill}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
