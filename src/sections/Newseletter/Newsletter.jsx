import React from 'react';

const Newsletter = () => {
    return (
        <section className="py-5">
            <div className="card shadow-lg w-full bg-primary text-white">
                <div className="card-body">
                    <div className="h-[300px] lg:h-[150px] flex flex-col lg:flex-row  items-center justify-between">
                        <div>
                            <h2 className="text-xl lg:text-3xl font-semibold mb-2">Subscribe to our news letter.</h2>
                            <p className="w-full lg:w-3/4">Stay connected with us by subscribing to our news letter. We'll give amazing discount over time...</p>
                        </div>
                        <div>
                            <form className="flex flex-col lg:flex-row">
                                <input className="input border-2 bg-base-300 w-full" type="text" placeholder="Your email address" />
                                <button className="btn bg-base-300 border-2 border-primary text-primary ml-0 lg:ml-3 mt-3 lg:mt-0">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;