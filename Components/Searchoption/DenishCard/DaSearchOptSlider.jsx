import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SearchOptItem from '../SearchOptItem';



export default function Slider({ handleSendMessage, setMessage, handleOptSelection }) {


    const CardItems = [
        {
            img: "/Images/searchOptions/search_flights.svg",
            icon: "/Images/IconsSvgs/flights.svg",
            title: "Flyvninger",
            para: "Planlægger du en rejse? Jeg finder de bedste flymuligheder til dig!",
            searchbtn: "Søg Efter Flyvninger",
            btnMessage: "Søg flyvninger"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hoteller",
            para: "Søg de bedste hoteltilbud fra hele verden!",
            searchbtn: "Søg Efter Hoteller",
            btnMessage: "Søg hoteller"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Ture & Aktiviteter",
            para: "Få de bedste tilbud på ture og aktiviteter fra hele verden!",
            searchbtn: "Søg Efter Ture",
            btnMessage: "Søg ture"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Lejligheder",
            para: "Find de bedste tilbud på korttidsleje af lejligheder!",
            searchbtn: "Søg Efter Lejligheder",
            btnMessage: "Søg lejligheder"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Weekend Flyvninger",
            para: "Find de bedste destinationer til en weekendferie.",
            searchbtn: "Flyvninger denne weekend",
            btnMessage: "Flyvninger denne weekend"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Ansøg om Visa",
            para: "Tjek visumkrav og ansøg online!",
            searchbtn: "Ansøg",
            btnMessage: "Ansøg"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Rejseforsikring",
            para: "Rejsemedicinsk forsikring for personer, der rejser uden for deres hjemland.",
            searchbtn: "Lær Mere",
            btnMessage: "Lær mere"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Bagagebeskyttelse",
            para: "Beskyt hvert stykke bagage medbragt på flyet for $5 pr. reservation.",
            searchbtn: "Få Beskyttelse",
            btnMessage: "Få beskyttelse"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Lufthavnstransfers",
            para: "Book privat transport eller delt shuttle.",
            searchbtn: "Book Nu",
            btnMessage: "Book nu"
        }
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
