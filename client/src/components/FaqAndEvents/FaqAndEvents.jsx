import React from "react";
import Events from "./Events.jsx";
import Faq from "./Faq.jsx";

const FaqAndEvents = () => {
  return (
    <div className="container bg-white py-12 flex justify-between items-center gap-8">
      <Events />
      <Faq />
    </div>
  );
};

export default FaqAndEvents;
