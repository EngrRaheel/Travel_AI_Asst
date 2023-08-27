import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import FlightsCard from './FlightsCard';

// APIData = [{
//     Amount: "465.76",
//     Currency: "EUR",
//     DepartureFlightLogo: "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg",
//     DepartureAirport: "London City Airport",
//     DepartureCountry: "GB",
//     DepartureCode: "LCY",
//     DepartureTime: "09:25:00",
//     DepartureDate: "2023-09-09",
//     ArrivalAirport: "Dubai International Airport",
//     ArrivalCountry: "AE",
//     ArrivalCode: "DXB",
//     ArrivalTime: "20:55:00",
//     ArrivalDate: "2023-09-09",
//     Stops: "1",
//     ReturnDepartureFlightLogo: "https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg",
//     ReturnDepartureAirport: "Dubai International Airport",
//     ReturnDepartureCountry: "AE",
//     ReturnDepartureCode: "DXB",
//     ReturnDepartureTime: "01:15:00",
//     ReturnDepartureDate: "2023-09-16",
//     ReturnArrivalAirport: "London City Airport",
//     ReturnArrivalCountry: "GB",
//     ReturnArrivalCode: "LCY",
//     ReturnArrivalTime: "08:50:00",
//     ReturnArrivalDate: "2023-09-16",
//     ReturnStops: "1"
// }]

// [{ Amount: '465.76', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '09:25:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '20:55:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '01:15:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '08:50:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '675.76', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '09:25:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '20:55:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/LX.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '01:15:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '11:40:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '733.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '08:40:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '08:10:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '733.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '10:00:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '08:10:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '786.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '10:00:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '11:40:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '786.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '10:00:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '09:25:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '786.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '08:40:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '11:40:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '786.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '08:40:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '09:25:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '809.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '08:40:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '08:10:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }, { Amount: '809.24', Currency: 'EUR', DepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', DepartureAirport: 'London City Airport', DepartureCountry: 'GB', DepartureCode: 'LCY', DepartureTime: '10:00:00', DepartureDate: '2023-09-09', ArrivalAirport: 'Dubai International Airport', ArrivalCountry: 'AE', ArrivalCode: 'DXB', ArrivalTime: '23:05:00', ArrivalDate: '2023-09-09', Stops: '1' , ReturnDepartureFlightLogo: 'https://assets.duffel.com/img/airlines/for-light-background/full-color-logo/KL.svg', ReturnDepartureAirport:'Dubai International Airport', ReturnDepartureCountry: 'AE', ReturnDepartureCode:'DXB', ReturnDepartureTime: '00:55:00', ReturnDepartureDate: '2023-09-16', ReturnArrivalAirport: 'London City Airport', ReturnArrivalCountry: 'GB',ReturnArrivalCode: 'LCY', ReturnArrivalTime: '08:10:00', ReturnArrivalDate: '2023-09-16', Returnstops: '1' }]
export default function FlightSlider({ contentArray }) {

    let APIData = contentArray
    const arrayType = typeof APIData;
    // const parsedArray = JSON.parse(contentArray);
    return (
        <>
            <p>{APIData}</p>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper w-full mt-4"
            >

                {[].map((item) => (
                    <SwiperSlide key={item.Amount} >
                        <FlightsCard
                            Amount={item.Amount}
                            Currency={item.Currency}
                            DepartureFlightLogo={item.DepartureFlightLogo}
                            DepartureTime={item.DepartureTime}
                            DepartureCode={item.DepartureCode}
                            ArrivalTime={item.ArrivalTime}
                            ArrivalCode={item.ArrivalCode}
                            ReturnDepartureFlightLogo={item.ReturnDepartureFlightLogo}
                            ReturnDepartureTime={item.ReturnDepartureTime}
                            ReturnArrivalTime={item.ReturnArrivalTime}
                            ReturnDepartureCode={item.ReturnDepartureCode}
                            ReturnArrivalCode={item.ReturnArrivalCode}
                            DepartureAirport={item.DepartureAirport}
                            ReturnDepartureAirport={item.ReturnDepartureAirport}
                            Stops={item.Stops}
                            Returnstops={item.Returnstops}
                            DepartureDate={item.DepartureDate}
                            ReturnDepartureDate={item.ReturnDepartureDate}
                        />

                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    );
}

