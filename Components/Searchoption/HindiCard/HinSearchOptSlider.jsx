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
            title: "फ़्लाइट्स",
            para: "यात्रा की योजना बना रहे हैं? मैं आपके लिए सबसे अच्छे फ़्लाइट विकल्प खोज लूंगा!",
            searchbtn: "फ़्लाइट्स खोजें",
            btnMessage: "फ़्लाइट्स खोजें"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "होटल्स",
            para: "दुनियाभर में सर्वोत्तम होटल सौदों की खोज करें!",
            searchbtn: "होटल्स खोजें",
            btnMessage: "होटल्स खोजें"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "टूर्स और गतिविधियाँ",
            para: "दुनियाभर से सर्वोत्तम टूर और गतिविधि पेशवरों की पेशेवर ऑफ़र प्राप्त करें!",
            searchbtn: "टूर्स खोजें",
            btnMessage: "टूर्स खोजें"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "अपार्टमेंट्स",
            para: "सर्वोत्तम अपार्टमेंट किराए पर लेने की पेशेवर प्रस्तावों की खोज करें!",
            searchbtn: "अपार्टमेंट्स खोजें",
            btnMessage: "अपार्टमेंट्स खोजें"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "वीकेंड फ़्लाइट्स",
            para: "सर्वोत्तम वीकेंड गेटवे गंतव्यों की खोज करें।",
            searchbtn: "इस वीकेंड फ़्लाइट्स",
            btnMessage: "इस वीकेंड फ़्लाइट्स"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "वीज़ा के लिए आवेदन करें",
            para: "वीज़ा आवश्यकताओं की जांच करें और ऑनलाइन आवेदन करें!",
            searchbtn: "आवेदन करें",
            btnMessage: "आवेदन करें"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "यात्रा बीमा",
            para: "यात्रा करते समय व्यक्तियों के लिए यात्रा चिकित्सा बीमा।",
            searchbtn: "और जानें",
            btnMessage: "और जानें"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "बैगेज सुरक्षा",
            para: "प्रति बुकिंग के लिए $5 में विमान पर लिए जाने वाले प्रत्येक बैग की सुरक्षा।",
            searchbtn: "सुरक्षा प्राप्त करें",
            btnMessage: "सुरक्षा प्राप्त करें"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "हवाई अड्डे की स्थानांतरण सेवाएँ",
            para: "निजी परिवहन या साझा शटल बुक करें।",
            searchbtn: "अभी बुक करें",
            btnMessage: "अभी बुक करें"
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
                            min_h={"160px"}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
