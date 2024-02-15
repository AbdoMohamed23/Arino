import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsStacky(true);
            }
            else {
                setIsStacky(false);
            }
        };

        window.addEventListener('scroll', handleScroll)

        return () => (
            window.addEventListener('scroll', handleScroll)
        )

    });


    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Services", path: "services" },
        { link: "Portfolio", path: "portfolio" },
        { link: "Blog", path: "blogs" },
        { link: "Contact", path: "contact" },
    ];


    return (
        <header className='w-full bg-dark fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-dark transition-all duration-300 ease-in" : "transition-all duration-300 ease-in"}`}>

                <div className='flex justify-between items-center text-base gap-8'>
                    <a href="/" className='text-white text-3xl font-bold'><span className='text-orange'>A</span>rino</a>


                    <ul className='md:flex space-x-12 hidden navitem'>
                        {
                            navItems.map(({ link, path }) => <Link to={path} activeClass='active' spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white uppercase hover:text-orange cursor-pointer' >{link}</Link>)
                        }
                    </ul>

                    <div className='space-x-12 hidden lg:flex items-center'>
                        <button className='bg-transparent text-white p-2 border rounded-full'>
                            <FaBarsStaggered className='w-4 h-4 hover:text-orange' />
                        </button>
                    </div>


                    <div className='md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='focus:outline-none text-white transition-all duration-300 ease-in'>
                            {
                                isMenuOpen ? (<FaXmark className='h-6 w-6' />) : (<FaBarsStaggered className='h-6 w-6' />)
                            }
                        </button>
                    </div>
                </div>

                <div className={`space-y-4 px-4 mt-14 py-7 bg-dark transition-all duration-300 ease-in ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                        navItems.map(({ link, path }) => <Link to={path} activeClass='active' spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white uppercase hover:text-orange cursor-pointer' >{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar