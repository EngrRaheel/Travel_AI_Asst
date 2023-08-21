import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Items from "./SearchOptItem"
import SearchOptItem from './SearchOptItem';

import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"



export default function Slider({ handleSendMessage, setMessage, handleOptSelection }) {

    // const API = AIzaSyAPL-ejfLfY6XIFSI1mFKdnCtCtD_gZcFU

    const CardItems = [
        {
            img: "/Images/searchOptions/search_flights.svg",
            icon: "/Images/IconsSvgs/flights.svg",
            title: "FLights",
            para: "Planning a trip? I will find you the best flight options!",
            searchbtn: "Search Flights",
            btnMessage: "search flights"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hotels",
            para: "Search the best hotel deals from around the world!",
            searchbtn: "Search Hotels",
            btnMessage: "search hotels"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Tours & Activities",
            para: "Get the best tour & activities offers from around the world!",
            searchbtn: "Search Tours",
            btnMessage: "search tours"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Apartments",
            para: "Find the best apartment short-term rent offers!",
            searchbtn: "Search Apartments",
            btnMessage: "search apartments"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Weekend Flights",
            para: "Find the best weekend getaway destinations.",
            searchbtn: "Flights this weekend",
            btnMessage: "flights this weekend"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Apply for Visa",
            para: "Check visa requirements and apply online!",
            searchbtn: "Apply",
            btnMessage: "apply"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Travel Insurance",
            para: "Travel medical insurance for people, while traveling outside their home country.",
            searchbtn: "Learn More",
            btnMessage: "learn more"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Baggage protection",
            para: "Protect every bag taken on the plane for $5 per booking.",
            searchbtn: "Get Protection",
            btnMessage: "get protection"

        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Airport Transfers",
            para: "Book private transportation or shared shuttles.",
            searchbtn: "Book Now",
            btnMessage: "book now"
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full mt-4"
            >
                {CardItems.map((item) => (
                    <SwiperSlide key={item.title}>
                        <SearchOptItem
                            img={item.img}
                            icon={item.icon}
                            title={item.title}
                            para={item.para}
                            searchbtn={item.searchbtn}
                            handleOptSelection={handleOptSelection}
                            sendMessage={handleSendMessage}
                            setMessage={setMessage}
                            btnMessage={item.btnMessage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
