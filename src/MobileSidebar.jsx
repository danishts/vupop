import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Logo from './assets/Logoo.png'; // Adjust the path if needed

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div className='font-norwester'>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#1B1B1C] shadow-lg z-50 transition-transform transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div className="flex justify-center p-4">
            <img src={Logo} alt="Logo" className="w-24 h-auto" /> {/* Adjust width as needed */}
          </div>
          
          <nav className="flex flex-col gap-4 mt-4">
            <Link 
              to="/overview" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaTachometerAlt className="mr-2" /> Overview
            </Link>
            
            <Link 
              to="/userManagement" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaDollarSign className="mr-2" /> User Management
            </Link>
            
            <Link 
              to="/payouts" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaDollarSign className="mr-2" /> Payout
            </Link>
            

            



               {/* <Link
          to="/broadcasterCharges" 
        
             className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" >
          <FaDollarSign className="mr-2" /> Charge
          {location.pathname === '/broadcasterCharges' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              
            </span>
          )}
        </Link> */}

            <Link 
              to="/broadcasterCharges" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaCog className="mr-2" /> Charges
            </Link> 
            <Link 
              to="/settings" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaCog className="mr-2" /> Settings
            </Link>
          </nav>
        
          <div className="px-4 pb-4">
            <Link 
              to="/" 
              className="flex items-center py-2.5 px-4 text-[#FFF528] rounded hover:text-[#007744] hover:bg-[#0077441A]" 
              onClick={toggleSidebar}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
