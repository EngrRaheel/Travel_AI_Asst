import React from 'react'
import Images from '../Common/Image'



function SearchOptItem({ name, img, icon, min_h, images }) {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md  font-Urbanist w-full">
                <div className='h-[120px]'>
                    <Images
                        src={images}
                        alt={"hotel"}
                        w={232} h={120}
                    />
                </div>
                <div className={`flex flex-col justify-between py-4 px-1 w-full  mx-auto   min-h-[${min_h}]`}>
                    <div className='w-full flex flex-col gap-4'>
                        <div className='flex flex-col justify-start items-start gap-2 px-3 font-Urbanist'>
                            <h2 className="text-[12px] font-semibold text-[#505050] font-Urbanist">{name}</h2>
                            <p className="text-[#828282] text-[12px] font-medium tracking-[0.5px] leading-4">Free cancellation</p>
                            <p className="text-[#828282] text-[12px] font-medium tracking-[0.5px] leading-4">Free cancellation</p>
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