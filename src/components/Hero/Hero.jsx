import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../../redux/api/api';
import capitalize from '../../utils/captalize';
import slides from './../../utils/slides';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"

const Hero = () => {
    const { data, isLoading } = useGetCategoriesQuery()
    const [query, setQuery] = useState({
        start: 0,
        end: 7
    })
    const navigate = useNavigate()
    const categories = data?.data;

    const handlePrev = () => {
        if (query.start !== 0)
            setQuery(prev => ({
                start: query.start - 7,
                end: query.end - 7
            }))
    }

    const handleNext = () => {
        if (query.end !== categories.length) {
            setQuery(prev => ({
                start: query.start + 7,
                end: query.end + 7
            }))
        }
    }

    return (
        <section className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="basis-full lg:basis-1/4 w-full">
                <div className="dropdown dropdown-open w-full">
                    <div className="bg-primary text-white shadow-md mb-3 p-3 rounded">Categories</div>
                    <ul className="menu shadow-lg bg-base-100 rounded w-full">
                        {categories?.slice(query.start, query.end).map(category => (
                            <li key={category._id} className="border">
                                <Link to={`/category/${category.name}`}>{capitalize(category.name)} Plant</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-around mt-5">
                    <button
                        onClick={handlePrev}
                        className="text-primary font-normal text-2xl">
                        <BsFillArrowLeftCircleFill />
                    </button>
                    <button
                        onClick={handleNext}
                        className="text-primary font-normal text-2xl">
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>
            </div>
            <div className="basis-3/4">
                <div className="ml-0 mb-5 lg:ml-5 lg:mb-0">
                    <Carousel
                        className="bg-white shadow-lg rounded-lg" autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        swipeable={true}
                        showStatus={false}
                    >
                        {slides.map(slide => (
                            <div className="relative h-[200px] lg:h-auto">
                                <img className="h-full" src={slide.image} alt="slider image" />
                                <div className="absolute top-[15%] lg:top-[30%] left-[5%] text-left">
                                    <h3 className="text-primary text-xl lg:text-4xl font-semibold mb-2 lg:mb-5">{slide.title}</h3>
                                    <p className="text-[12px] lg:text-[16px] text-base-200 w-2/3 mb-3">{slide.description}</p>
                                    <button
                                        onClick={() => navigate("/shop")}
                                        className="btn btn-sm lg:btn-md btn-primary text-white mt-0 lg:mt-3">
                                        Shop now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Hero;