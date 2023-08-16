import React from 'react'

function Input({ input, setInput, sendMessage }) {
    return (
        <div div className="flex mt-4 w-full mx-auto" >
            <div className="flex mx-auto w-full relative">
                <input
                    type="text"
                    value={input}
                    placeholder="Type message"
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full  px-4 py-6 "
                />
                <div className="absolute right-0 top-0 h-full flex justify-center items-center gap-3">
                    <button onClick={() => sendMessage(input)} className="py-2 bg-blue rounded-lg text-white px-2">
                        Send
                    </button>
                    {/* <button onClick={clearChat} className="px-1 py-2 bg-blue rounded-lg">
                Clear
            </button> */}
                </div>
            </div>
        </div>
    )
}

export default Input