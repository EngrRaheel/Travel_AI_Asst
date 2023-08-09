import React from 'react'
import Images from "./Image"
import { AiOutlineArrowLeft } from "react-icons/ai"

function Navbar() {
    return (
        <div className='w-full  mx-auto sticky top-0 '>
            <div className='flex justify-between items-center max-h-16  w-full mx-auto bg-[#F9F9F9] px-4 py-5'>
                <div className='flex justify-center'>
                    <AiOutlineArrowLeft size={30} color="black"/>
                </div>

                <div className='flex flex-col justify-center items-center w-1/2 font-Urbanist'>
                    <div className=' font-bold text-base text-[black]'>
                        IRU Travel Planner
                    </div>
                    <div className='text-sm'>
                       <span className='text-[#969696]'>By IRUTravel</span> | <span className='text-[#5BB08B]'>Privacy</span>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <Images src={"/Images/svgs/Union.svg"} alt={"fav_svg"} h={30} w={30} />
                </div>
            </div>
        </div>

    )
}

export default Navbar