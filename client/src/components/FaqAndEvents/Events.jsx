import React from "react";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
const Events = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-4 relative after:absolute after:-bottom-1 after:left-0 after:w-12 after:h-0.5 after:bg-primary mb-4 sm:mb-5 md:mb-6">
        <RiCalendar2Line className="text-2xl text-textBase" />
        <h3 className="text-xl font-medium font-robotoS">
          UPCOMING <span className="text-primary">EVENTS</span>
        </h3>
      </div>

      {events.map((event) => (
        <div
          key={event.id}
          className="bg-[#f0efe9] p-4 pl-10 my-4 ml-12 relative"
        >
          <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold font-robotoS text-secondary">
            {event.title}
          </h4>
          <div className="flex items-center text-textBase text-sm gap-4 my-2">
            <div className="flex gap-2 items-center">
              <AiOutlineClockCircle className="text-primary font-semibold" />
              <span>{event.time}</span>
            </div>
            <div className="flex gap-2 items-center">
              <GoLocation className="text-primary font-semibold" />
              <span>{event.location}</span>
            </div>
          </div>
          <p>
            {event.des}
          </p>
          <div className="absolute top-1/2 -translate-y-1/2 -left-8 bg-primary px-4 py-2">
            <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white text-center">
              28 <br />
              FEB
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

const events = [
  {
    id: 1,
    title: "Admission Fair Spring 2017",
    time: "at 5.00 pm - 7.30 pm",
    location: "Newyork City",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commod",
    date: 28,
    month: "FEB",
  },
  {
    id: 2,
    title: "Admission Fair Spring 2017",
    time: "at 5.00 pm - 7.30 pm",
    location: "Newyork City",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commod",
    date: 28,
    month: "FEB",
  },
  {
    id: 3,
    title: "Admission Fair Spring 2017",
    time: "at 5.00 pm - 7.30 pm",
    location: "Newyork City",
    des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commod",
    date: 28,
    month: "FEB",
  },
];
export default Events;
