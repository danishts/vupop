

// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoMdCloseCircle } from "react-icons/io";
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// function UserManagement() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 5;

//   // State to manage user data and search input
//   const [users, setUsers] = useState([
//     { name: '[Creator Name]', email: 'abc@gmail.com', joiningDate: '11/04/2020' },
//   ]);
//   const [searchInput, setSearchInput] = useState('');
//   const [newUser, setNewUser] = useState({ name: '', email: '', joiningDate: '' });
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   // Function to handle adding a new user
//   const handleAddUser = () => {
//     if (newUser.name && newUser.email && newUser.joiningDate) {
//       setUsers([...users, newUser]);
//       setNewUser({ name: '', email: '', joiningDate: '' }); // Reset the form
//       setIsFormOpen(false); // Close the form after adding user
//     }
//   };

//   // Filter users based on search input
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   // Generate page numbers
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className="bg-black flex flex-col h-screen overflow-auto">
//       {/* Top Section with Stats */}
//       <div className="flex flex-wrap mt-14 px-4 md:px-7 gap-4 justify-center md:justify-start">
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Community Users</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Editors</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Broadcasters</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//       </div>

//       {/* Manage Users Heading */}
//       <div className="text-center md:text-left text-2xl md:text-3xl px-4 md:px-6 mt-9">
//         <h1 className="text-white font-semibold">Manage Users</h1>
//       </div>

//       {/* Search Bar and Filter Options */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 px-4 md:px-6">
//         <div className="flex items-center gap-4 w-full md:w-auto">
//           <div className="relative h-[44px] w-full sm:w-[259px]">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchInput}
//               onChange={handleSearchChange}
//               className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white"
//             />
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           </div>

//           {/* Sort Button */}
//           <div className="flex justify-center items-center rounded-lg h-[44px] w-[157px] bg-[#1B1B1C] text-white">
//             Sort by
//           </div>
//         </div>

//         {/* Filter Options */}
//         <div className="flex flex-wrap gap-0 mt-2 md:mt-0 items-center">
//           <div className="h-[44px] w-[64px] flex justify-center items-center bg-[#FFF528] rounded-lg">
//             ALL
//           </div>
//           <div className="flex justify-center items-center w-[151px] h-[44px] text-[#FFF528]">
//             Community Users
//           </div>
//           <div className="flex justify-center items-center w-[151px] h-[44px] text-[#FFF528]">
//             Broadcaster
//           </div>
//         </div>

//         {/* Add User Button */}
//         <div className="flex justify-center items-center rounded-lg h-[44px] w-[112px] bg-[#FFF528] mt-2 md:mt-0 cursor-pointer" onClick={() => setIsFormOpen(true)}>
//           Add User
//         </div>
//       </div>

//       {/* User Add Form */}
//       {isFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-[#1b1b1c] rounded-lg shadow-lg p-6 w-[400px] relative">
//             <div className='flex justify-between '>
//               <div className='flex justify-center w-72 items-center '>
//                 <h2 className="text-xl text-white font-semibold mb-4">ADD USER</h2>
//               </div>
//               <div className='flex justify-end'>
//                 <h2 className='text-3xl text-[#FFF528]' onClick={() => setIsFormOpen(false)}><IoMdCloseCircle /></h2>
//               </div>
//             </div>
//             <label className='text-white'> Name</label>
//             <input
//               type="text"
//               placeholder="Type User Name"
//               value={newUser.name}
//               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <label className='text-white'>Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               value={newUser.email}
//               onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <label className='text-white'>Joining Date</label>
//             <input
//               type="text"
//               placeholder="Joining Date"
//               value={newUser.joiningDate}
//               onChange={(e) => setNewUser({ ...newUser, joiningDate: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <div className="flex justify-center mt-4">
//               <button onClick={handleAddUser} className="bg-[#494949] w-[258px] h-[48px] text-white px-4 py-2 font-bold rounded-lg mr-2">Add</button>
//               <button onClick={() => setIsFormOpen(false)} className="bg-[#fcf527] h-[48px] w-[258px] text-black font-bold px-4 py-2 rounded-lg">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Table Section */}
//       <div className="mt-8 px-4 md:px-6">
//         <table className="min-w-full bg-[#1b1b1c] text-white">
//           <thead>
//             <tr>
//               <th className="text-left p-4">Name</th>
//               <th className="text-left p-4">Email</th>
//               <th className="text-left p-4">Joining Date</th>
//               <th className="text-left p-4">ACTION</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td className="p-4">
//                   <div>{user.name}</div>
//                 </td>
//                 <td className="p-4">
//                   <div>{user.email}</div>
//                 </td>
//                 <td className="p-4">
//                   <div>{user.joiningDate}</div>
//                 </td>
//                 <td className="p-4">
//                   <div className="flex space-x-2">
//                     <u className='text-[#FFF528]' >REMOVE</u>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 flex justify-center items-center  text-[#fcf527]  rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2  ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : ' text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527]  flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           Next <IoIosArrowForward />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserManagement;


















































































// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoMdCloseCircle } from "react-icons/io";
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// function UserManagement() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 5;

//   // State to manage user data, search input, and filter buttons
//   const [users, setUsers] = useState([
//     { name: '[Creator Name]', email: 'abc@gmail.com', joiningDate: '11/04/2020' },
//   ]);
//   const [searchInput, setSearchInput] = useState('');
//   const [newUser, setNewUser] = useState({ name: '', email: '', joiningDate: '' });
//   const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
//   const [activeFilter, setActiveFilter] = useState('ALL'); // State for active filter

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   // Function to handle adding a new user
//   const handleAddUser = () => {
//     if (newUser.name && newUser.email && newUser.joiningDate) {
//       setUsers([...users, newUser]);
//       setNewUser({ name: '', email: '', joiningDate: '' }); // Reset the form
//       setIsFormOpen(false); // Close the form after adding user
//     }
//   };

//   // Function to change the active filter
//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   // Filter users based on search input
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   // Generate page numbers
//   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

//   const [isSortOpen, setIsSortOpen] = useState(false);
//   return (
//     <div className="bg-black flex flex-col h-screen overflow-auto">
//       {/* Top Section with Stats */}
//       <div className="flex flex-wrap mt-14 px-4 md:px-7 gap-4 justify-center md:justify-start">
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Community Users</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Editors</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//         <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-lg md:text-2xl font-semibold">Total Broadcasters</h1>
//           <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
//         </div>
//       </div>

//       {/* Manage Users Heading */}
//       <div className="text-center md:text-left text-2xl md:text-3xl px-4 md:px-6 mt-9">
//         <h1 className="text-white font-semibold">Manage Users</h1>
//       </div>

//       {/* Search Bar and Filter Options */}
//       <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 px-4 md:px-6">
//         <div className="flex items-center gap-4 w-full md:w-auto">
//           <div className="relative h-[44px] w-full sm:w-[259px]">
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchInput}
//               onChange={handleSearchChange}
//               className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white"
//             />
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//           </div>

//           {/* Sort Button */}
//           {/* <div
//             className={`flex justify-center items-center rounded-lg h-[44px] w-[157px] cursor-pointer ${
//               activeFilter === 'SORT' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
//             }`}
//             onClick={() => handleFilterClick('SORT')}
//           >
//             <select className=' flex justify-center items-center rounded-lg h-[44px] w-[157px] '>
//                <option value="">Select</option>
//   <option value="1">1</option>
//   <option value="2">2</option>
// </select>
//               */}
//           <div
//   className={`flex justify-center items-center rounded-lg h-[44px] w-[157px] cursor-pointer ${
//     activeFilter === 'SORT' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
//   }`}
//   onClick={() => setIsSortOpen(!isSortOpen)} // Toggle dropdown visibility on click
// >
//   Sort By
//   {isSortOpen && (
//     <div className="absolute mt-2 w-[157px] bg-[#1B1B1C] rounded-lg shadow-lg">
//       <div className="px-4 py-2 text-white cursor-pointer hover:bg-[#fcf527] hover:text-black"
//         onClick={() => {
//           setActiveFilter('1');
//           setIsSortOpen(false);
//         }}
//       >
//         Option 1
//       </div>
//       <div className="px-4 py-2 text-white cursor-pointer hover:bg-[#fcf527] hover:text-black"
//         onClick={() => {
//           setActiveFilter('2');
//           setIsSortOpen(false);
//         }}
//       >
//         Option 2
//       </div>
//     </div>
//   )}
//           </div>
//         </div>

//         {/* Filter Options */}
//         <div className="flex flex-wrap gap-2 mt-2 md:mt-0 items-center">
//           <div
//             className={`h-[44px] w-[64px] flex justify-center items-center rounded-lg cursor-pointer ${
//               activeFilter === 'ALL' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
//             }`}
//             onClick={() => handleFilterClick('ALL')}
//           >
//             ALL
//           </div>
//           <div
//             className={`flex justify-center items-center w-[151px] rounded-lg h-[44px] cursor-pointer ${
//               activeFilter === 'Community Users' ?  'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
//             }`}
//             onClick={() => handleFilterClick('Community Users')}
//           >
//             Community Users
//           </div>
//           <div
//             className={`flex justify-center items-center rounded-lg w-[151px] h-[44px] cursor-pointer ${
//               activeFilter === 'Broadcaster' ?  'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
//             }`}
//             onClick={() => handleFilterClick('Broadcaster')}
//           >
//             Broadcaster
//           </div>
//         </div>

