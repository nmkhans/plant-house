import React from 'react';

const Feature = ({image, title, description}) => {
    return (
        <div className="flex items-center justify-evenly lg:justify-between bg-base-300 p-4 rounded">
            <div className="hover:-translate-y-3 transition-transform duration-300">
                <img className="w-[60px]" src={image} alt="feature image" />
            </div>
            <div className="ml-5">
                <h3 className="text-md font-semibold text-base-200">{title}</h3>
                <p className="text-[13px] text-slate-500">{description}</p>
            </div>
        </div>
    );
};

export default Feature;