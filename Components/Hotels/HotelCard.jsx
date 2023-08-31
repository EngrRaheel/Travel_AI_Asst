import Image from 'next/image'
import React from 'react'
import Images from '../Common/Image'
import Rating from '@mui/material/Rating';


function SearchOptItem({ name, img, icon, min_h, images, address, rating }) {
    return (
        <>
            <div className="bg-white rounded-2xl rounded-t-2xl shadow-md  font-Urbanist w-full mb-[20px] !pb-4 ">
                <div className='h-[120px] w-full relative'>
                    <Image src={images} fill alt='hotel_image' />
                </div>

                <div className='flex flex-col justify-between  px-1 w-full  mx-auto min_h_hotel py-2'>
                    <div className='w-full flex flex-col'>
                        <div className='flex flex-col justify-start items-start py-2 px-3 font-Urbanist'>
                            <div className='flex flex-col justify-start items-start'>
                                <h2 className="text-[14px] font-semibold text-[#505050] font-Urbanist">{name}</h2>
                                <div className='flex justify-start items-start '>
                                    <Rating defaultValue={rating} precision={0.5} readOnly />
                                </div>
                            </div>
                            <p className="text-[#828282] text-[12px] font-medium tracking-[0.5px] leading-4">
                                {address}
                            </p>
                        </div>
                    </div>


                </div>
                <div className='flex justify-center items-center gap-2 text-[12px] font-semibold font-Urbanist '>
                    <button className='w-[104px] py-2 bg-[#DDDDDD]  text-[black] rounded-[8px]'>
                        Share
                    </button>
                    <button className='w-[104px] py-2 bg-[#5BB08B]  text-white rounded-[8px]'>
                        View details
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchOptItem