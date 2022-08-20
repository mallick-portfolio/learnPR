import React from "react";
import {
  Banner,
  About,
  Course,
  FaqAndEvents,
  Teacher,
} from "../../components/index.js";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Course />
      <FaqAndEvents />
      <Teacher />
    </div>
  );
};

export default Home;
