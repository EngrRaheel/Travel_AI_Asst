import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SearchOptItem from '../SearchOptItem';


export default function Slider({ handleSendMessage, setMessage, handleOptSelection }) {

    // const API = AIzaSyAPL-ejfLfY6XIFSI1mFKdnCtCtD_gZcFU

    const CardItems = [
        {
            img: "/Images/searchOptions/search_flights.svg",
            icon: "/Images/IconsSvgs/flights.svg",
            title: "Voli",
            para: "Stai pianificando un viaggio? Troverò le migliori opzioni di volo per te!",
            searchbtn: "Cerca Voli",
            btnMessage: "Cerca voli"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hotel",
            para: "Cerca le migliori offerte di hotel in tutto il mondo!",
            searchbtn: "Cerca Hotel",
            btnMessage: "Cerca hotel"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Tour e Attività",
            para: "Ottieni le migliori offerte per tour e attività da tutto il mondo!",
            searchbtn: "Cerca Tour",
            btnMessage: "Cerca tour"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Appartamenti",
            para: "Trova le migliori offerte di affitto di appartamenti a breve termine!",
            searchbtn: "Cerca Appartamenti",
            btnMessage: "Cerca appartamenti"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Voli per il Weekend",
            para: "Trova le migliori destinazioni per una breve vacanza nel weekend.",
            searchbtn: "Voli questo weekend",
            btnMessage: "Voli questo weekend"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Richiedi un Visto",
            para: "Verifica i requisiti per il visto e fai domanda online!",
            searchbtn: "Applica",
            btnMessage: "Applica"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Assicurazione di Viaggio",
            para: "Assicurazione medica di viaggio per le persone che viaggiano al di fuori del loro paese di origine.",
            searchbtn: "Scopri di più",
            btnMessage: "Scopri di più"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Protezione Bagagli",
            para: "Proteggi ogni bagaglio portato sull'aereo per $5 per prenotazione.",
            searchbtn: "Ottieni Protezione",
            btnMessage: "Ottieni protezione"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Trasferimenti Aeroportuali",
            para: "Prenota il trasporto privato o le navette condivise.",
            searchbtn: "Prenota Ora",
            btnMessage: "Prenota ora"
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
