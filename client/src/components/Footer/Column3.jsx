import React from "react";

const Column3 = () => {
  return (
    <div>
      <h4 className="text-base sm:text-lg font-robotoS text-white font-medium relative after:absolute after:top-8 mb-6 after:bg-primary after:left-0 after:w-12 after:h-0.5">
        Top News
      </h4>
      <ul className="flex flex-col gap-2 text-sm text-white">
        <li className="pb-2 cursor-pointer">
          PHP Learning <br />{" "}
          <span className="text-textBase">Mar 08, 2015</span>
        </li>
        <li className="pb-2 cursor-pointer">
          Web Development <br />{" "}
          <span className="text-textBase">Mar 08, 2015</span>
        </li>
        <li className="pb-2 cursor-pointer">
          Spoken English <br />{" "}
          <span className="text-textBase">Mar 08, 2015</span>
        </li>
      </ul>
    </div>
  );
};

export default Column3;
