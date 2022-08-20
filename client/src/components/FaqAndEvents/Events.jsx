import React from "react";
import { RiCalendar2Line } from "react-icons/ri";
const Events = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-4 relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
        <RiCalendar2Line className="text-2xl text-textBase" />
        <h3 className="text-xl font-medium font-robotoS">
          UPCOMING <span className="text-primary">EVENTS</span>
        </h3>
      </div>
    </div>
  );
};

export default Events;
