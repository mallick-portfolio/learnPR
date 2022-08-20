import React from "react";
import StarRatings from "react-star-ratings";
import { AiFillLike, AiFillWechat } from "react-icons/ai";
const CourseCard = ({ course }) => {
  const {
    title,
    image,
    rating,
    comment,
    courseTeacher,
    like,
    des,
    duration,
    classSize,
    classDuration,
  } = course;
  return (
    <div>
      <img src={image} alt="" />
      <div className="p-4 bg-white shadow-sm">
        <div className="flex py-4 justify-start gap-8 items-center">
          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-medium">
              {title}
            </h3>
            <div className="flex flex-col sm:flex-row justify-start sm:gap-8">
              <StarRatings
                starDimension={"20px"}
                starSpacing={"2px"}
                isAggregateRating={true}
                isSelectable={true}
                rating={rating}
                starRatedColor="#FC9928"
                starEmptyColor="#444"
                numberOfStars={5}
                name="rating"
              />
              <div className="flex items-center gap-1 text-base">
                <AiFillWechat className="text-primary" />
                {comment}
              </div>
              <div className="flex items-center gap-1 text-base">
                <AiFillLike className="text-primary" />
                {like}
              </div>
            </div>
          </div>
          <img className="rounded-full" src={courseTeacher} alt="" />
        </div>
        <p className="text-base text-textBase">
          {des.length > 100 ? des.slice(0, 100) : des}
        </p>
        <div className="flex py-4 justify-start items-center gap-8">
          <div className="relative after:absolute after:border-r-2 after:-right-4 after:top-0 after:bottom-0 after:w-1 after:h-full after:border-secondary">
            <h5 className="text-sm font-semibold text-secondary">{duration}</h5>
            <p className="text-xs text-secondary">Course</p>
          </div>
          <div className="relative after:absolute after:border-r-2 after:-right-4 after:top-0 after:bottom-0 after:w-1 after:h-full after:border-secondary">
            <h5>{classSize}</h5>
            <p className="text-xs text-secondary">Class Size</p>
          </div>
          <div>
            <h5>{classDuration}</h5>
            <p className="text-xs text-secondary">Class Duration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
