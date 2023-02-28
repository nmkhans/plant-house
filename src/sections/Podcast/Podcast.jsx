import React from "react";
import podcastImage from "../../assets/podcast.jpg";
import SinglePodcast from "../../components/SinglePodcast/SinglePodcast";
import Carousel from "react-multi-carousel";

const Podcast = () => {
  const podacasts = [
    {
      id: 1,
      title: "How to care plants",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
    {
      id: 2,
      title: "How to care plants2",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
    {
      id: 3,
      title: "How to care plants3",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
    {
      id: 1,
      title: "How to care plants",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
    {
      id: 2,
      title: "How to care plants2",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
    {
      id: 3,
      title: "How to care plants3",
      image: podcastImage,
      link: "https://youtu.be/cJyneXT2vlk",
    },
  ];

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
        <h3 className="text-3xl font-semibold text-base-200 mb-10">
          Our podcasts
        </h3>
      </div>
      <div>
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
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="py-5"
        >
          {podacasts.map((podcast) => (
            <SinglePodcast podcast={podcast} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Podcast;
