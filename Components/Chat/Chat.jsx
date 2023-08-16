import { useRef, useEffect, useState } from "react";
import Images from "../Common/Image";
import Image from "../Common/Image";
import Slider from "../Languages/Slider";
import SearchOptSlider from "../Searchoption/SearchOptSlider";
import Input from "./Input";


function Chat() {

    const [selectedLanguage, setSelectedLanguage] = useState("Speak in English");
    const [serviceOption, setServiceOption] = useState("")

    const handleLanguageSelection = (selectedValue) => {
        setSelectedLanguage(selectedValue);
        // console.log("selected langugae", selectedLanguage)
        sendMessage(selectedValue);
    };

    const handleOptSelection = (value) => {
        setServiceOption(value);
        sendMessage(value)
    }

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const lastMessageRef = useRef(null);


    //this is for he language component
    // const [languageComponent, setLanguageComponent] = useState(false)

    const [showSearchOptions, setShowSearchOptions] = useState(false);


    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);


    const sendMessage = async (message) => {
        if (!message) return;

        const payload = {
            message: message,
        };

        //api call here
        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });


        // current time
        const currentTime = new Date();
        const formattedTime = currentTime.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        const data = await response.json();
        setMessages([...messages, { text: message, from: "user", timestamp: formattedTime }, ...data,]);
        setInput("");


    };
    console.log(messages)

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <div className="w-full bg-[#EEEEEE] font-Urbanist ">

            <div className="flex flex-col px-2 py-6 w-full overflow-y-auto" >
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
                                    AI Travel Assistant •
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


                {/* Chat messages */}

                <div
                    className={`flex flex-col  w-full py-6  ${messages.length > 0 ? "h-[41vh]" : "h-[41vh]"
                        }`} >
                    {messages.map((message, index) => (

                        <div
                            key={index} className={`${message.from === "user" ? " self-end text-white" : " self-start "}`} >
                            {message.from !== "user" ? (
                                <>
                                    <div className="w-full max-w-[585px]  mx-auto " ref={index === messages.length - 1 ? lastMessageRef : null}>
                                        {message.text === "Hello! what are u looking for?" ?
                                            <> <div className="flex items-start justify-center gap-2 ">
                                                <div className=" bg-white rounded-full p-4 ">
                                                    <div className="flex justify-center items-center">
                                                        <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start items-start w-full ">

                                                    <p className="text-[#969696] font-medium text-[14px]">AI Travel Assistant • {message.timestamp} </p>

                                                    <div className="w-1/2 bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">{message.text}</div>
                                                </div>
                                            </div>
                                                <div className="mb-6 px-1">
                                                    <SearchOptSlider
                                                        setMessage={setMessages}
                                                        handleOptSelection={handleOptSelection}
                                                        setServiceOption={setServiceOption}
                                                    />
                                                </div>

                                            </> :
                                            <div className="flex items-start justify-center gap-2">
                                                <div className=" bg-white rounded-full p-4">
                                                    <div className="flex justify-center items-center">
                                                        <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-start items-start w-full ">
                                                    <p className="text-[#969696] font-medium text-[14px]">AI Travel Assistant • {message.timestamp}</p>

                                                    <div className="w-full bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">{message.text}</div>
                                                </div>
                                            </div>
                                        }
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
                </div>

            </div>

            {/* Input box */}
            <Input
                input={input}
                setInput={setInput} 
                sendMessage={sendMessage}/>
        </div>
    );
}

export default Chat;
