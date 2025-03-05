import React from "react";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus, FaHistory } from "react-icons/fa";
import { FaMessage, FaQuestion } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";



const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[15px]  ">
      <div>
        <IoMenu onClick={()=>setShowSidebar(!showSidebar)} className="text-2xl block cursor-pointer" />
        <div className="mt-[10px] inline-flex items-center gap-[10px] px-[10px] py-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full">
          <FaPlus className="text-2xl" />
          {showSidebar && <p className="text-[17px]">New Chat</p>}
        </div>
        {showSidebar && <div className="flex flex-col">
          <p className="mt-7 mb-5">Recent</p>
          <div className="flex items-center gap-3 rounded-md p-2 pr-10 text-slate-700 cursor-pointer hover:bg-gray-300">
            <FaMessage className="text-2xl" />
            <p>What is Java?</p>
          </div>
        </div>}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-3 rounded-md p-2 pr-10 text-slate-700 cursor-pointer hover:bg-gray-300">
        <FaQuestion className="text-2xl"/>
        {showSidebar && <p>Help</p>}
        </div>
        <div className="flex items-center gap-3 rounded-md p-2 pr-10 text-slate-700 cursor-pointer hover:bg-gray-300">
        <FaHistory className="text-2xl"/>
        {showSidebar && <p>Activity</p>}
        </div>
        <div className="flex items-center gap-3 rounded-md p-2 pr-10 text-slate-700 cursor-pointer hover:bg-gray-300">
        <IoMdSettings className="text-2xl"/>
        {showSidebar && <p>Help</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
