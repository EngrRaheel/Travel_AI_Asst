import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Items from "./Items"

export default function Slider({ selectedLanguage, setSelectedLanguage, handleSendMessage, setMessage, handleLanguageSelection }) {

    const languageOptions = [
        {
            label: "English",
            value: "Speak in English",
            image: "/Images/flags/united-kingdom.svg"
        },
        {
            label: "Spanish",
            value: "Speak in Spanish",
            image: "/Images/flags/spain.svg"
        },
        {
            label: "French",
            value: "Speak in French",
            image: "/Images/flags/france.svg"
        },
        {
            label: "Portuguese",
            value: "Speak in Portuguese",
            image: "/Images/flags/portugal.svg"
        },
        {
            label: "Italian",
            value: "Speak in Italian",
            image: "/Images/flags/italy.svg"
        },
        {
            label: "Netherlands",
            value: "Speak in Dutch",
            image: "/Images/flags/dutch.png"
        },
        {
            label: "Israel",
            value: "Speak in Hebrew",
            image: "/Images/flags/israel.png"
        },
         {
            label: "Saudi Arabia",
            value: "Speak in Arabic",
            image: "/Images/flags/saudiarabia.png"
         }

    ];

    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full mt-4 overflow-hidden"
            >
                {languageOptions.map((option) => (
                    <SwiperSlide key={option.value}>
                        <Items
                            languageOptions={[option]}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            sendMessage={handleSendMessage}
                            setMessage={setMessage}
                            handleLanguageSelection={handleLanguageSelection}
                            img={option.image}
                            name={option.name}
                            label={option.label}
                            value={option.value}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
