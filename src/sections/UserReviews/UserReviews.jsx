import React from "react";
import Carousel from "react-multi-carousel";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { useGetReviewsQuery } from "../../redux/api/api";

const UserReviews = () => {
  const { data, isLoading } = useGetReviewsQuery();

  if (isLoading) return "Loading...";

  const reviews = data?.data;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-10">
      <div>
        <div>
          <h3 className="text-3xl font-semibold text-base-200 mb-10">
            What our customer's say
          </h3>
        </div>
      </div>
      <Carousel
        arrows={true}
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="py-5"
      >
        {reviews.map((review) => (
          <ReviewCard review={review} />
        ))}
      </Carousel>
    </section>
  );
};

export default UserReviews;
