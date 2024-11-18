
import React from 'react';
import { CiSearch } from 'react-icons/ci'; // Importing CiSearch icon
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'; // Importing Chevron icons

function Overview() {
  return (
    <div className="bg-black h-screen flex flex-col p-4 gap-6 overflow-auto">
      {/* First Row of Divs */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="bg-[black] h-[148px] w-full md:w-[280px] flex items-center justify-center">
          <p className="text-3xl font-norwester font-bold text-[#808080]">USERS</p>
        </div>
        <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
          <div className='flex flex-col'>
            <h1 className='font-bold'>Total Community Users</h1>
            <h1 className='font-bold text-3xl text-black'>7,265</h1>
            
          </div>
        </div>
        <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
          
          <div className='flex gap-4 flex-col'>
            <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
            <div className='flex gap-4 text-2xl  items-center'><h1 className='text-[#FFF528] text-3xl'>7,265</h1>
            <p className='text-[#FFF528] '>Today</p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
         <div className='flex flex-col'>
            <h1 className='font-bold'>Total Community Users</h1>
            <h1 className='font-bold text-3xl text-black'>7,265</h1>
            
          </div>
        </div>
      </div>

      {/* Second Row of Divs */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
         <div className='flex flex-col'>
            <h1 className='font-bold'>Total Community Users</h1>
            <h1 className='font-bold text-3xl text-black'>7,265</h1>
            
          </div>
        </div>
        <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
          <div className='flex flex-col'>
            <h1 className='font-bold'>Total Community Users</h1>
            <h1 className='font-bold text-3xl text-black'>7,265</h1>
            
          </div>
        </div>
        <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
          
          <div className='flex gap-4 flex-col'>
            <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
            <div className='flex gap-4 text-2xl  items-center'><h1 className='text-[#FFF528] text-3xl'>7,265</h1>
            <p className='text-[#FFF528] '>Today</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
           
          <div className='flex gap-4  flex-col'>
            <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
            <div className='flex gap-4 text-2xl  items-center'><h1 className='text-[#FFF528] text-3xl'>7,265</h1>
            <p className='text-[#FFF528] '>Today</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-white font-bold text-3xl mt-4">Notifications</h1>
      
      {/* Red Bordered Div with Search Bar and Filters */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-[550px] gap-4 h-[52px] p-2">
        <div className="relative flex-grow">
          <CiSearch className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white"
          />
        </div>
        <select className="bg-[#1B1B1C] px-2 text-white rounded-lg w-full md:w-[120px] h-10 mx-2">
          <option>Type</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select className="bg-[#1B1B1C]  px-2 text-white rounded-lg w-full md:w-[120px] h-10 mx-2">
          <option>Sort by</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>

      {/* Table for Files */}
      <div className=" mt-4">
        <table className="min-w-full bg-[#1B1B1C] text-white border border-gray-600">
          {console.log("tablee")}
          <thead>
            <tr>
              <th className="py-2 px-4 border-gray-600 text-left">Name</th>
              <th className="py-2 px-4 border-gray-600 text-left">Action</th>
              <th className="py-2 px-4 border-gray-600 text-left">Date</th>
              <th className="py-2 px-4 border-gray-600 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-[14px]  border-b border-gray-600">
                Creator Name<br/>Broadcaster Name<br/>You<br/>Creator Name
              </td>
              <td className="py-2 px-4 border-b border-gray-600">
                Made payment request for [Video Name]<br/>
                Made payment successfully for [Clip Name]<br/>
                Have successfully made a purchase of [Clip Name]<br/>
                Made payment request of $50 for [Clip Name]
              </td>
              <td className="py-2 px-4 border-b border-gray-600">[Date]</td>
              <td className="py-2 px-4 border-b border-gray-600">
                Pending<br/>
                Completed<br/>
                Pending<br/>
                PENDING
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

      {/* Pagination Controls */}
      {/* Pagination Controls */}
<div className="flex justify-end mt-4 text-[#FFF528]">
  <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
    <HiChevronLeft className="mr-1" /> Previous
  </button>
  <span className="mx-2 cursor-pointer hover:bg-[#FFF528] hover:text-black rounded-md p-1 transition-colors duration-200">1</span>
  <span className="mx-2 cursor-pointer hover:bg-[#FFF528] hover:text-black rounded-md p-1 transition-colors duration-200">2</span>
  <span className="mx-2 cursor-pointer hover:bg-[#FFF528] hover:text-black rounded-md p-1 transition-colors duration-200">3</span>
  <span className="mx-2 cursor-pointer hover:bg-[#FFF528] hover:text-black rounded-md p-1 transition-colors duration-200">4</span>
  <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
    Next <HiChevronRight className="ml-1" />
  </button>
</div>

    </div>
      </div>
  );
}

export default Overview;




































// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// function Overview() {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   // Sample data for the table
//   const data = [
//     {
//       name: 'Creator Name',
//       action: 'Made payment request for [Video Name]',
//       date: '[Date]',
//       status: 'Pending',
//     },
//     {
//       name: 'Broadcaster Name',
//       action: 'Made payment successfully for [Clip Name]',
//       date: '[Date]',
//       status: 'Completed',
//     },
//     {
//       name: 'You',
//       action: 'Have successfully made a purchase of [Clip Name]',
//       date: '[Date]',
//       status: 'Pending',
//     },
//     {
//       name: 'Creator Name',
//       action: 'Made payment request of $50 for [Clip Name]',
//       date: '[Date]',
//       status: 'PENDING',
//     },
//     // Add more rows as needed
//   ];

//   // Filter the data based on the search query
//   const filteredData = data.filter(row =>
//     row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     row.action.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-black h-screen flex flex-col p-4 gap-6">
//       {/* First Row of Divs */}
//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         <div className="bg-black h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <p className="text-3xl font-norwester font-bold text-[#808080]">USERS</p>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//       </div>

//       {/* Second Row of Divs */}
//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h1 className="text-white font-bold text-3xl mt-4">Notifications</h1>
      
//       {/* Red Bordered Div with Search Bar and Filters */}
//       <div className="flex flex-col md:flex-row items-center w-[580px] gap-4 h-[52px] p-2">
//         <div className="relative flex-grow">
//           <CiSearch className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search query
//           />
//         </div>
//         <select className="bg-[#1B1B1C] px-2 text-white rounded-lg w-full md:w-[120px] h-10 mx-2">
//           <option>Type</option>
//           <option>Option 1</option>
//           <option>Option 2</option>
//         </select>
//         <select className="bg-[#1B1B1C] px-2 text-white rounded-lg w-full md:w-[120px] h-10 mx-2">
//           <option>Sort by</option>
//           <option>Option 1</option>
//           <option>Option 2</option>
//         </select>
//       </div>

//       {/* Table for Files */}
//       <div className="overflow-hidden mt-4">
//         <table className="min-w-full bg-[#1B1B1C] text-white border border-gray-600">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-gray-600 text-left">Name</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Action</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Date</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((row, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 text-[14px] border-b border-gray-600">
//                     {row.name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.action}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.date}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.status}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="py-2 px-4 text-center border-b border-gray-600">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-end mt-4 text-[#FFF528]">
//         <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
//           <HiChevronLeft className="h-5 w-5" />
//           Previous
//         </button>
//         <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
//           Next
//           <HiChevronRight className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Overview;






















































































// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// function Overview() {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample data for the table
//   const data = [
//     {
//       name: 'Creator Name',
//       action: 'Made payment request for [Video Name]',
//       date: '[Date]',
//       status: 'Pending',
//     },
//     {
//       name: 'Broadcaster Name',
//       action: 'Made payment successfully for [Clip Name]',
//       date: '[Date]',
//       status: 'Completed',
//     },
//     {
//       name: 'You',
//       action: 'Have successfully made a purchase of [Clip Name]',
//       date: '[Date]',
//       status: 'Pending',
//     },
//     {
//       name: 'Creator Name',
//       action: 'Made payment request of $50 for [Clip Name]',
//       date: '[Date]',
//       status: 'PENDING',
//     },
//   ];

  
//   const filteredData = data.filter(row =>
//     row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     row.action.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="bg-black h-full flex flex-col p-4 gap-6 overflow-auto">
//       {/* First Row of Divs */}
//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         {/* Updated Width for Responsive Design */}
//         <div className="bg-black h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <p className="text-3xl font-norwester font-bold text-[#808080]">USERS</p>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//       </div>

//       {/* Second Row of Divs */}
//       <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#FFF528] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex flex-col'>
//             <h1 className='font-bold'>Total Community Users</h1>
//             <h1 className='font-bold text-3xl text-black'>7,265</h1>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[280px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-[#1B1B1C] rounded-lg h-[148px] w-full md:w-[390px] flex items-center justify-center">
//           <div className='flex gap-4 flex-col'>
//             <h1 className='text-[#FFF528]'>Videos Uploaded in Vault</h1>
//             <div className='flex gap-4 text-2xl items-center'>
//               <h1 className='text-[#FFF528] text-3xl'>7,265</h1>
//               <p className='text-[#FFF528]'>Today</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <h1 className="text-white font-bold text-3xl mt-4">Notifications</h1>

//       {/* Red Bordered Div with Search Bar and Filters */}
//       <div className="flex flex-col md:flex-row items-center gap-4 w-[580px] h-[52px] p-2">
//         <div className="relative flex-grow">
//           <CiSearch className="absolute h-5 w-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full h-10 pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search query
//           />
//         </div>
//         <select className="bg-[#1B1B1C] px-2 text-white rounded-lg w-ful md:w-[120px] h-10 mx-2">
//           <option>Type</option>
//           <option>Option 1</option>
//           <option>Option 2</option>
//         </select>
//         <select className="bg-[#1B1B1C] px-2 text-white rounded-lg w-full md:w-[120px] h-10 mx-2">
//           <option>Sort by</option>
//           <option>Option 1</option>
//           <option>Option 2</option>
//         </select>
//       </div>

//       {/* Table for Files */}
//       <div className="overflow-hidden mt-4">
//         <table className="min-w-full bg-[#1B1B1C] text-white border border-gray-600">
//           <thead>
//             <tr>
//               <th className="py-2 px-4 border-gray-600 text-left">Name</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Action</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Date</th>
//               <th className="py-2 px-4 border-gray-600 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length > 0 ? (
//               filteredData.map((row, index) => (
//                 <tr key={index}>
//                   <td className="py-2 px-4 text-[14px] border-b border-gray-600">
//                     {row.name}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.action}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.date}
//                   </td>
//                   <td className="py-2 px-4 border-b border-gray-600">
//                     {row.status}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="py-2 px-4 text-center border-b border-gray-600">
//                   No results found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-end mt-4 text-[#FFF528]">
//         <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
//           <HiChevronLeft className="h-5 w-5" />
//           Previous
//         </button>
//         <button className="flex items-center mx-2 hover:text-white transition-colors duration-200">
//           Next
//           <HiChevronRight className="h-5 w-5" />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Overview;
