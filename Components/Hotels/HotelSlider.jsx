import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import HotelCard from "./HotelCard"


export default function Slider({ contentHotel }) {


    // const unescapeUrl = (url) => {
    //     return url.replace(/\\\//g, '/');
    // };

    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full "
            >
                {contentHotel.map((item) => (
                    <SwiperSlide key={item.hotel._id}>
                        {item.hotel.images.map((image, index) => (
                            < HotelCard
                                key={index}
                                images={[image]}
                                min_h="450px"
                                name={item.hotel.name}
                            />

                        ))}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

// name={item.hotel.name}
// rating={item.hotel.rating}
// logo={item.hotel.logo}
// description={item.hotel.description}
// address={item.hotel.address}
// city={item.hotel.cityName}
// country={item.hotel.countryName}
// maxPrice={item.hotel.maxPrice}
// minPrice={item.hotel.minPrice}
// images={item.hotel.images}