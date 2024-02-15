import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='lg:px-24 px-4 text-white'>

            <div className='flex flex-col md:flex-row flex-wrap justify-between items-start gap-12'>

                <div className='space-y-4 lg:w-1/3'>
                    <a href="/" className='text-white text-3xl font-bold'>
                        <span className='text-orange'>A</span>rino
                    </a>
                    <p className='text-gray-200'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, officiis. Officiis asperiores expedita adipisci animi vitae.</p>

                    <div className='flex gap-5 text-white'>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaLinkedinIn className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaInstagram className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaTwitter className='w-5 h-5' /></a>
                        <a href="/" className='block border-2 p-3 rounded-full hover:border-orange hover:scale-110 transition-all duration-300'><FaFacebookF className='w-5 h-5' /></a>
                    </div>
                </div>


                <div className='space-y-4'>
                    <h3 className='text-xl font-semibold'>Services</h3>
                    <div className='space-y-3 text-gray-300'>
                        <a href="/" className='block'>UI/UX Design</a>
                        <a href="/" className='block'>WP Development</a>
                        <a href="/" className='block'>Digital Marketing</a>
                        <a href="/" className='block'>React Development</a>
                    </div>
                </div>



                <div className='space-y-4'>
                    <h3 className='text-xl font-semibold'>Contact Us</h3>
                    <div className='space-y-3 text-gray-300'>
                        <p>+44 584 4856 875</p>
                        <p>infotech@arino.com</p>
                        <p>50 Wall Street Suite, <br /> 44150 Ohio, United States</p>
                    </div>
                </div>



                <div className='space-y-4 lg:w-96'>
                    <h3 className='text-xl font-semibold'>Subscribe</h3>
                    <div className='space-y-3 text-gray-300'>
                        <div className='relative w-full'>
                            <input type="email" placeholder='example@email.com' className='newsletter_input' />
                            <button className='newsletter_btn'>
                                <span>Send</span>
                            </button>
                        </div>

                        <p>At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit.</p>
                    </div>
                </div>

            </div>
            <div className='h-12'></div>
            <hr className='border-gray-300' />
            <div className='h-8'></div>

            <div className='flex flex-col sm:flex-row justify-between pb-7'>
                <p>Copyright © 2024 Laralink</p>
                <p>Terms of use | Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;
