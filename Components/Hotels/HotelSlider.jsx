import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import HotelCard from "./HotelCard"


export default function Slider({ contentHotel }) {



    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full"
            >
                {contentHotel.map((item) => (
                    <SwiperSlide key={item._id} >
                        {item.images.map((image, index) => (
                            < HotelCard
                                key={index}
                                images={item.featuredImage}
                                min_h="450px"
                                name={item.name}
                                address={item.address}
                                rating={item.rating}

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