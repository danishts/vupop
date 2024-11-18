// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import Logo from './assets/Logoo.png';


// const Sidebar = () => {
//   return (
//     <div className="hidden md:flex flex-col w-64 h-screen font-norwester bg-[#1B1B1C] shadow-md">
//       <div className="p-4 flex justify-center">
//         <img src={Logo} alt="Logo" className="w-24 h-14" />
//       </div>
//       <nav className="flex flex-col gap-4 p-4 flex-grow">
//         <Link to="/overview" className="flex items-center text-[#FFF528] text-2xl py-2 px-4 hover:bg-[#FFF5281A]">
//           <FaTachometerAlt className="mr-2" /> Overview
//         </Link>
//         <Link to="/userManagement" className="flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaDollarSign className="mr-2" /> User Management
//         </Link>
//         <Link to="/payouts" className="flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaDollarSign className="mr-2" /> Payout
//         </Link>
//       </nav>

//       <hr className="border-t border-[#FFF528] mx-4" />

//       <div className="flex flex-col p-4">
//         <Link to="/settings" className="flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaCog className="mr-2" /> Settings
//         </Link>
//         <Link to="/" className="flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaSignOutAlt className="mr-2" /> Logout
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;








// ya ok ha

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import Logo from './assets/Logoo.png';
// import HoverImage from './assets/rr.png'; // Import the hover image

// const Sidebar = () => {
//   return (
//     <div className="hidden md:flex flex-col w-64 h-screen font-norwester bg-[#1B1B1C] shadow-md">
//       <div className="p-4 flex justify-center">
//         <img src={Logo} alt="Logo" className="w-24 h-14" />
//       </div>
//       <nav className="flex flex-col gap-4 p-4 flex-grow">
//         {/* Sidebar Link with Hover Image */}
//         <Link to="/overview" className="group flex items-center text-[#FFF528] text-2xl py-2 px-4 hover:bg-[#FFF5281A]">
//           <FaTachometerAlt className="mr-2" /> Overview
//           <img
//             src={HoverImage}
//             alt="Hover Effect"
//             className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//         </Link>
        
//         {/* Repeat for each link */}
//         <Link to="/userManagement" className="group flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaDollarSign className="mr-2" /> User Management
//           <img
//             src={HoverImage}
//             alt="Hover Effect"
//             className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//         </Link>

//         <Link to="/payouts" className="group flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaDollarSign className="mr-2" /> Payout
//           <img
//             src={HoverImage}
//             alt="Hover Effect"
//             className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//         </Link>
//       </nav>

//       <hr className="border-t border-[#FFF528] mx-4" />

//       <div className="flex flex-col p-4">
//         <Link to="/settings" className="group flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaCog className="mr-2" /> Settings
//           <img
//             src={HoverImage}
//             alt="Hover Effect"
//             className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//         </Link>

//         <Link to="/" className="group flex items-center py-2 px-4 text-[#FFF528] text-2xl hover:bg-[#FFF5281A]">
//           <FaSignOutAlt className="mr-2" /> Logout
//           <img
//             src={HoverImage}
//             alt="Hover Effect"
//             className="ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;































// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import Logo from './assets/Logoo.png';
// import HoverImage from './assets/rr.png'; // Import the hover image

// const Sidebar = () => {
//   return (
//     <div className="hidden md:flex flex-col w-64 h-screen font-norwester bg-[#1B1B1C] shadow-md">
//       <div className="p-4 flex justify-center">
//         <img src={Logo} alt="Logo" className="w-[154px] h-[49px]" />
//       </div>
//       <nav className="flex flex-col gap-4 p-4 flex-grow">
//         {/* Sidebar Link with Hover Image at the Right Border */}
//         <Link to="/overview" className="group relative flex items-center text-[#FFF528] text-2xl py-2 px-2 ">
//           <FaTachometerAlt className="mr-2" /> Overview
//           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//           </span>
//         </Link>
        
//         <Link to="/userManagement" className="group relative flex items-center py-4 px-2 text-[#FFF528] text-2xl">
//           <FaDollarSign className="mr-2" /> Management
//           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//           </span>
//         </Link>

//         <Link to="/payouts" className="group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl">
//           <FaDollarSign className="mr-2" /> Payout
//           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//           </span>
//         </Link>
//       </nav>

//       <hr className="border-t border-[#FFF528] mx-4" />

//       <div className="flex flex-col p-4">
//         <Link to="/settings" className="group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl">
//           <FaCog className="mr-2" /> Settings
//           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//           </span>
//         </Link>

//         <Link to="/" className="group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ">
//           <FaSignOutAlt className="mr-2" /> Logout
//           <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//           </span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

























// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
// import Logo from './assets/Logoo.png';
// import HoverImage from './assets/rr.png'; // Import the hover image

