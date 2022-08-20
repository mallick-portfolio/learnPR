import React from "react";

const Column2 = () => {
  return (
    <div>
      <h4 className="text-base sm:text-lg font-robotoS text-white font-medium relative after:absolute after:top-8 mb-6 after:bg-primary after:left-0 after:w-12 after:h-0.5">
        Useful Links
      </h4>
      <ul className="flex flex-col gap-2 text-sm text-textBase">
        <li className="border-b border-dashed border-textBase pb-2 cursor-pointer">
          Home Page
        </li>
        <li className="border-b border-dashed border-textBase pb-2 cursor-pointer">
          About Us
        </li>
        <li className="border-b border-dashed border-textBase pb-2 cursor-pointer">
          Terms and Conditions
        </li>
        <li className="border-b border-dashed border-textBase pb-2 cursor-pointer">
          FAQ
        </li>
      </ul>
    </div>
  );
};

export default Column2;
