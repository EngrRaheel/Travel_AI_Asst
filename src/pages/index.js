
import { useRef, useEffect, useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef();


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
    <div className="max-w-xl mx-auto bg-gray-100 p-2 rounded-md shadow flex flex-col justify-center items-center max-h-[500px] mt-8">
      <div className=" overflow-y-auto w-full" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded ${
              message.from === "user" ? "bg-blue-300" : "bg-[gray]"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4 w-full mx-auto">
        <div className="flex mx-auto w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className=" border px-2 mr-2 focus:outline-[gray] rounded-lg w-full"
          />
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 rounded-lg"
            >
              Send
            </button>
            <button
              onClick={clearChat}
              className="px-4 py-2 bg-blue-500 rounded-lg"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
