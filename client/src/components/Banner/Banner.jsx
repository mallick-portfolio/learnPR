import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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
              className="banner-item"
            >
              <div className="banner-content">
                <h1 className="banner-title">
                  {item.headtitle}{" "}
                  <span className="text-primary">{item.headsubtitle}</span>
                </h1>
                <h2 className="banner-subtitle">
                  We provides always our best educational services for our all
                  students <br /> and always try to achieve our students trust
                  and satisfaction
                </h2>
                <div className="banner-btn-flex">
                  <button className="banner-btn">Our Service</button>
                  <button className="banner-btn">Get a Quote</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="prev left-4 slider-arrow">
          <IoIosArrowBack className="prev arrow-btn" />
        </div>
        <div className="next right-4 slider-arrow">
          <IoIosArrowForward className="next arrow-btn" />
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
