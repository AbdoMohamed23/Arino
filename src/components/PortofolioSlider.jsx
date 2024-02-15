import React from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-scroll';

const PortofolioSlider = () => {

    const data = [
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_3.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_1.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_0.jpg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_2.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_3.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_1.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_0.jpg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_2.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_3.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_1.jpeg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_0.jpg"},
      {title: "Colorful Art Work", subtitle: "See Details", image: "/src/image/portfolio_2.jpeg"},
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              },
            },
          ],
        };

    return (
        <Slider {...settings} className='lg:-mx-64 gap-5'>
          
          {
            data.map((item, index) =><Link key={index} to='/' className='relative cs-portfolio cs-bg' >
              <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl'></div>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div className='absolute top-0 left-0 hover:bg-dark/80 w-full h-full flex items-center justify-center rounded-2xl cursor-pointer'>
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold mb-1'>{item.title}</h2>
                    <p className='cs-portfolio-subtitle'>{item.subtitle}</p>
                </div>
              </div>
            </Link>)
          }

        </Slider>
    );
}

export default PortofolioSlider;
