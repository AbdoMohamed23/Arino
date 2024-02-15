import React from 'react';
import { BsArrowRight } from 'react-icons/bs';


const Contact = () => {
    return (
        <div className='lg:px-24 px-4'>
            <div className='relative bg-[url(/src/assets/cta_bg.jpeg)] bg-no-repeat bg-cover h-96 rounded-xl' id='contact'>


                <div className='cs-shape-1'></div>
                <div className='cs-shape-1'></div>
                <div className='cs-shape-1'></div>


                <div className='h-full flex items-center justify-center'>
                    <div className='lg:w-1/2 mx-auto text-center px-4'>
                        <h2 className='lg:text-5xl text-3xl text-white font-bold lg:leading-snug leading-normal mb-6'>Lets disscuse make something <span className='italic'>cool</span> together</h2>
                        <a href="" className='inline-flex text-white items-center gap-2 font-semibold hover:text-orange transition-all duration-300 ease-in'><span>Get a Quote</span> <BsArrowRight /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
