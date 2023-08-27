import { useState } from 'react';
import { Group, Text, Title, UnstyledButton, Indicator } from '@mantine/core';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { DatePicker } from '@mantine/dates';


const CampaignDuration = ({ onUpdateDateRange, setMessages, sendMessage }) => {

    const handleDateRangeChange = (newDateRange) => {



        const startDate = newDateRange[0] ? newDateRange[0].toLocaleDateString("en-GB") : '';
        const endDate = newDateRange[1] ? newDateRange[1].toLocaleDateString('en-GB') : '';
        // const message = `${startDate}`;

        const formattedStartDate = startDate ? formatDate(startDate) : '';
        const formattedEndDate = endDate ? formatDate(endDate) : '';

        const message = `${formattedStartDate}`;

        function formatDate(dateString) {
            const parts = dateString.split('/');
            return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        }


        onUpdateDateRange(message);



    };
    return (
        <div className="w-full bg-[#eeeeee] my-4 flex flex-col  justify-center items-center rounded-[16px] relative font-Urbanist">
            <div className="">
                <div className='flex font-Urbanist'>
                    <DatePicker
                        classNames={{ calendar: 'py-4 px-3' }}
                        styles={() => ({
                            calendar: {
                                '& [data-first-in-range]': {
                                    borderRadius: '8px !important',
                                    backgroundColor: '#5BB08B !important',
                                    color: '#ffffff !important',
                                },
                                '& [data-last-in-range]': {
                                    borderRadius: '8px !important',
                                    backgroundColor: '#5BB08B !important',
                                    color: '#ffffff !important',
                                },
                                '& td button': {
                                    fontSize: '1rem',
                                    color: '#4B465C',
                                },
                                '& th': {
                                    fontSize: '10px',
                                    color: '#505050',
                                    fontWeight: 400,
                                    lineHeight: "16px",
                                    letterSpacing: "0.5px",

                                },
                            },
                            monthLevel: {
                                '& button': { color: '#4B465C', fontSize: '16px', fontWeight: 700 },
                                '& button svg': {
                                    width: '1.5rem',
                                    height: '1.5rem',
                                },
                            },
                        })}
                        type="range"
                        numberOfColumns={2}
                        columngap={16}
                        onChange={handleDateRangeChange}

                    />
                </div>
            </div>

        </div>
    );
};

export default CampaignDuration;
