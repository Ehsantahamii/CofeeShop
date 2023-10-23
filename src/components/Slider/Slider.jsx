import React from 'react';

// Import Swiper 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import './Slider.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const sliderPic =[
  {
    "id": 1,
    "url": "/images/Slide1.png",
    "alt":"Cafe environment"
  },
  {
    "id": 2,
    "url": "/images/Slide1.png",
    "alt":"Cafe environment"
  },
  {
    "id": 3,
    "url": "/images/Slide1.png",
    "alt":"Cafe environment"
  },
  {
    "id": 4,
    "url": "/images/Slide1.png",
    "alt":"Cafe environment"
  },
]


const Slider = () => {
    return (

      // Slider 
        <Swiper
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loopedSlides={true}
          loop={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mainPageSwiper w-full m-auto my-9 h-52 bg-white "
        >

          {
            sliderPic.map((slid =>
              
              <SwiperSlide key={slid.id}>
                <img className='w-full h-full' src={slid.url} alt={slid.alt} />
              </SwiperSlide>
              )
            )
          }
        </Swiper>
      );
};

export default Slider;