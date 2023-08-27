import React from 'react';
import Image from '../Common/Image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function FlightsCard({ Amount, Currency, DepartureFlightLogo, DepartureTime, DepartureCode, ArrivalTime, ArrivalCode, ReturnDepartureFlightLogo, ReturnDepartureTime, ReturnArrivalTime, ReturnDepartureCode, ReturnArrivalCode, DepartureAirport, ReturnDepartureAirport, Stops, Returnstops, DepartureDate, ReturnDepartureDate }) {

    const [hour, minute] = DepartureTime.split(':').slice(0, 2);
    const [hour1, minute1] = ArrivalTime.split(':').slice(0, 2);
    const [hour2, minute2] = ReturnDepartureTime.split(':').slice(0, 2);
    const [hour3, minute3] = ReturnArrivalTime.split(':').slice(0, 2);

    const extractCityName = (airportName) => {
        const airportParts = airportName.split(' ');
        return airportParts.slice(0, -2).join(' '); // Exclude 'International' and 'Airport'
      };

      
  const departureCity = extractCityName(DepartureAirport);
  const returnDepartureCity = extractCityName(ReturnDepartureAirport);
    return (
        <div className='flex flex-col max-w-[260px] font-Urbanist bg-[#E1E1E1] rounded-lg  mt-4 w-full pt-4'>
            <div className='flex flex-col justify-center items-center  w-full px-3'>
                <div className='flex justify-between items-center w-full text-[12px] font-semibold text-[#505050] mb-2'>
                    <p>CHEAPEST</p>
                    <p className='text-[14px]'><span>{Currency}</span> <span>{Amount}</span></p>
                </div>
                <div className='bg-white relative py-4 px-4 rounded'>
                    <div className='w-full flex justify-center items-center gap-4'>
                        <span className="circle left-half"></span>
                        <div className="flex justify-center items-center">
                            <Image src={DepartureFlightLogo} alt={"flight_svg"} h={20} w={20} />
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[12px] font-Urbanist font-semibold'>{hour}:{minute}</p>
                                <p className='text-[12px] font-Urbanist font-medium'>{DepartureCode}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image src={"/Images/flightsCardicon/flightRoute.svg"} alt={"bot_svg"} h={16} w={56} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[12px] font-Urbanist font-semibold'>{hour1}:{minute1}</p>
                                <p className='text-[12px] font-Urbanist font-medium'>{ArrivalCode}</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full flex justify-center items-center gap-4'>
                        <span className="circle right-half"></span>
                        <div className="flex justify-center items-center">
                            <Image src={ReturnDepartureFlightLogo} alt={"fligt_svg"} h={20} w={20} />
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[12px] font-Urbanist font-semibold'>{hour2}:{minute2}</p>
                                <p className='text-[12px] font-Urbanist font-medium'>{ReturnDepartureCode}</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <Image src={"/Images/flightsCardicon/flightRoute.svg"} alt={"bot_svg"} h={16} w={56} />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <p className='text-[12px] font-Urbanist font-semibold'>{hour3}:{minute3}</p>
                                <p className='text-[12px] font-Urbanist font-medium'>{ReturnArrivalCode}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex flex-col justify-center items-center px-3 pt-2 pb-6 w-full gap-2 bg-white  rounded-b-lg'>
                <div className='flex justify-start items-start w-full'>
                    <p className='text-[12px] text-[#505050] font-semibold font-Urbanist'>{departureCity} to {returnDepartureCity} {Currency} {Amount}</p>
                </div>
                <div className='flex flex-col items-start justify-start text-[#969696] font-medium text-[12px]'>
                    <div className='flex justify-start  items-center gap-2'>
                        <AiOutlineArrowRight className="mr-1" />
                        <p className='text-[12px] font-medium font-Urbanist'>{DepartureDate}, {hour}:{minute} • 25h ({Stops})</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <AiOutlineArrowLeft className="mr-1" />
                        <p className='text-[12px] font-medium font-Urbanist'>{ReturnDepartureDate}, {hour2}:{minute2} • 25h ({Returnstops})</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 text-[12px] font-semibold '>
                    <button className='w-[104px] py-2 bg-[#DDDDDD] rounded text-[black]'>
                        Share
                    </button>
                    <button className='w-[104px] py-2 bg-[#5BB08B] rounded text-white'>
                        View details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FlightsCard;
