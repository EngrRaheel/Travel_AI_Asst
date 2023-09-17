import { useState } from "react";
import Images from "../../Common/Image";
function LanguageOptions({ selectedLanguage, img, value, label, handleLanguageSelection }) {


    return (
        <div className="flex justify-center items-center rounded-2xl w-28 h-28 font-Urbanist">
            <button
                onClick={() => handleLanguageSelection(value)}
                className={`text-[14px] font-semibold bg-white px-6 py-2  rounded-full`} >
                {label}
            </button>
        </div>
    );
}

export default LanguageOptions