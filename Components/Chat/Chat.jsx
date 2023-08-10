import { useRef, useEffect, useState } from "react";
import Image from "../Common/Image";
import Slider from "../Languages/Slider"


function Chat() {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");


    const chatContainerRef = useRef();

    useEffect(() => {
        const initialResponse = "Please choose the language for the AI travel assistant.";

        setMessages([
            { text: initialResponse, from: "bot" },
        ]);
    }, []);

    useEffect(() => {

        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    const sendMessage = async (message) => {
        if (!message) return;

        const payload = {
            message: message,
        };

        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        setMessages([...messages, { text: message, from: "user" }, ...data]);
        setInput("");
    };

    const clearChat = () => {
        setMessages([]);
    };

    return (
        <div className="w-full bg-[#EEEEEE] font-Urbanist">


            {/* Chat messages */}
            <div
                className={`flex flex-col overflow-y-auto w-full p-6 ${messages.length > 0 ? "h-[calc(100vh-150px)]" : "h-[calc(100vh-100px)]"
                    }`}
                ref={chatContainerRef}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${message.from === "user"
                            ? "bg-[#385B66] self-end rounded-l-lg rounded-r px-6 mr-2"
                            : " self-start "
                            }`}
                        style={{ maxWidth: "50%" }}
                    >
                        {message.from === "user" ? (
                            message.text
                        ) : (
                            <div className="flex items-start justify-center gap-2">
                                <div className=" bg-white rounded-full p-4  ">
                                    <div className="flex justify-center items-center">
                                        <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[#969696] font-medium text-[14px]">AI Travel Assistant • 03:00 pm</p>
                                    <div className="bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl text-[16px] font-medium">
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <Slider />
            </div>


            {/* Input box */}
            <div className="flex mt-4 w-full mx-auto">
                <div className="flex mx-auto w-full relative">
                    <input
                        type="text"
                        value={input}
                        placeholder="Type message"
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full  px-4 py-6 "
                    />
                    <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-3">
                        <button onClick={() => sendMessage(input)} className="py-2 bg-blue rounded-lg">
                            Send
                        </button>
                        <button onClick={clearChat} className="px-1 py-2 bg-blue rounded-lg">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
