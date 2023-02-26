import React from "react";
import StarRatings from "react-star-ratings";

const ReviewCard = ({ review }) => {
  return (
    <div className="card mx-5 bg-base-100 shadow-xl h-[250px]">
      <div className="text-center">
        <div className="avatar">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.image} />
          </div>
        </div>
        <div>
          <h3 className="text-xl text-primary font-semibold mt-2">
            {review.name}
          </h3>
        </div>
        <div>
          <p className="text-slate-500 mt-2">{review.description}</p>
        </div>
        <div className="mt-3">
          <StarRatings
            rating={review.rating}
            starRatedColor="#f6c912"
            starHoverColor="#f6c912"
            numberOfStars={5}
            starDimension="18px"
            name="rating-show"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
