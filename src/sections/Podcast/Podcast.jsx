import React from "react";
import podcastImage from "../../assets/podcast.jpg";
import SinglePodcast from "../../components/SinglePodcast/SinglePodcast";
import Carousel from "react-multi-carousel";
import { useGetPodcastsQuery } from "../../redux/api/api";

const Podcast = () => {
  const { data, isLoading } = useGetPodcastsQuery();

  if (isLoading) return "Loading...";

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

  const podcasts = data?.data;

  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl font-semibold text-base-200 mb-10">
          Our podcasts
        </h3>
      </div>
      <div>
        <Carousel
          arrows={true}
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="py-5"
        >
          {podcasts.map((podcast, index) => (
            <SinglePodcast key={podcast._id} podcast={podcast} index={index} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Podcast;
