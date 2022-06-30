import React from 'react';
import banner from '../../assets/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="md:max-w-screen-md sm:max-w-screen-sm rounded-lg " />
                <div>
                    <h1 className="text-3xl font-bold uppercase">Brightening up your life</h1>
                    <p className="py-6">Power-Hack is countries leading power distribution company. We are committed to make electricity accessible everywhere. </p>

                </div>
            </div>
        </div>
    );
};

export default Banner;