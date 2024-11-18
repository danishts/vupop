// import React from 'react';
// import {  FaBars } from 'react-icons/fa';
// import { GoBell } from "react-icons/go";

// const MenuBar = ({ toggleSidebar }) => {
//   return (
//     <div className="flex items-center h-24  font-norwester justify-between  p-4 bg-[#1B1B1C] shadow-md w-full">
//       <button onClick={toggleSidebar} className="md:hidden text-white p-2">
//         <FaBars className="text-xl" />
//       </button>
//       <div className="flex-grow text-center">
//         <span className="text-3xl  text-white font-bold">Admin</span>
//       </div>
//       <div className="relative flex items-center">
//         <GoBell  className=" text-[#FFF528] text-3xl" />
//         <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
//       </div>
//     </div>
//   );
// };

// export default MenuBar;





import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GoBell } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const MenuBar = ({ toggleSidebar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Toggle function for pop-up
  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  // Close function for close icon
  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  return (
    <div className="flex items-center h-24 font-norwester justify-between p-4 bg-[#1B1B1C] shadow-md w-full">
      <button onClick={toggleSidebar} className="md:hidden text-white p-2">
        <FaBars className="text-xl" />
      </button>
      <div className="flex-grow text-center">
        <span className="text-3xl text-white font-bold">Admin</span>
      </div>
      <div className="relative flex items-center">
        <GoBell 
          onClick={toggleNotification} 
          className="text-[#FFF528] text-3xl cursor-pointer" 
        />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
        
        {/* Notification pop-up */}
        {isNotificationOpen && (
          <div className="absolute right-0 h-44 mt-56 w-[500px] bg-black rounded shadow-lg p-4">
            <div>
              <div className='flex justify-between'>
                <p className="text-3xl font-semibold text-[#FFF528]">Notifications</p>
                <IoIosClose 
                  onClick={closeNotification} 
                  className='text-white text-4xl cursor-pointer' 
                />
              </div>
            </div>

            <ul className="flex justify-center text-2xl text-[#FFF528] mt-6">
              NO NOTIFICATION FOUND
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
