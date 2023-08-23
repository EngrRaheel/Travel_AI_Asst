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
            title: "رحلات الطيران",
            para: "هل تخطط لرحلة؟ سأجد لك أفضل خيارات الرحلات الجوية!",
            searchbtn: "ابحث عن رحلات طيران",
            btnMessage: "ابحث عن رحلات"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "الفنادق",
            para: "ابحث عن أفضل عروض الفنادق حول العالم!",
            searchbtn: "ابحث عن فنادق",
            btnMessage: "ابحث عن فنادق"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "الجولات والأنشطة",
            para: "احصل على أفضل عروض الجولات والأنشطة من جميع أنحاء العالم!",
            searchbtn: "ابحث عن جولات",
            btnMessage: "ابحث عن جولات"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "الشقق",
            para: "ابحث عن أفضل عروض استئجار الشقق لفترة قصيرة!",
            searchbtn: "ابحث عن شقق",
            btnMessage: "ابحث عن شقق"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "رحلات نهاية الأسبوع",
            para: "ابحث عن أفضل وجهات قضاء عطلة نهاية الأسبوع.",
            searchbtn: "رحلات نهاية هذا الأسبوع",
            btnMessage: "رحلات نهاية هذا الأسبوع"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "التقديم للتأشيرة",
            para: "تحقق من متطلبات التأشيرة وقدم طلبك عبر الإنترنت!",
            searchbtn: "قدّم الطلب",
            btnMessage: "قدّم الطلب"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "تأمين السفر",
            para: "تأمين طبي للأشخاص أثناء السفر خارج بلدهم.",
            searchbtn: "اعرف المزيد",
            btnMessage: "اعرف المزيد"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "حماية الأمتعة",
            para: "حماية كل حقيبة تؤخذ على الطائرة بقيمة 5 دولارات للحجز.",
            searchbtn: "احصل على الحماية",
            btnMessage: "احصل على الحماية"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "نقل المطار",
            para: "احجز نقل خاص أو حافلات مشتركة.",
            searchbtn: "احجز الآن",
            btnMessage: "احجز الآن"
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
