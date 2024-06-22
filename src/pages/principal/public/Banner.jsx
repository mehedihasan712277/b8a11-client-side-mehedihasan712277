import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from '../../../assets/img1.png'
import img2 from '../../../assets/img2.png'
import img3 from '../../../assets/img3.png'

const Banner = () => {
    return (
        <>
            <div className='px-4 md:px-8 lg:px-12 xl:px-20 rounded-md'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper pb-8"
                >
                    <SwiperSlide>
                        <div className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]'>
                            <img src={img1} alt="web_development" className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]'>
                            <img src={img2} alt="graphic design" className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]'>
                            <img src={img3} alt="digital marketing" className='w-full h-40 mm:h-44 ml:h-56 mv:h-72 md:h-96 lg:h-[500px]' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Banner
