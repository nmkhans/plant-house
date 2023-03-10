import React from 'react';
import { LineWave } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="text-center flex items-center w-full">
            <LineWave
                height="400"
                width="400"
                color="#8abe53"
                ariaLabel="line-wave"
                wrapperStyle={{}}
                visible={true}
            />
        </div>
    );
};

export default Spinner;