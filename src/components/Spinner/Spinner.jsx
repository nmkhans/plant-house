import React from 'react';
import { LineWave } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="text-center mx-auto">
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