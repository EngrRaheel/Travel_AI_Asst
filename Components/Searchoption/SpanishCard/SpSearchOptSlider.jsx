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
            title: "Vuelos",
            para: "¿Planeando un viaje? ¡Encontraré las mejores opciones de vuelo para ti!",
            searchbtn: "Buscar Vuelos",
            btnMessage: "Buscar vuelos"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hoteles",
            para: "¡Busca las mejores ofertas de hoteles de todo el mundo!",
            searchbtn: "Buscar Hoteles",
            btnMessage: "Buscar hoteles"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Tours y Actividades",
            para: "¡Obtén las mejores ofertas de tours y actividades de todo el mundo!",
            searchbtn: "Buscar Tours",
            btnMessage: "Buscar tours"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Apartamentos",
            para: "¡Encuentra las mejores ofertas de alquiler de apartamentos a corto plazo!",
            searchbtn: "Buscar Apartamentos",
            btnMessage: "Buscar apartamentos"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Vuelos de Fin de Semana",
            para: "Encuentra los mejores destinos para escapadas de fin de semana.",
            searchbtn: "Vuelos este fin de semana",
            btnMessage: "Vuelos este fin de semana"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Solicitar Visa",
            para: "¡Verifica los requisitos de visa y solicita en línea!",
            searchbtn: "Aplicar",
            btnMessage: "Aplicar"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Seguro de Viaje",
            para: "Seguro médico de viaje para personas que viajan fuera de su país de origen.",
            searchbtn: "Más Información",
            btnMessage: "Más información"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Protección de Equipaje",
            para: "Protege cada maleta que llevas en el avión por $5 por reserva.",
            searchbtn: "Obtener Protección",
            btnMessage: "Obtener protección"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Traslados al Aeropuerto",
            para: "Reserva transporte privado o traslados compartidos.",
            searchbtn: "Reservar Ahora",
            btnMessage: "Reservar ahora"
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
                            // min_h="180px"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
