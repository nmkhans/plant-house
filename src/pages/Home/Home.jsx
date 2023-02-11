import React from 'react';
import Hero from './../../sections/Hero/Hero';
import Features from './../../sections/Features/Features';

const Home = () => {

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <Hero />
                <Features />
            </div>
        </main>
    );
};

export default Home;