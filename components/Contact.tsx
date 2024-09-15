import React from "react";
import SectionTitle from "./SectionTitle";
// import SectionTitle from "../../Components/SectionTitle";
// // import img from "../../images/"
// import img5 from "../../images/contactme-removebg-preview.png";
// import { useSelector } from "react-redux";
const contact: any = {
  name: "yash garg",
  email: "yash619agrawal@gmail.com",
  address: "Agra , Uttar pradesh",
};

const Contact = () => {
  //   const { portfolioData } = useSelector((store) => store.portfolio);
  //   const { contact } = portfolioData;
  return (
    <div className="w-[100vw] bg-primary flex flex-col py-20">
      <SectionTitle title={"Contact me"} />
      <div className="flex flex-row w-full flex-wrap">
        <div className="text-third flex flex-col px-20 gap-6 w-1/2 md:w-full md:text-center justify-center md:px-5 md:gap-3">
          <h1>{"{ "}</h1>
          {Object.keys(contact).map((key) => {
            if (key !== "_id") {
              return (
                <h1 key={key} className="text-third px-10 smd:px-0">
                  <span>{`${key} : `}</span> <span>{contact[key]}</span>
                </h1>
              );
            }
          })}
          <h1>{" }"}</h1>
        </div>
        <div className="flex justify-center items-center w-1/2 md:w-full ">
          <div className="w-[450px] h-[300px]">
            <iframe
              className="w-full h-full"
              src="https://lottie.host/embed/ac835731-720d-406b-97bd-eb9b8895537f/PfzKibOE8i.json"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
