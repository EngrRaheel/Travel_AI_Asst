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
            title: "Voos",
            para: "Planejando uma viagem? Vou encontrar as melhores opções de voos para você!",
            searchbtn: "Buscar Voos",
            btnMessage: "Buscar voos"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hotéis",
            para: "Procure as melhores ofertas de hotéis ao redor do mundo!",
            searchbtn: "Buscar Hotéis",
            btnMessage: "Buscar hotéis"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Tours e Atividades",
            para: "Obtenha as melhores ofertas de tours e atividades de todo o mundo!",
            searchbtn: "Buscar Tours",
            btnMessage: "Buscar tours"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Apartamentos",
            para: "Encontre as melhores ofertas de aluguel de apartamentos de curto prazo!",
            searchbtn: "Buscar Apartamentos",
            btnMessage: "Buscar apartamentos"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Voos de Fim de Semana",
            para: "Encontre os melhores destinos para escapadas de fim de semana.",
            searchbtn: "Voos neste fim de semana",
            btnMessage: "Voos neste fim de semana"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Solicitar Visto",
            para: "Verifique os requisitos de visto e faça a solicitação online!",
            searchbtn: "Aplicar",
            btnMessage: "Aplicar"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Seguro de Viagem",
            para: "Seguro médico de viagem para pessoas que viajam para fora do seu país de origem.",
            searchbtn: "Saiba Mais",
            btnMessage: "Saiba mais"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Proteção de Bagagem",
            para: "Proteja cada mala levada no avião por $5 por reserva.",
            searchbtn: "Obter Proteção",
            btnMessage: "Obter proteção"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Traslados de Aeroporto",
            para: "Reserve transporte privado ou shuttles compartilhados.",
            searchbtn: "Reservar Agora",
            btnMessage: "Reservar agora"
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
