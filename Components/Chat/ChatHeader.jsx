import React from 'react'
import Slider from '../Languages/Slider'
import Image from '../Common/Image'

function ChatHeader({ selectedLanguage, chatHeaderTime, handleLanguageSelection, setSelectedLanguage, setMessages }) {
    return (
        <div className={`flex flex-col w-full"}`}  >
            <div className="self-start" style={{ maxWidth: "50%" }}>
                <div className="flex items-start justify-center gap-2">
                    <div className="bg-white rounded-full p-4">
                        <div className="flex justify-center items-center">
                            <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#969696] font-medium text-[14px]">
                            AI Travel Assistant • {chatHeaderTime}
                        </p>
                        <div className="bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">
                            Please choose the language for the AI travel assistant.
                        </div>
                    </div>
                </div>
            </div>

            <Slider
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                setMessage={setMessages}
                handleLanguageSelection={handleLanguageSelection}
            />

        </div>
    )
}

export default ChatHeader