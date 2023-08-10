import React from "react";

function LanguageOptions({ languageOptions, selectedLanguage, setSelectedLanguage, sendMessage, img }) {
    const handleLanguageSelection = (selectedValue) => {
        setSelectedLanguage(selectedValue);
        sendMessage(selectedValue);
    };

    return (
        <div className="flex">
            {languageOptions.map((option) => (
                <div
                    key={option.value}
                    className={`mr-2 ${selectedLanguage === option.value ? "bg-blue-500 text-white" : ""}`}
                >
                    <div className="rounded-lg p-2 bg-white border shadow-md w-28 h-28 ">
                        <img
                            src={img}
                            alt={`${option.label} Flag`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <button
                        onClick={() => handleLanguageSelection(option.value)}
                        className={`rounded-full py-1 px-3 mt-2 ${selectedLanguage === option.value ? "bg-blue-500 text-white" : ""}`}
                    >
                        {option.label}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default LanguageOptions