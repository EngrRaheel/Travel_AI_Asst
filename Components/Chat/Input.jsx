import React from 'react';
import { BsSend } from 'react-icons/bs';

function Input({ input, setInput, sendMessage }) {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage(input);
        }
    };

    return (
        <div className="flex mt-4 w-full mx-auto">
            <div className="flex mx-auto w-full relative">
                <input
                    type="text"
                    value={input}
                    placeholder="Type message"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown} 
                    className="w-full px-4 py-6 outline-none"
                />
                <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-3">
                    <button
                        onClick={() => sendMessage(input)}
                        className="py-2 rounded-lg text-white px-6"
                    >
                        <BsSend size={28} color="#5BB08B" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;
