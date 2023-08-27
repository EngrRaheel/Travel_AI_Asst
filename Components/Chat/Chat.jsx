import { useRef, useEffect, useState } from "react";
import CityAutoComplete from "../Cityautocomplete/CityAutoComplete";
import Input from "./Input";
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

    const [contentArray, setContentArray] = useState([]);
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

            console.log("textt", responseMessage.text);

            if (responseMessage.text.includes("$")) {
                let [recipient, content] = responseMessage.text.split("$");
                console.log("recipient or content", recipient, content)
                setInputDisplay(recipient === "Location");
                if (recipient === "Flights Information") {
                    console.log("hello T", content)
                    content = content.replace(/"/g, ' ');
                    setContentArray(content);
                    // console.log("updated content", updatedContentArray);
                    // console.log("contentArray", contentArray);
                    return { recipient, content };
                } else {
                    return { recipient, content };
                }
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


            console.log("processed data", processedData);
            if (messagesContainerRef.current) {
                messagesContainerRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
            }
            setInput("")
            setCityName("");
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
                    contentArray={contentArray}

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
