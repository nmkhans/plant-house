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
                            <img src={plant} alt="slider image" />
                            <div className="absolute top-[30%] left-[5%] text-left">
                                <h3 className="text-primary text-4xl font-semibold mb-5">House of plants.</h3>
                                <p className="text-md text-base-200 w-2/3 mb-3">We have varity of plants. any plant you can think of, we can sell it... </p>
                                <button className="btn btn-md btn-primary text-white mt-3">Shop now</button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={plant2} alt="slider image" />
                            <div className="absolute top-[30%] left-[5%] text-left">
                                <h3 className="text-primary text-4xl font-semibold mb-5">Quality plants.</h3>
                                <p className="text-md text-base-200 w-2/3 mb-3">We sell premium and qualitifull plants. You order and we'll send at your door step... </p>
                                <button className="btn btn-md btn-primary text-white mt-3">Shop now</button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={plant} alt="slider image" />
                            <div className="absolute top-[30%] left-[5%] text-left">
                                <h3 className="text-primary text-4xl font-semibold mb-5">House of plants.</h3>
                                <p className="text-md text-base-200 w-2/3 mb-3">We have varity of plants. any plant you can think of, we can sell it... </p>
                                <button className="btn btn-md btn-primary text-white mt-3">Shop now</button>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={plant2} alt="slider image" />
                            <div className="absolute top-[30%] left-[5%] text-left">
                                <h3 className="text-primary text-4xl font-semibold mb-5">Quality plants.</h3>
                                <p className="text-md text-base-200 w-2/3 mb-3">We sell premium and qualitifull plants. You order and we'll send at your door step... </p>
                                <button className="btn btn-md btn-primary text-white mt-3">Shop now</button>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Banner;