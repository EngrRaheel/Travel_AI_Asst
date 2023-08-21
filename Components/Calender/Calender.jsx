import { useState } from 'react';

import { Group, Text, Title, UnstyledButton, Indicator } from '@mantine/core';
import { RxCross2 } from 'react-icons/rx';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { DatePicker } from '@mantine/dates';
// import ButtonWithIcon from '../shared/Button/ButtonWithIcon';
// import { useCampaignContext } from '../../Context/CompaignContext';

const CampaignDuration = ({  }) => {

    const [value, setValue] = useState([null, null])
    const handlevalue = (value) => {
        setValue()
        console.log(value)
    }
    return (
        <div className="w-full bg-[#eeeeee] my-4 flex flex-col  justify-center items-center rounded-[16px] relative font-Urbanist">
            <div className="">
                <div className='flex font-Urbanist'>
                    <DatePicker
                        classNames={{ calendar: 'p-6' }}
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
                        onChange={handlevalue}

                    />
                </div>
            </div>

        </div>
    );
};

export default CampaignDuration;
