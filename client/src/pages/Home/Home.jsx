import React from "react";
import { Banner, About, Course, FaqAndEvents } from "../../components/index.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Course />
      <FaqAndEvents />
    </div>
  );
};

export default Home;
