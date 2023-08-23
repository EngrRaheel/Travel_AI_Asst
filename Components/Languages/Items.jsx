import { useState } from "react";
import Images from "../Common/Image";
function  LanguageOptions({ selectedLanguage, img, value, label, handleLanguageSelection }) {


    return (
        <div className="flex bg-white justify-center items-center rounded-2xl w-28 h-28 font-Urbanist">
            <div className={`flex flex-col justify-center items-center gap-2 text-[#505050] ${selectedLanguage === `${value}` ? "bg-white" : ""}`} >
                <div className="flex justify-center items-center ">
                    <Images
                        src={img}
                        alt={`Flag_${value}`}
                      
                        h={40} w={40}
                    />
                </div>
                <button
                    onClick={() => handleLanguageSelection(value)}
                    className={`text-[14] font-semibold ${selectedLanguage === `${value}` ? "bg-white" : "bg-white"}`} >
                    {label}
                </button>
            </div>
        </div>
    );
}

export default LanguageOptions