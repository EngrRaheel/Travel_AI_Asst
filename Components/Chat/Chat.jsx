import { useRef, useEffect, useState } from "react";

function chat() {


    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatContainerRef = useRef();

    useEffect(() => {
        const delay = 1000; 
    
        const timer = setTimeout(() => {
          const initialResponse = "Welcome to the chat bot! How can I assist you?";
          setMessages([{ text: initialResponse, from: "bot" }]);
        }, delay);
    
        return () => clearTimeout(timer); 
      }, []);

    useEffect(() => {

        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }, [messages]);

    const sendMessage = async () => {
        if (!input) return;
        const response = await fetch(
            "http://localhost:5005/webhooks/rest/webhook",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            }
        );
        const data = await response.json();
        setMessages([...messages, { text: input, from: "user" }, ...data]);
        setInput("");
    };

    const clearChat = () => {
        setMessages([]);
    };


    return (
        <div className='w-full bg-[#EEEEEE]  '>
            <div className={`flex flex-col overflow-y-auto w-full p-6 ${messages.length > 0 ? "h-[calc(100vh-150px)]" : "h-[calc(100vh-100px)]"}`} ref={chatContainerRef}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`p-2 my-1  ${message.from === "user" ? "bg-[#385B66] self-end rounded-l-lg rounded-r px-6 mr-2" : "bg-[#FFFFFF] self-start rounded-r-2xl"
                            }`}
                        style={{ maxWidth: "70%" }}
                    >
                        {message.from === "user" ? (
                            message.text
                        ) : (
                            <div className="relative my-4">
                                <div className="absolute -top-12 -left-6 bg-white rounded-full p-2 ">
                                    <div className="w-8 h-8 flex justify-center items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-user"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M2 21c0-6.333 4.667-11 11-11s11 4.667 11 11" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-10">{message.text}</div>
                            </div>
                        )}
                    </div>
                ))}

            </div>
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
                        <button onClick={sendMessage} className="py-2 bg-blue rounded-lg">
                            Send
                        </button>
                        <button onClick={clearChat} className="px-1 py-2 bg-blue rounded-lg">
                            Clear
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default chat