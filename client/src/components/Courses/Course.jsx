import React from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../Shared/Title.jsx";
import course1 from "../../assets/images/course1.jpg";
import course2 from "../../assets/images/course2.jpg";
import course3 from "../../assets/images/course3.jpg";
import course4 from "../../assets/images/course4.jpg";
import teacher1 from "../../assets/images/teacher1.jpg";
import teacher2 from "../../assets/images/teacher2.jpg";
import teacher3 from "../../assets/images/teacher3.jpg";
import CourseCard from "./CourseCard.jsx";

const Course = () => {
  return (
    <div className="bg-[#F9F9F6]">
      <div className="course-container">
        <Title firstTitle={"POPULAR"} secondTitle={"COURSES"} />
        <h4 className="section-subTitle">CHOOSE YOUR DESIRED COURSE</h4>
        <div className="">
          <Swiper
            loop={true}
            autoplay={true}
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1100: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper relative"
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <CourseCard course={course} />
              </SwiperSlide>
            ))}
            <div className="w-24 flex mt-4">
              <IoIosArrowBack className="prev course-arrow" />
              <IoIosArrowForward className="next course-arrow" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const courses = [
  {
    id: 1,
    title: "Website design",
    image: course1,
    courseTeacher: teacher1,
    rating: 4,
    comment: 23,
    like: 35,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, odit. Molestias non tempore incidunt ipsa repellendus ad repellat voluptates atque?",
    duration: "1.5 years",
    classSize: 24,
    classDuration: "1.5 hours",
  },
  {
    id: 2,
    title: "Networking for Beggineer",
    image: course2,
    courseTeacher: teacher2,
    rating: 4,
    comment: 23,
    like: 35,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, odit. Molestias non tempore incidunt ipsa repellendus ad repellat voluptates atque?",
    duration: "1.5 years",
    classSize: 24,
    classDuration: "1.5 hours",
  },
  {
    id: 3,
    title: "Redux zero to hero",
    image: course3,
    courseTeacher: teacher3,
    rating: 4,
    comment: 23,
    like: 35,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, odit. Molestias non tempore incidunt ipsa repellendus ad repellat voluptates atque?",
    duration: "1.5 years",
    classSize: 24,
    classDuration: "1.5 hours",
  },
  {
    id: 4,
    title: "Node js Deep learing",
    image: course4,
    courseTeacher: teacher1,
    rating: 4,
    comment: 23,
    like: 35,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, odit. Molestias non tempore incidunt ipsa repellendus ad repellat voluptates atque?",
    duration: "1.5 years",
    classSize: 24,
    classDuration: "1.5 hours",
  },
];

export default Course;
