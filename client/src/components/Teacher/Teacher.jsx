import React from "react";
import Title from "../Shared/Title.jsx";
import mentor1 from "../../assets/images/mentor1.jpg";
import mentor2 from "../../assets/images/mentor2.jpg";
import mentor3 from "../../assets/images/mentor3.jpg";
import mentor4 from "../../assets/images/mentor4.jpg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
const Teacher = () => {
  return (
    <div className="bg-[#F9F9F6] py-12">
      <div className="container">
        <Title firstTitle={"QUALIFIED"} secondTitle="TEACHERS" />
        <h4 className="text-textBase pt-2 pb-6">
          WE HAVE HIGHLY QUALIFIED TEACHERS
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="relative group overflow-hidden flex flex-col items-center"
            >
              <img className="rounded-md" src={teacher.image} alt="" />
              <div className="text-center bg-white px-4 pt-2 pb-4 absolute top-80 sm::top-56 lg:top-72 group-hover:top-64 sm:group-hover:top-24 lg:group-hover:top-44 duration-500 transition-all md:left-0 md:right-0 left-14 right-14">
                <h4 className="text-base sm:text-lg font-medium text-secondary font-robotoS">
                  {teacher.name}
                </h4>
                <h6 className="text-xs  relative after:absolute after:top-6 mb-4 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-primary font-medium text-secondary font-robotoS">
                  {teacher.position}
                </h6>
                <p className="text-xs sm:text-sm md:text-base">{teacher.des}</p>
              </div>
              <div className="absolute -top-96 group-hover:top-0 duration-500 transition-all -mr-1 sm:mr-0 right-16 sm:right-0">
                <ul className="flex p-2 text-sm flex-col gap-4 bg-primary text-white">
                  <li className="cursor-pointer">
                    <FaFacebookF />
                  </li>
                  <li className="cursor-pointer">
                    <FaTwitter />
                  </li>
                  <li className="cursor-pointer">
                    <FiInstagram />
                  </li>
                  <li className="cursor-pointer">
                    <FaLinkedinIn />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teachers = [
  {
    id: 1,
    name: "JHON ANDERSON",
    image: mentor1,
    position: "Civil Engineer",
    des: "Lorem ipsum dolor sit ametcon secte adipis elit. Debitis magnam placeat dignissimos saperator ellium",
  },
  {
    id: 2,
    name: "JHON ANDERSON",
    image: mentor2,
    position: "Civil Engineer",
    des: "Lorem ipsum dolor sit ametcon secte adipis elit. Debitis magnam placeat dignissimos saperator ellium",
  },
  {
    id: 3,
    name: "JHON ANDERSON",
    image: mentor3,
    position: "Civil Engineer",
    des: "Lorem ipsum dolor sit ametcon secte adipis elit. Debitis magnam placeat dignissimos saperator ellium",
  },
  {
    id: 4,
    name: "JHON ANDERSON",
    image: mentor4,
    position: "Civil Engineer",
    des: "Lorem ipsum dolor sit ametcon secte adipis elit. Debitis magnam placeat dignissimos saperator ellium",
  },
];
export default Teacher;
