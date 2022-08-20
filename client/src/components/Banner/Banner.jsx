import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";

const Banner = () => {
  const items = [
    {
      _id: 1,
      headtitle: " Welcome To",
      headsubtitle: "Learpro",
      img: banner1,
    },
    {
      _id: 2,
      headtitle: "Leading",
      headsubtitle: " University",
      img: banner2,
    },
    {
      _id: 3,
      headtitle: "Best Online",
      headsubtitle: " Course",
      img: banner3,
    },
  ];
  return (
    <div className="relative">
      <Swiper
        autoplay={{ delay: 2000 }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        loop={true}
        pagination={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className="relative after:absolute after:top-0 after:bottom-0 after:right-0 py-28 lg:py-44 after:left-0 after:bg-bannerColor text-white"
            >
              <div className="text-center relative z-20 px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl sm:my-1 md:my-2 lg:my-4 font-robotoS font-semibold uppercase">
                  {item.headtitle}{" "}
                  <span className="text-primary">{item.headsubtitle}</span>
                </h1>
                <h2 className="text-base md:text-lg font-medium">
                  We provides always our best educational services for our all
                  students <br /> and always try to achieve our students trust
                  and satisfaction
                </h2>
                <div className="flex items-center justify-center mt-5 gap-8">
                  <button className="bg-primary px-2 lg:px-5 py-1 lg:py-2 rounded-full font-medium lg:text-base text-white">
                    Our Service
                  </button>
                  <button className="bg-primary px-2 lg:px-5 py-1 lg:py-2 rounded-full font-medium lg:text-base text-white">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev absolute top-1/2 left-4 -translate-y-1/2 z-10">
          <IoIosArrowBack className="prev mx-auto mt-1 rounded-full w-8 h-8 lg:w-12 lg:h-12 border border-primary text-primary cursor-pointer" />
        </div>
        <div className="next  absolute top-1/2 right-4 -translate-y-1/2 z-10">
          <IoIosArrowForward className="next mx-auto mt-1 rounded-full w-8 h-8 lg:w-12 lg:h-12 border border-primary text-primary cursor-pointer" />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