//         {/* Add User Button */}
//         <div
//           className="flex justify-center items-center rounded-lg h-[44px] w-[112px] bg-[#FFF528] mt-2 md:mt-0 cursor-pointer"
//           onClick={() => setIsFormOpen(true)}
//         >
//           Add User
//         </div>
//       </div>

//       {/* User Add Form */}
//       {isFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-[#1b1b1c] rounded-lg shadow-lg p-6 w-[400px] relative">
//             <div className="flex justify-between">
//               <h2 className="text-xl text-white font-semibold mb-4">ADD USER</h2>
//               <IoMdCloseCircle className="text-3xl text-[#FFF528] cursor-pointer" onClick={() => setIsFormOpen(false)} />
//             </div>
//             <label className="text-white">Name</label>
//             <input
//               type="text"
//               placeholder="Type User Name"
//               value={newUser.name}
//               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <label className="text-white">Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               value={newUser.email}
//               onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <label className="text-white">Joining Date</label>
//             <input
//               type="text"
//               placeholder="Joining Date"
//               value={newUser.joiningDate}
//               onChange={(e) => setNewUser({ ...newUser, joiningDate: e.target.value })}
//               className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
//             />
//             <div className="flex justify-center mt-4 space-x-2">
//               <button onClick={handleAddUser} className="bg-[#494949] w-[258px] h-[48px] text-white font-bold rounded-lg">Add</button>
//               <button onClick={() => setIsFormOpen(false)} className="bg-[#fcf527] h-[48px] w-[258px] text-black font-bold rounded-lg">Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}

      
      


//         {/* Table Section */}
//       <div className="mt-8 px-4 md:px-6">
//          <table className="min-w-full bg-[#1b1b1c] text-white">

//            <thead>
//              <tr>
//                <th className="text-left p-4">Name</th>
//                <th className="text-left p-4">Email</th>
//                <th className="text-left p-4">Joining Date</th>
//                <th className="text-left p-4">ACTION</th>
//              </tr>
//            </thead>
//            <tbody>
//              {filteredUsers.map((user, index) => (
//                <tr key={index}>
//                  <td className="p-4">
//                    <div>{user.name}</div>
//                  </td>
//                  <td className="p-4">
//                   <div>{user.email}</div>
//                  </td>
//                  <td className="p-4">
//                    <div>{user.joiningDate}</div>
//                  </td>
//                  <td className="p-4">
//                    <div className="flex space-x-2">
//                      <u className='text-[#FFF528]' >REMOVE</u>
//                    </div>
//                  </td>
//                </tr>
//              ))}
//            </tbody>
//          </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-end mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 flex justify-center items-center  text-[#fcf527]  rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2  ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : ' text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527]  flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           Next <IoIosArrowForward />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserManagement;




















import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [sortOption, setSortOption] = useState(''); // State for selected sort option

  // State to manage user data, search input, and filter buttons
  const [users, setUsers] = useState([
    { name: '[Creator Name]', email: 'abc@gmail.com', joiningDate: '11/04/2020' },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [newUser, setNewUser] = useState({ name: '', email: '', joiningDate: '' });
  const [isFormOpen, setIsFormOpen] = useState(false); // State to manage form visibility
  const [activeFilter, setActiveFilter] = useState('ALL'); // State for active filter

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Function to handle adding a new user
  const handleAddUser = () => {
    if (newUser.name && newUser.email && newUser.joiningDate) {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '', joiningDate: '' }); // Reset the form
      setIsFormOpen(false); // Close the form after adding user
    }
  };

  // Form ko manage karne ke liye state
const [isFormVisible, setFormVisible] = useState(true);

