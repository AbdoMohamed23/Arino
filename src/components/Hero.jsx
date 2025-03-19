import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='banner cs-style1' id='home'>

            <div className='cs-shape-1'></div>
            <div className='cs-shape-1'></div>
            <div className='cs-shape-1'></div>


            <div className='px-4 lg:px-24'>
                <h1 className='md:w-2/3 lg:text-8xl sm:text-6xl text-5xl mb-5 text-white font-bold lg:leading-snug sm:leading-snug leading-snug'><span className='text-orange'>Creativity</span> In Our Blood Line</h1>


                <div className='text-white text-lg flex md:flex-row flex-col-reverse md:items-center items-start justify-between gap-8'>
                    <div>
                        <a href="" className='inline-flex items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'><span>Get a Quote</span> <BsArrowRight /></a>
                    </div>
                    <div className='md:w-1/2'>
                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sint quae quam explicabo nulla adipisci ipsa omnis doloremque quidem, quo officia eveniet, tempore odio debitis id non provident dolor. Dolorum!</p>
                    </div>
                </div>
            </div>


            <Link to="services" smooth={true} className="cs-down-btn md:mt-20 mt-8"></Link>
        </div>
    );
}

export default Hero;
