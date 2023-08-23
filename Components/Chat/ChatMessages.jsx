import React from 'react'
import Image from '../Common/Image'
import UserTyping from '../TypingAnimation/Typing'
import English from '../Searchoption/EnglishCard/EnSearchOptSlider'
import Arabic from '../Searchoption/ArabicCard/ArSearchOptSlider'
import Danish from '../Searchoption/DenishCard/DaSearchOptSlider'
import French from '../Searchoption/FrenchCard/FrSearchOptSlider'
import Hindi from '../Searchoption/HindiCard/HinSearchOptSlider'
import Italian from '../Searchoption/ItalianCard/ItaSearchOptSlider'
import Portuguese from '../Searchoption/PortugueseCard/PortSearchOptSlider'
import Spanish from '../Searchoption/SpanishCard/SpSearchOptSlider'
import Calender from '../Calender/Calender'


function ChatMessages({
    messages,
    botIsTyping,
    lastMessageRef,
    messagesContainerRef,
    setMessages,
    handleOptSelection,
    setServiceOption,
    handleUpdateDateRange,
    setSelectedDateRange,
    sendMessages,
}) {
    return (
        <div
            className={`flex flex-col  w-full py-6 my-4  ${messages.length > 0 ? "h-[41vh]" : "h-[41vh]"
                }`} >

            {messages.map((message, index) => (

                <div key={index} className={`${message.from === "user" ? " self-end text-white" : " self-start "}`} >
                    {message.from !== "user" ? (
                        <>
                            <div className="w-full max-w-[585px] mx-auto" ref={index === messages.length - 1 ? lastMessageRef : null}>
                                {message.text === "Something went wrong. Request failed with status code: 400" ?
                                    <>
                                        {message.tex}
                                    </> :

                                    message.recipient.includes("Greet") ?
                                        <>
                                            <React.Fragment key={index}>
                                                <div className="flex items-start justify-center gap-2">
                                                    <div className="bg-white rounded-full p-4">
                                                        <div className="flex justify-center items-center">
                                                            <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-start items-start w-full">
                                                        <p className="text-[#969696] font-medium text-[14px]">
                                                            AI Travel Assistant • {message.timestamp}
                                                        </p>
                                                        <div className="w-1/2 bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">
                                                            {message.content}
                                                        </div>
                                                    </div>
                                                </div>

                                            </React.Fragment>
                                            {message.recipient.split("-").map((lang, index) => (
                                                <div className="mb-6 px-1" key={index}>
                                                    {lang === "en" ? (
                                                        <English
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "fr" ? (
                                                        <French
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "ar" ? (
                                                        <Arabic
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "da" ? (
                                                        <Danish
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "hi" ? (
                                                        <Hindi
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "it" ? (
                                                        <Italian
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "pt" ? (
                                                        <Portuguese
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : lang === "es" ? (
                                                        <Spanish
                                                            setMessage={setMessages}
                                                            handleOptSelection={handleOptSelection}
                                                            setServiceOption={setServiceOption}
                                                        />
                                                    ) : null}
                                                </div>
                                            ))
                                            }
                                        </> :
                                        message.recipient === "Date" ? (
                                            <>
                                                <div className="max-w-[50%] bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">
                                                    <p>{message.content}</p>
                                                </div>
                                                <div>
                                                    <Calender
                                                        onUpdateDateRange={handleUpdateDateRange}
                                                        etSelectedDateRange={setSelectedDateRange}
                                                        setMessages={setMessages}
                                                        sendMessages={sendMessages}
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <div className="flex items-start justify-center gap-2">
                                                <div className="bg-white rounded-full p-4">
                                                    <div className="flex justify-center items-center">
                                                        <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start items-start w-full">
                                                    <p className="text-[#969696] font-medium text-[14px]">
                                                        AI Travel Assistant • {message.timestamp}
                                                    </p>
                                                    <div className="w-full bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">
                                                        {message.content}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                            </div>

                        </>
                    ) : (

                        <div className="flex flex-col items-end">
                            <div className="text-[14px] font-medium text-[#969696] pr-2 font-Urbanist">User • {message.timestamp}</div>
                            <div className="bg-[#385B66]  rounded-l-lg rounded-r px-4 py-2 mr-2">
                                {message.text}
                            </div>

                        </div>
                    )}
                </div>
            ))}
            {botIsTyping && <UserTyping />}
        </div>
    )
}

export default ChatMessages