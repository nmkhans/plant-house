import React from "react";

const SinglePodcast = ({ podcast, index }) => {
  return (
    <a className="inline-block" href={podcast.link} target="_blank">
      <div className="card mx-5 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={podcast.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body relative">
          <h2 className="absolute bottom-20 mx-auto w-full text-white text-sm font-normal">Podcast-0{index + 1}</h2>
          <h2 className="absolute bottom-14 mx-auto w-full text-white text-xl font-semibold">{podcast.title}</h2>
        </div>
      </div>
    </a>
  );
};

export default SinglePodcast;
