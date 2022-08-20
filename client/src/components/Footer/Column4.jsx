import React from "react";

const Column4 = () => {
  return (
    <div>
      <h4 className="text-base sm:text-lg font-robotoS text-white font-medium relative after:absolute after:top-8 mb-6 after:bg-primary after:left-0 after:w-12 after:h-0.5">
        Opening Hours
      </h4>
      <ul className="flex flex-col gap-2 text-sm text-textBase">
        <li className="border-b border-dashed flex justify-between items-center border-textBase pb-2">
          <span>Mon - Tues</span> <span>6.00 am - 10.00 pm</span>
        </li>
        <li className="border-b border-dashed flex justify-between items-center border-textBase pb-2">
          <span>Mon - Tues</span> <span>6.00 am - 10.00 pm</span>
        </li>
        <li className="border-b border-dashed flex justify-between items-center border-textBase pb-2">
          <span>Mon - Tues</span> <span>6.00 am - 10.00 pm</span>
        </li>
        <li className="border-b border-dashed flex justify-between items-center border-textBase pb-2">
          <span>Mon - Tues</span> <span>6.00 am - 10.00 pm</span>
        </li>
      </ul>
    </div>
  );
};

export default Column4;
