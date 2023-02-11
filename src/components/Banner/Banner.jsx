import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"
import plant from "../../assets/plant.jpg"
import plant2 from "../../assets/plant-2.jpg"

const Banner = () => {

    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="basis-full lg:basis-1/4 w-full">
                <div className="dropdown dropdown-open w-full">
                    <div className="bg-primary text-white shadow-md mb-3 p-3 rounded">Categories</div>
                    <ul className="menu shadow-lg bg-base-100 rounded w-full">
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                        <li className="border"><a>Item 1</a></li>
                    </ul>
                </div>
                <div className="flex justify-around mt-5">
                    <button className="text-primary font-normal text-2xl">
                        <BsFillArrowLeftCircleFill />
                    </button>
                    <button className="text-primary font-normal text-2xl">
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </div>
            <div className="basis-3/4">
                <div className="ml-0 mb-5 lg:ml-5 lg:mb-0">
                    <Carousel className="bg-white shadow-lg rounded-lg" autoPlay={true} infiniteLoop={true} showThumbs={false} swipeable={true}>
                        <div className="relative">
                            <img src={plant} alt="" />
                            <div className="absolute top-0 left-0">
                                <h3>best plants</h3>
                            </div>
                        </div>
                        <div>
                            <img src={plant2} alt="" />
                        </div>
                        <div>
                            <img src={plant} alt="" />
                        </div>
                        <div>
                            <img src={plant2} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Banner;