import React from "react";

const SectionTitle = ({ title }: any) => {
  return (
    <div className="bg-primary w-full min-h-[10vh] flex items-center py-0 px-10 vsm:text-center vsm:justify-center">
      <h1 className="text-white text-3xl mx-3">{title}</h1>
      <div className="w-40 h-[1px] vsm:w-20 bg-[#78f0d876] vsm:hidden"></div>
    </div>
  );
};

export default SectionTitle;
