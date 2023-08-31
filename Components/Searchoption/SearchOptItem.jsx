import React from 'react'
import Images from '../Common/Image'



function SearchOptItem({ img, icon, title, para, searchbtn, handleOptSelection, btnMessage, min_h }) {
    return (
        <>
            <div className="bg-white rounded-2xl shadow-md  font-Urbanist w-full mb-[20px]">
                <div className='h-[120px]'>
                    <Images
                        src={img}
                        alt={"Flight"}
                        w={232} h={120}
                    />
                </div>
                <div className={`flex flex-col justify-between py-4 px-3 w-full  mx-auto min-h-opt`}>
                    <div className='w-full flex flex-col gap-4 '>
                        <div className="flex justify-start items-center gap-2">
                            <Images
                                src={icon}
                                alt={"fligt_icon"}
                                w={20}
                                h={20}
                            />
                            <h2 className="text-base font-semibold text-[#505050]">{title}</h2>
                        </div>
                        <p className="text-[#828282] text-[12px] font-medium tracking-[0.5px] leading-4 mb-2">{para}</p>
                    </div>
                    <div className='mt-auto w-full'>
                        <button
                            onClick={() => handleOptSelection(btnMessage)}
                            className="py-[4px] w-full bg-[#5BB08B] text-white font-semibold rounded-md text-[12px]">{searchbtn}</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SearchOptItem