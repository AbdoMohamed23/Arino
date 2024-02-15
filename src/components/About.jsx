import React from 'react';

const About = () => {
    return (
        <div className='text-white md:-mt-[100px] -mt-10 bg-gradient-to-tr from-[#161616] to-[#080808] lg:max-24
             mx-4 py-12 md:py-20 md:px-16 px-6 rounded-xl z-50 flex flex-col md:flex-row justify-between md:items-center gap-12 relative'>
            <div className='bg-[url(/src/assets/funfact_bg.svg)] bg-no-repeat bg-center h-full w-full absolute top-0 left-0 opacity-75'></div>

            <div className='md:w-2/5'id='about'>
                <h2 className='text-5xl font-bold mb-5'>Our fun fact</h2>
                <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, distinctio. Quam dicta ad error inventore dolores quis quo nam eligendi sit! Et nostrum maxime itaque cumque, deleniti ipsam qui inventore.</p>
            </div>

            <div className='md:w-3/5'>
                <div className='grid sm:grid-cols-2 grid-cols-1 gap-8'>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex h-auto items-center gap-3'>
                        <h4 className='md:text-5xl text-3xl font-semibold'>40K</h4>
                        <div>
                            <span className='text-orange font-bold text-lg'>+</span>
                            <p className='mb-2 text-sm leading-tight text-gray-300'>Global Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
