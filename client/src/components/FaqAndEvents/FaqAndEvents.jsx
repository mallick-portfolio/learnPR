import React from "react";
import Events from "./Events.jsx";
import Faq from "./Faq.jsx";

const FaqAndEvents = () => {
  return (
    <div className="container bg-white py-12 flex flex-col sm:flex-row justify-between gap-8">
      <div className="w-full sm:w-1/2">
        <Events />
      </div>
      <div className="w-full sm:w-1/2">
        <Faq />
      </div>
    </div>
  );
};

export default FaqAndEvents;
