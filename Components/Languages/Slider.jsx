import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Items from "./Items"

export default function App({ selectedLanguage, setSelectedLanguage, handleSendMessage, setMessage }) {

    const languageOptions = [
        {
            label: "English",
            value: "speak in english",
            image: "english_image_url.jpg"
        },
        {
            label: "Spanish",
            value: "Speak in Spanish",
            image: "spanish_image_url.jpg"
        },
        {
            label: "French",
            value: "Speak in French",
            image: "french_image_url.jpg"
        },
        {
            label: "Chinese",
            value: "用中文说话",
            image: "chinese_image_url.jpg"
        },
        {
            label: "Arabic",
            value: "تحدث باللغة العربية",
            image: "arabic_image_url.jpg"
        },
        {
            label: "Hindi",
            value: "हिंदी में बात करें",
            image: "hindi_image_url.jpg"
        },
        {
            label: "Russian",
            value: "Говорите по-русски",
            image: "russian_image_url.jpg"
        },
        {
            label: "Japanese",
            value: "日本語で話してください",
            image: "japanese_image_url.jpg"
        },
    ];



    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {languageOptions.map((option) => (
                    <SwiperSlide key={option.value}>
                        <Items
                            languageOptions={[option]}
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            sendMessage={handleSendMessage}
                            setMessage={setMessage}
                            img={option.image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </> 
    );
}
