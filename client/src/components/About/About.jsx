import React from "react";
import about from "../../assets/images/about.png";
import about1 from "../../assets/images/about2.jpg";
import CommonBtn from "../Shared/CommonBtn.jsx";
import Title from "../Shared/Title.jsx";
const About = () => {
  return (
    <div className="homeAbout-container">
      <img className="" src={about} alt="" />
      <div className="px-4 sm:px-8 lg:px-0">
        <Title firstTitle={"About"} secondTitle={"Learnpro"} />
        <p className="py-4 text-textBase">
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
      <div className="homeAbout-image">
        <img className="w-full" src={about1} alt="" />
        <div className="homeAbout-img-content">
          <h4 className="homeAbout-img-title">Admisision for Spring</h4>
          <h3 className="homeAbout-img-discout">40% Off</h3>
          <button className="underline pb-2 text-base">Sign up now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
