import React from 'react';

const Home = () => {

    return (
        <section className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <div className="flex justify-between items-center">
                    <div className="basis-1/4">
                        <div className="dropdown dropdown-open w-full">
                            <div className="bg-primary text-white shadow-md mb-3 p-3 rounded">Categories</div>
                            <ul className="dropdown-content menu shadow-lg bg-base-100 rounded w-full">
                                <li className="border"><a>Item 1</a></li>
                                <li className="border"><a>Item 1</a></li>
                                <li className="border"><a>Item 1</a></li>
                                <li className="border"><a>Item 1</a></li>
                                <li className="border"><a>Item 1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="basis-3/4">slider</div>
                </div>
            </div>
        </section>
    );
};

export default Home;