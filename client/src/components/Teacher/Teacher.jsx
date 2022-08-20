import React from "react";
import Title from "../Shared/Title.jsx";
import mentor1 from "../../assets/images/mentor1.jpg";
import mentor2 from "../../assets/images/mentor2.jpg";
import mentor3 from "../../assets/images/mentor3.jpg";
import mentor4 from "../../assets/images/mentor4.jpg";
const Teacher = () => {
  return (
    <div className="bg-[#F9F9F6] py-12">
      <div className="container">
        <Title firstTitle={"QUALIFIED"} secondTitle="TEACHERS" />
        <h4 className="text-textBase pt-2 pb-6">
          WE HAVE HIGHLY QUALIFIED TEACHERS
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="relative group overflow-hidden">
            <img src={mentor1} alt="" />
            <div className="text-center bg-white px-4 pb-4 absolute top-72 group-hover:top-44 duration-1000 transition-all left-0 right-0">
              <h4 className="text-base sm:text-lg font-medium text-secondary font-robotoS">
                JHON ANDERSON
              </h4>
              <h6 className="text-xs  relative after:absolute after:top-6 mb-4 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-0.5 after:bg-primary font-medium text-secondary font-robotoS">
                Civil Engineer
              </h6>

              <p>
                Lorem ipsum dolor sit ametcon secte adipis elit. Debitis magnam
                placeat dignissimos saperator ellium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
