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
            title: "Vols",
            para: "Vous préparez un voyage ? Je trouverai les meilleures options de vol pour vous !",
            searchbtn: "Rechercher des Vols",
            btnMessage: "Rechercher des vols"
        },
        {
            img: "/Images/searchOptions/search_hotels.svg",
            icon: "/Images/IconsSvgs/Hotels.svg",
            title: "Hôtels",
            para: "Recherchez les meilleures offres d'hôtel du monde entier !",
            searchbtn: "Rechercher des Hôtels",
            btnMessage: "Rechercher des hôtels"
        },
        {
            img: "/Images/searchOptions/search_tours.svg",
            icon: "/Images/IconsSvgs/tours.svg",
            title: "Visites & Activités",
            para: "Obtenez les meilleures offres de visites et d'activités du monde entier !",
            searchbtn: "Rechercher des Visites",
            btnMessage: "Rechercher des visites"
        },
        {
            img: "/Images/searchOptions/search_apartments.svg",
            icon: "/Images/IconsSvgs/apartments.svg",
            title: "Appartements",
            para: "Trouvez les meilleures offres de location d'appartements à court terme !",
            searchbtn: "Rechercher des Appartements",
            btnMessage: "Rechercher des appartements"
        },
        {
            img: "/Images/searchOptions/search_weekends.svg",
            icon: "/Images/IconsSvgs/weekend_flights.svg",
            title: "Vols du Week-end",
            para: "Trouvez les meilleures destinations pour des escapades de week-end.",
            searchbtn: "Vols ce week-end",
            btnMessage: "Vols ce week-end"
        },
        {
            img: "/Images/searchOptions/search_visa.svg",
            icon: "/Images/IconsSvgs/apply.svg",
            title: "Demande de Visa",
            para: "Vérifiez les exigences en matière de visa et faites une demande en ligne !",
            searchbtn: "Appliquer",
            btnMessage: "Appliquer"
        },
        {
            img: "/Images/searchOptions/search_travelinsurance.svg",
            icon: "/Images/IconsSvgs/travel_insurance.svg",
            title: "Assurance Voyage",
            para: "Assurance médicale de voyage pour les personnes voyageant en dehors de leur pays d'origine.",
            searchbtn: "En savoir plus",
            btnMessage: "En savoir plus"
        },
        {
            img: "/Images/searchOptions/search_baggage protection.svg",
            icon: "/Images/IconsSvgs/baggage.svg",
            title: "Protection des Bagages",
            para: "Protégez chaque bagage emporté dans l'avion pour 5 $ par réservation.",
            searchbtn: "Obtenir la Protection",
            btnMessage: "Obtenir la protection"
        },
        {
            img: "/Images/searchOptions/search_airporttransfers.svg",
            icon: "/Images/IconsSvgs/transfer.svg",
            title: "Transferts Aéroportuaires",
            para: "Réservez un transport privé ou des navettes partagées.",
            searchbtn: "Réserver Maintenant",
            btnMessage: "Réserver maintenant"
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
