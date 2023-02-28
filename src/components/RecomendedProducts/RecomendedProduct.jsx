import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { useGetRecomendedProductsQuery } from "../../redux/api/api";
import Product from "../Product/Product";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecomendedProduct = () => {
  const { data, isLoading } = useGetRecomendedProductsQuery();

  if (isLoading) return "Loading...";
  const products = data?.data;

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
    <div className="w-full">
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
      >
        {products.map((product) => (
          <div className="mx-3 w-[300px]">
            <Product product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RecomendedProduct;
