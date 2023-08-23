import React, { useState, useEffect } from 'react';
import Image from '../Common/Image';

function Typing() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => prevDots.length < 3 ? prevDots + '.' : '');
    }, 500); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col w-full mt-8`}>
      <div className="self-start" style={{ Width: "30%" }}>
        <div className="flex items-start justify-center gap-2">
          <div className="bg-white rounded-full p-4">
            <div className="flex justify-center items-center">
              <Image src={"/Images/svgs/bot.svg"} alt={"bot_svg"} h={32} w={32} />
            </div>
          </div>

          <div>
            <p className="text-[#969696] font-medium text-[14px]">
              AI Travel Assistant
            </p>
            <div className="bg-[#FFFFFF] px-3 py-2 rounded-r-2xl rounded-bl-2xl typing-animation">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typing;
