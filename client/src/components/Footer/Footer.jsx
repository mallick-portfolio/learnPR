import React from "react";
import Column1 from "./Column1.jsx";

const Footer = () => {
  return (
    <div className="bg-footerBg">
      <div className="container py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-8">
        <Column1 />
      </div>
    </div>
  );
};

export default Footer;
