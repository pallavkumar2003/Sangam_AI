import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaCompass } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const MainContent = () => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl p-5 text-slate-700 ">
        <p className="font-bold">Gemini</p>
        <FaUserCircle />
      </div>
      <div className="max-w-[900px] mx-auto ">
        <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
          <p>
            <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
              Hello, Sher
            </span>
          </p>
          <p className="text-gray-400">How can i help you today?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Suggest top 10 web development courses
            </p>
            <FaCompass className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              What is loop in programming?
            </p>
            <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">How are you?</p>
            <FaMessage className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">What are you doing?</p>
            <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
            <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
                <input type="text" placeholder="Enter a prompt here..." className="flex-1 bg-transparent border-none outline-none p-2 text-lg" />
                <div className="flex gap-4 items-center"><MdAddPhotoAlternate className="text-2xl cursor-pointer"/><FaMicrophone className="text-2xl cursor-pointer" /><IoMdSend className="text-2xl cursor-pointer"/></div>
            </div>
            <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-500">
                Gemini may display your prompt to other users to help you get a response faster. 
            </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
