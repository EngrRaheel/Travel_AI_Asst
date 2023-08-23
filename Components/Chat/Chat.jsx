import { useRef, useEffect, useState } from "react";
import Calender from "../Calender/Calender";
import CityAutoComplete from "../Cityautocomplete/CityAutoComplete";
import Images from "../Common/Image";
import Image from "../Common/Image";
import Slider from "../Languages/Slider";
import SearchOptSlider from "../Searchoption/EnglishCard/EnSearchOptSlider";
import Input from "./Input";
import UserTyping from "../TypingAnimation/Typing";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { API_URL } from "../APIConfig/APIConfig";

function Chat() {
    const [selectedLanguage, setSelectedLanguage] = useState("Speak in English");
    const [serviceOption, setServiceOption] = useState("");
    const [inputDisplay, setInputDisplay] = useState(false);
    const [cityName, setCityName] = useState("");
    const [botIsTyping, setBotIsTyping] = useState(false);

    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState("");
    const lastMessageRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const [showSearchOptions, setShowSearchOptions] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

    const handleUpdateDateRange = (newDateRange) => {
        setSelectedDateRange(newDateRange);
        sendMessage(newDateRange)
    };
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const processResponseData = (data) => {
        console.log("data", data);
        return data.map((responseMessage) => {
            if (responseMessage.text.includes(":") && responseMessage.text.includes("400")) {
                const [recipient, contents] = responseMessage.text.split(":");
                const content = recipient + contents
                return { recipient, content };
            } else if (responseMessage.text.includes(":")) {
                const [recipient, content] = responseMessage.text.split(":");
                setInputDisplay(recipient === "Location");
                return { recipient, content };
            } else {
                return { content: responseMessage.text };
            }
        });
    };

    const sendMessage = async (message) => {
        if (!message) return;

        setBotIsTyping(true);
        const payload = { message };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            const processedData = processResponseData(data);

            console.log("prcessed data hon main", processedData);



            setBotIsTyping(false);
            setMessages([
                ...messages,
                { text: message, from: "user", timestamp: formattedTime },
                ...processedData,
            ]);

            console.log("message", messages);
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            }
            setInput("");
        } catch (error) {
            console.error("Error sending message:", error);
            setBotIsTyping(false);
        }
    };

    const handleLanguageSelection = (selectedValue) => {
        setSelectedLanguage(selectedValue);
        sendMessage(selectedValue);
    };
    const handleOptSelection = (value) => {
        setServiceOption(value);
        sendMessage(value);
    };
    return (
        <div className="w-full bg-[#EEEEEE] font-Urbanist ">
            <div className="flex flex-col px-2 py-4 w-full overflow-y-auto">
                <ChatHeader
                    selectedLanguage={selectedLanguage}
                    formattedTime={formattedTime}
                    handleLanguageSelection={handleLanguageSelection}
                    setSelectedLanguage={setSelectedLanguage}
                    setMessage={setMessages}
                />

                <ChatMessages
                    messages={messages}
                    botIsTyping={botIsTyping}
                    formattedTime={formattedTime}
                    lastMessageRef={lastMessageRef}
                    messagesContainerRef={messagesContainerRef}
                    setMessages={setMessages}
                    handleOptSelection={handleOptSelection}
                    handleUpdateDateRange={handleUpdateDateRange}
                    setSelectedDateRange={setSelectedDateRange}

                />
            </div>
            {inputDisplay ? (
                <CityAutoComplete setCityName={setCityName} sendMessage={sendMessage} />
            ) : (
                <Input input={input} setInput={setInput} sendMessage={sendMessage} />
            )}
        </div>
    );
}

export default Chat;