// Close karne ka function
const handleCloseForm = () => {
  setFormVisible(false);
};

  // Function to change the active filter
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter users based on search input
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Generate page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);



  
  return (
    <div className="bg-black flex flex-col h-screen overflow-auto">
      {/* Top Section with Stats */}
      <div className="flex flex-wrap mt-14 px-4 md:px-7 gap-4 justify-center md:justify-start">
        <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
          <h1 className="text-lg md:text-2xl font-semibold">Total Community Users</h1>
          <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
          <h1 className="text-lg md:text-2xl font-semibold">Total Editors</h1>
          <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6 w-[280px] h-[160px] bg-[#FFF528] rounded-lg">
          <h1 className="text-lg md:text-2xl font-semibold">Total Broadcasters</h1>
          <h1 className="text-2xl md:text-3xl font-semibold">72,65</h1>
        </div>
      </div>

      {/* Manage Users Heading */}
      <div className="text-center md:text-left text-2xl md:text-3xl px-4 md:px-6 mt-9">
        <h1 className="text-white font-semibold">Manage Users</h1>
      </div>

      {/* Search Bar and Filter Options */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-5 px-4 md:px-6">
        <div className="flex items-center gap-4 w-full md:w-auto ">
          <div className="relative h-full w-full sm:w-[259px]">
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C]  text-white"
            />
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Sort Dropdown */}
          <div
            className={`flex justify-center items-center rounded-lg h-[44px] w-[157px] cursor-pointer ${
              activeFilter === 'SORT' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
            }`}
          >
            <select
              id="sortBy"
              className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
            >
              <option value="">Sort by</option>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-2 mt-2 md:mt-0 items-center flex-grow flex-col md:flex-row">
          <div
            className={`h-[44px] w-[64px] flex justify-center items-center rounded-lg cursor-pointer ${
              activeFilter === 'ALL' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-black'
            }`}
            onClick={() => handleFilterClick('ALL')}
          >
            ALL
          </div>
          <div
            className={`flex justify-center items-center w-[151px] rounded-lg h-[44px] cursor-pointer ${
              activeFilter === 'Community Users' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
            }`}
            onClick={() => handleFilterClick('Community Users')}
          >
            Community Users
          </div>
          <div
            className={`flex justify-center items-center rounded-lg w-[151px] h-[44px] cursor-pointer ${
              activeFilter === 'Broadcaster' ? 'bg-[#fcf527] text-black' : 'bg-[#1B1B1C] text-white'
            }`}
            onClick={() => handleFilterClick('Broadcaster')}
          >
            Broadcaster
          </div>
        </div>

        {/* Add User Button */}
        <div
          className="flex justify-center items-center rounded-lg h-[44px] w-[112px] bg-[#FFF528] mt-2 md:mt-0 cursor-pointer"
          onClick={() => setIsFormOpen(true)}
        >
          Add User
        </div>
      </div>

      {/* User Add Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-[#1b1b1c] rounded-lg shadow-lg p-6 w-[400px] relative">
            <div className="flex  justify-between">
              <h2 className="text-xl text-white font-semibold mb-4">ADD USER</h2>
              <IoMdCloseCircle className="text-3xl text-[#FFF528] cursor-pointer" onClick={() => setIsFormOpen(false)} />
            </div>
            <label className="text-white">Name</label>
            <input
              type="text"
              placeholder="Type User Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
            />
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
            />
            <label className="text-white">Joining Date</label>
            <input
              type="date"
              value={newUser.joiningDate}
              onChange={(e) => setNewUser({ ...newUser, joiningDate: e.target.value })}
              className="w-full mb-2 p-2 border text-[#9a9a9a] bg-[#1b1b1c] rounded"
            />
            <div className='flex justify-between'>
            {/* <button
              onClick={handleAddUser}
              className="w-[160px] bg-[#494949] text-white p-2 mt-4 rounded"
              >
              cancel
            </button> */}
   <button
  onClick={() => setIsFormOpen(false)} // Form close function
  className="w-[160px] bg-[#494949] text-white p-2 mt-4 rounded"
>
  Cancel
</button>


            <button
              onClick={handleAddUser}
              className="w-[160px] bg-[#FFF528] text-black p-2 mt-4 rounded"
              >
              Add
            </button>
              </div>
          </div>
        </div>
      )}
       <div className="mt-8 px-4 md:px-6">
         <table className="min-w-full bg-[#1b1b1c] text-white">

           <thead>
             <tr>
               <th className="text-left p-4">Name</th>
               <th className="text-left p-4">Email</th>
               <th className="text-left p-4">Joining Date</th>
               <th className="text-left p-4">ACTION</th>
             </tr>
           </thead>
           <tbody>
             {filteredUsers.map((user, index) => (
               <tr key={index}>
                 <td className="p-4">
                   <div>{user.name}</div>
                 </td>
                 <td className="p-4">
                  <div>{user.email}</div>
                 </td>
                 <td className="p-4">
                   <div>{user.joiningDate}</div>
                 </td>
                 <td className="p-4">
                   <div className="flex space-x-2">
                     <u className='text-[#FFF528]' >REMOVE</u>
                   </div>
                 </td>
               </tr>
               
             ))}
            
           </tbody>
         </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 flex justify-center items-center  text-[#fcf527]  rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
          <IoIosArrowBack /> Preview
        </button>

        {pageNumbers.map((number) => (
          <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-4 py-2  ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : ' text-white'}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-[#fcf527]  flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          >
          Next <IoIosArrowForward />
        </button>
      </div>
          </div>
    </div>
  );
}

export default UserManagement;
