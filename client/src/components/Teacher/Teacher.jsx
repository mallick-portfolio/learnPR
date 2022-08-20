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
        <h4 className="section-subTitle">WE HAVE HIGHLY QUALIFIED TEACHERS</h4>
        <div className="teacher-grid">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="single-teacher group">
              <img className="rounded-md" src={teacher.image} alt="" />
              <div className="teacher-content group-hover:top-64 sm:group-hover:top-24 lg:group-hover:top-44">
                <h4 className="teacher-name">{teacher.name}</h4>
                <h6 className="teacher-postion">{teacher.position}</h6>
                <p className="teacher-des">{teacher.des}</p>
              </div>
              <div className="teacher-social">
                <ul className="teacher-ul">
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
