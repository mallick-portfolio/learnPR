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
        <div className="courser-card-content">
          <div>
            <h3 className="course-cart-title">{title}</h3>
            <div className="cart-icon-flex">
              <StarRatings
                starDimension={"15px"}
                starSpacing={"2px"}
                isAggregateRating={true}
                isSelectable={true}
                rating={rating}
                starRatedColor="#FC9928"
                starEmptyColor="#444"
                numberOfStars={5}
                name="rating"
              />
              <div className="cart-icon-common">
                <AiFillWechat className="text-primary" />
                {comment}
              </div>
              <div className="cart-icon-common">
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
        <div className="course-cart-subContent">
          <div className="cart-cart-sub-flex">
            <h5 className="couse-duration">{duration}</h5>
            <p className="text-xs text-secondary">Course</p>
          </div>
          <div className="course-card-class">
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
