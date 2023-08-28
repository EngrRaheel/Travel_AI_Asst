import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import FlightsCard from './FlightsCard';
export default function FlightSlider({ contentArray }) {
    return (
        <>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full mt-4"
            >
                {contentArray.map((item) => (
                    <SwiperSlide key={item.offerId}>
                        <FlightsCard
                            Amount={item.total_amount}
                            Currency={item.total_currency}
                            DepartureFlightLogo={item.slices[0].departureFlightLogo}
                            DepartureTime={item.slices[0].departureTime}
                            DepartureCode={item.slices[0].origin_iata_code}
                            ArrivalTime={item.slices[0].arrivalTime}
                            ArrivalCode={item.slices[0].destination_iata_code}
                            ReturnDepartureFlightLogo={item.slices[1].departureFlightLogo}
                            ReturnDepartureTime={item.slices[1].departureTime}
                            ReturnArrivalTime={item.slices[1].arrivalTime}
                            ReturnDepartureCode={item.slices[1].origin_iata_code}
                            ReturnArrivalCode={item.slices[1].destination_iata_code}
                            DepartureAirport={item.slices[0].departureCity}
                            ReturnDepartureAirport={item.slices[1].departureCity}
                            Stops={item.slices[0].stops}
                            Returnstops={item.slices[1].stops}
                            DepartureDate={item.slices[0].departureDate}
                            ReturnDepartureDate={item.slices[1].departureDate}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
