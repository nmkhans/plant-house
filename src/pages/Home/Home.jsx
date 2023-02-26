import React from 'react';
import Hero from './../../sections/Hero/Hero';
import Features from './../../sections/Features/Features';
import AllProducts from '../../sections/AllProducts/AllProducts';
import Newsletter from './../../sections/Newseletter/Newsletter';
import UserReviews from '../../sections/UserReviews/UserReviews';

const Home = () => {

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <Hero />
                <Features />
                <AllProducts />
                <UserReviews />
                <Newsletter />
            </div>
        </main>
    );
};

export default Home;