// const Sidebar = () => {
//   const location = useLocation();

//   return (
//     <div className="hidden md:flex flex-col w-64 h-screen font-norwester bg-[#1B1B1C] shadow-md">
//       <div className="p-4 flex justify-center">
//         <img src={Logo} alt="Logo" className="w-[154px] h-[49px]" />
//       </div>
//       <nav className="flex flex-col gap-4 p-4 flex-grow">
//         {/* Sidebar Links */}
//         <Link
//           to="/overview"
//           className={`group relative flex items-center text-[#FFF528] text-2xl py-2 px-2 ${
//             location.pathname === '/overview' ? '' : ''
//           }`}
//         >
//           <FaTachometerAlt className="mr-2" /> Overview
//           {location.pathname === '/overview' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>

//         <Link
//           to="/userManagement"
//           className={`group relative flex items-center py-4 px-2 text-[#FFF528] text-2xl ${
//             location.pathname === '/userManagement' ? '' : ''
//           }`}
//         >
//           <FaDollarSign className="mr-2" /> User
//           {location.pathname === '/userManagement' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>

//         <Link
//           to="/payouts"
//           className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
//             location.pathname === '/payouts' ? '' : ''
//           }`}
//         >
//           <FaDollarSign className="mr-2" /> Payout
//           {location.pathname === '/payouts' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>
        
//         <Link
//           to="/BroadcasterCharges"
//           className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
//             location.pathname === '/payouts' ? '' : ''
//           }`}
//         >
//           <FaDollarSign className="mr-2" /> Broadcaster Charges
//           {location.pathname === '/payouts' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>
        
//       </nav>

//       <hr className="border-t border-[#FFF528] mx-4" />

//       <div className="flex flex-col p-4">
//         <Link
//           to="/settings"
//           className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
//             location.pathname === '/settings' ? '' : ''
//           }`}
//         >
//           <FaCog className="mr-2" /> Settings
//           {location.pathname === '/settings' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>

//         <Link
//           to="/"
//           className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
//             location.pathname === '/' ? '' : ''
//           }`}
//         >
//           <FaSignOutAlt className="mr-2" /> Logout
//           {location.pathname === '/' && (
//             <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
//               <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
//             </span>
//           )}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;








import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaDollarSign, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Logo from './assets/Logoo.png';
import HoverImage from './assets/rr.png'; // Import the hover image

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="hidden md:flex flex-col w-64 h-screen font-norwester bg-[#1B1B1C] shadow-md">
      <div className="p-4 flex justify-center">
        <img src={Logo} alt="Logo" className="w-[154px] h-[49px]" />
      </div>
      <nav className="flex flex-col gap-4 p-4 flex-grow">
        {/* Sidebar Links */}
        <Link
          to="/overview"
          className={`group relative flex items-center text-[#FFF528] text-2xl py-2 px-2 ${
            location.pathname === '/overview' ? '' : ''
          }`}
        >
          <FaTachometerAlt className="mr-2" /> Overview
          {location.pathname === '/overview' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>

        <Link
          to="/userManagement"
          className={`group relative flex items-center py-4 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/userManagement' ? '' : ''
          }`}
        >
          <FaDollarSign className="mr-2" /> User
          {location.pathname === '/userManagement' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>

        <Link
          to="/payouts"
          className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/payouts' ? 'font-bold' : ''
          }`}
        >
          <FaDollarSign className="mr-2" /> Payout
          {location.pathname === '/payouts' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>

        <Link
          to="/broadcasterCharges" // Update this path
          className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/broadcasterCharges' ? 'font-bold' : ''
          }`}
        >
          <FaDollarSign className="mr-2" /> Charge
          {location.pathname === '/broadcasterCharges' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>



        <Link
          to="/marketingasset" // Update this path
          className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/marketingasset' ? 'font-bold' : ''
          }`}
        >
          <FaDollarSign className="mr-2" /> Marketing
          {location.pathname === '/marketingasset' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>












        



        
        
      </nav>

      <hr className="border-t border-[#FFF528] mx-4" />

      <div className="flex flex-col p-4">
        

       
        
        
        <Link
          to="/settings"
          className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/settings' ? 'font-bold' : ''
          }`}
        >
          <FaCog className="mr-2" /> Settings
          {location.pathname === '/settings' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>

        <Link
          to="/logout"
          className={`group relative flex items-center py-2 px-2 text-[#FFF528] text-2xl ${
            location.pathname === '/' ? 'font-bold' : ''
          }`}
        >
          <FaSignOutAlt className="mr-2" /> Logout
          {location.pathname === '/' && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-300">
              <img src={HoverImage} alt="Hover Effect" className="w-8 h-8" />
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
