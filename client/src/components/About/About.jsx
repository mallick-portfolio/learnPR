import React from "react";
import about from "../../assets/images/about.png";
import about1 from "../../assets/images/about2.jpg";
import CommonBtn from "../Shared/CommonBtn.jsx";
import Title from "../Shared/Title.jsx";
const About = () => {
  return (
    <div className="container py-12 flex flex-col lg:flex-row gap-6 justify-between items-center">
      <img className="" src={about} alt="" />
      <div className="px-4 sm:px-8 lg:px-0">
        <Title firstTitle={"About"} secondTitle={"Learnpro"} />
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
          voluptatem maiores eaque similique non distinctio voluptates
          perspiciatis omnis, repellendus ipsa aperiam, laudantium voluptatum
          nulla?. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
          assumenda, voluptatum. Libero eligendi molestias iure error animi
          totam laudantium, aspernatur similique id eos at consectetur illo
          culpa, quisquam temporibus esse!
        </p>
        <CommonBtn title={"Read More"} />
      </div>
      <div className="relative after:absolute after:top-0 after:bottom-0 after:right-0  after:left-0 after:bg-aboutuBg w-2/3 lg:w-full">
        <img className="w-full" src={about1} alt="" />
        <div className="absolute w-full z-30 top-1/2 left-1/2 -translate-x-1/2 flex items-center flex-col -translate-y-1/2">
          <h4 className="text-base sm:text-lg md:text-xl font-medium text-white">
            Admisision for Spring
          </h4>
          <h3 className="text-xl md:text-3xl lg:text-4xl font-semibold font-robotoS text-primary">
            40% Off
          </h3>
          <button className="underline pb-2 text-base">Sign up now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
