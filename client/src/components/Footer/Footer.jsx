import React from "react";
import Column1 from "./Column1.jsx";
import Column2 from "./Column2.jsx";
import Column3 from "./Column3.jsx";
import Column4 from "./Column4.jsx";

const Footer = () => {
  return (
    <div className="bg-footerBg">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8">
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
      </div>
    </div>
  );
};

export default Footer;
