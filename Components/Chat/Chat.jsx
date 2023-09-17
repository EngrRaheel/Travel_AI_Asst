import { useRef, useEffect, useState, useMemo } from "react";
import CityAutoComplete from "../Cityautocomplete/CityAutoComplete";
import Input from "./Input";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { API_URL } from "../APIConfig/APIConfig";
import HotelSlider from "../Hotels/HotelSlider";

function Chat() {
    const [selectedLanguage, setSelectedLanguage] = useState("Speak in English");
    const [serviceOption, setServiceOption] = useState("");
    const [inputDisplay, setInputDisplay] = useState(false);

    const [cityName, setCityName] = useState("");
    const [botIsTyping, setBotIsTyping] = useState(false);  

    const [messages, setMessages] = useState([]);

    const [input, setInput] = useState("");

    const [cityInput, setCityInput] = useState("");

    const lastMessageRef = useRef(null);
    const messagesContainerRef = useRef(null);
    const [showSearchOptions, setShowSearchOptions] = useState(false);
    const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

    const [contentArray, setContentArray] = useState([]);
    const [contentHotel, setContentHotel] = useState([]);


    const [chatHeaderTime, setChatHeaderTime] = useState("");


    const handleUpdateDateRange = (newDateRange) => {
        setSelectedDateRange(newDateRange);
        sendMessage(newDateRange)
    };

    function getFormattedTime() {
        const getcurrentTime = new Date();
        const getformattedTime = getcurrentTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        });
        return getformattedTime;
    }

    // Call the function to get the formatted time
    const formattedTime = getFormattedTime();

    useEffect(() => {
        setChatHeaderTime(formattedTime);

    }, []);

    console.log("form", chatHeaderTime);
    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);




    const processResponseData = (data, botFormattedTime) => {
        console.log("data", data);
        if (data.length === 2) {
            if (data[0].text === "Flights Information") {

                let recipient = data[0].text;
                let content = data[1].custom;
                setContentArray(content);
                return [
                    { recipient, content, timestamp: botFormattedTime }
                ];
            }
            if (data[0].text === "Hotels Information") {

                let recipient = data[0].text;
                let content = data[1].custom;
                setContentHotel(content);
                return [
                    { recipient, content, timestamp: botFormattedTime }
                ];
            }
        } else {
            return data.map((responseMessage) => {
                if (responseMessage.text.includes("$")) {
                    let [recipient, content] = responseMessage.text.split("$");
                    setInputDisplay(recipient === "Location");
                    if (recipient === "Flights Information") {
                        console.log("Before", content);
                        content = content.replace(/"/g, '');
                        console.log("After", content);
                        setContentArray(content);
                        return { recipient, content, timestamp: botFormattedTime };
                    }
                    else if (recipient === "searchingflight") {
                        // console.log("Before", content);
                        // content = content.replace(/"/g, '');
                        // console.log("After", content);
                        // setContentArray(content);
                        setMessages("Send flight information");
                        return { recipient, content, timestamp: botFormattedTime };
                    }
                    else if (recipient === "searchinghotels") {
                        // console.log("Before", content);
                        // content = content.replace(/"/g, '');
                        // console.log("After", content);
                        // setContentArray(content);
                        setMessages("Send hotel information");
                        return { recipient, content, timestamp: botFormattedTime };
                    } else {
                        return { recipient, content, timestamp: botFormattedTime };
                    }
                } else {
                    return { content: responseMessage.text, timestamp: botFormattedTime };
                }
            });
        }
    };

    const sendMessage = async (message) => {
        if (!message) return;

        setBotIsTyping(true);
        const payload = { message };

        // Set user's message before API call
        setMessages([
            ...messages,
            { text: message, from: "user", timestamp: formattedTime },
        ]);
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            // console.log("data is here", data);
            const botFormattedTime = getFormattedTime();

            const processedData = processResponseData(data, botFormattedTime);

            console.log("prcessed data hon main", processedData);



            setBotIsTyping(false);
            setMessages((prevMessages) => [
                ...prevMessages,
                ...processedData,
            ]);

            console.log("messages", messages);
            // console.log("processed data", processedData);
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            }
            setInput("")
            setCityName("");
            setCityInput("")
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
                    chatHeaderTime={chatHeaderTime}
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
                    contentArray={contentArray}
                    contentHotel={contentHotel}

                />
            </div>

            {inputDisplay ? (
                <CityAutoComplete setCityName={setCityName} sendMessage={sendMessage} setCityInput={setCityInput} CityInput={cityInput} />
            ) : (
                <Input input={input} setInput={setInput} sendMessage={sendMessage} />
            )}
        </div>
    );
}

export default Chat;
