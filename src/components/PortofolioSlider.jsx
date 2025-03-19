import React from 'react';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-scroll';
import img3 from '../image/portfolio_3.jpeg';
import img1 from '../image/portfolio_1.jpeg';
import img0 from '../image/portfolio_0.jpg';
import img2 from '../image/portfolio_2.jpeg';

const PortofolioSlider = () => {

    const data = [
      {image: img3},
      {image: img1},
      {image: img0},
      {image: img2},
      
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
              <div className='absolute top-0 left-0 w-full h-full rounded-2xl'></div>
              <div>
                <img src={item.image} alt="image" />
              </div>
            </Link>)
          }

        </Slider>
    );
}

export default PortofolioSlider;
