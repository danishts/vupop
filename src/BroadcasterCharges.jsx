
// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// function BroadcasterCharges() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const itemsPerPage = 5; // Number of items per page

//   // Sample data
//   const data = [
//     { name: "Creator 1", email: "john@example.com", dueDate: "2024-11-05", paymentMethod: "Bank", status: "Pending" },
//     { name: "Creator 2", email: "jane@example.com", dueDate: "2024-11-06", paymentMethod: "PayPal", status: "Pending" },
//     { name: "Creator 3", email: "doe@example.com", dueDate: "2024-11-07", paymentMethod: "Skrill", status: "Approved" },
//     { name: "Creator 4", email: "smith@example.com", dueDate: "2024-11-08", paymentMethod: "Credit Card", status: "Pending" },
//     { name: "Creator 5", email: "jones@example.com", dueDate: "2024-11-09", paymentMethod: "Bank", status: "Declined" },
//     { name: "Creator 6", email: "taylor@example.com", dueDate: "2024-11-10", paymentMethod: "PayPal", status: "Pending" },
//     // Add more sample data if needed
//   ];

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   // Filter data based on search query
//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Get current items for the page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   // Pagination handler
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   // Create an array of page numbers
//   const pageNumbers = Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1);

//   // Export to CSV function
//   const exportToCSV = () => {
//     const csvRows = [];
//     // Get the headers
//     const headers = ['Name', 'Email', 'Due Date', 'Payment Method', 'Status'];
//     csvRows.push(headers.join(',')); // Join headers into a single string

//     // Get the data rows
//     currentItems.forEach(item => {
//       const row = [item.name, item.email, item.dueDate, item.paymentMethod, item.status];
//       csvRows.push(row.join(',')); // Join row data into a single string
//     });

//     // Create a blob and trigger the download
//     const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('download', 'payouts.csv');
//     a.click();
//     URL.revokeObjectURL(url); // Clean up the URL
//   };

//   return (
//     <div className="bg-black flex-col h-screen flex">
//       {/* Top Section with Stats */}
     
// <div  className='text-red-700 mt-6 px-6'>1234</div>
//       <div className="text-3xl px-6 mt-9">
//         <h1 className="text-white font-semibold">Pending Requests</h1>
//       </div>

//       {/* Filter Section with Search Bar */}
//       <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
//         <div className="flex gap-4 mb-4 md:mb-0">
//           {/* Search Bar */}
//           <div className="relative flex items-center">
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery} // Bind search input to state
//               onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
//               className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
//             />
//           </div>
//           {/* Container for Date and Sort */}
//           <div className="flex gap-4">
//             <input
//               type="date"
//               id="dateRange"
//               className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             />
//             <select
//               id="sortBy"
//               className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             >
//               <option value="">Sort by</option>
//               <option value="date">Date</option>
//               <option value="name">Name</option>
//               <option value="status">Status</option>
//             </select>
//           </div>
//         </div>

//         {/* Export to CSV Button */}
//         <div
//           onClick={exportToCSV} // Call export function on click
//           className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
//         >
//           Export to CSV
//         </div>
//       </div>

//       <div className="overflow-x-auto mt-6 px-6">
//         <table className="min-w-full bg-[#1B1B1C] text-white rounded-lg">
//           <thead>
//             <tr className="border-gray-600">
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Email</th>
//               <th className="py-3 px-4 text-left">Due Date</th>
//               <th className="py-3 px-4 text-left">Payment Method</th>
//               <th className="py-3 px-4 text-left">Status</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index} className="border-gray-600">
//                 <td className="py-3 px-4">{item.name}</td>
//                 <td className="py-3 px-4">{item.email}</td>
//                 <td className="py-3 px-4">{item.dueDate}</td>
//                 <td className="py-3 px-4">{item.paymentMethod}</td>
//                 <td className="py-3 px-4 text-[#FF9548]">{item.status}</td>
//                 <td className="py-3 px-4">
//                   <button className="text-[#FFF528] hover:underline"><u>Approve</u></button>
//                   <button className="text-[#FFF528] hover:underline ml-2"><u>Decline</u></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//        <div className="flex justify-end mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 flex justify-center items-center text-[#fcf527] rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2 ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : 'text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527] flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           Next <IoIosArrowForward />
//         </button>
//     </div>
  




//     </div>
//   );
// }

// export default BroadcasterCharges;













// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// function BroadcasterCharges() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const itemsPerPage = 5;

//   const data = [
//     { name: "Creator 1", email: "john@example.com", dueDate: "2024-11-05", paymentMethod: "Bank", status: "Pending" },
//     { name: "Creator 2", email: "jane@example.com", dueDate: "2024-11-06", paymentMethod: "PayPal", status: "Pending" },
//     { name: "Creator 3", email: "doe@example.com", dueDate: "2024-11-07", paymentMethod: "Skrill", status: "Approved" },
//     { name: "Creator 4", email: "smith@example.com", dueDate: "2024-11-08", paymentMethod: "Credit Card", status: "Pending" },
//     { name: "Creator 5", email: "jones@example.com", dueDate: "2024-11-09", paymentMethod: "Bank", status: "Declined" },
//     { name: "Creator 6", email: "taylor@example.com", dueDate: "2024-11-10", paymentMethod: "PayPal", status: "Pending" },
//   ];

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const pageNumbers = Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1);

//   const exportToCSV = () => {
//     const csvRows = [];
//     const headers = ['Name', 'Email', 'Due Date', 'Payment Method', 'Status'];
//     csvRows.push(headers.join(','));

//     currentItems.forEach(item => {
//       const row = [item.name, item.email, item.dueDate, item.paymentMethod, item.status];
//       csvRows.push(row.join(','));
//     });

//     const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.setAttribute('href', url);
//     a.setAttribute('download', 'payouts.csv');
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="bg-black flex-col h-screen flex">
//       {/* Top Section with Stats */}
//       <div className="mt-6 px-6 flex items-center justify-center">
//         <div className="flex items-center justify-center w-20 h-20 text-white border-2 border-dotted border-gray-400 rounded-lg">
//           213
//         </div>
//       </div>
//       <div className="text-3xl px-6 mt-9">
//         <h1 className="text-white font-semibold">Pending Requests</h1>
//       </div>

//       <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
//         <div className="flex gap-4 mb-4 md:mb-0">
//           {/* Search Bar */}
//           <div className="relative flex items-center">
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery} // Bind search input to state
//               onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
//               className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
//             />
//           </div>
//           {/* Container for Date and Sort */}
//           <div className="flex gap-4">
//             <input
//               type="date"
//               id="dateRange"
//               className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             />
//             <select
//               id="sortBy"
//               className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             >
//               <option value="">Sort by</option>
//               <option value="date">Date</option>
//               <option value="name">Name</option>
//               <option value="status">Status</option>
//             </select>
//           </div>
//         </div>

//         {/* Export to CSV Button */}
//         <div
//           onClick={exportToCSV} // Call export function on click
//           className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
//         >
//         Generate Invoice
//         </div>
//       </div>

//       <div className="overflow-x-auto mt-6 px-6">
//         <table className="min-w-full bg-[#1B1B1C] text-white rounded-lg">
//           <thead>
//             <tr className="border-gray-600">
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Email</th>
//               <th className="py-3 px-4 text-left">Due Date</th>
//               <th className="py-3 px-4 text-left">Payment Method</th>
//               <th className="py-3 px-4 text-left">Status</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index} className="border-gray-600">
//                 <td className="py-3 px-4">{item.name}</td>
//                 <td className="py-3 px-4">{item.email}</td>
//                 <td className="py-3 px-4">{item.dueDate}</td>
//                 <td className="py-3 px-4">{item.paymentMethod}</td>
//                 <td className="py-3 px-4 text-[#FF9548]">{item.status}</td>
//                 <td className="py-3 px-4">
//                   <button className="text-[#FFF528] hover:underline"><u>Approve</u></button>
//                   <button className="text-[#FFF528] hover:underline ml-2"><u>Decline</u></button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//        <div className="flex justify-end mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 flex justify-center items-center text-[#fcf527] rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2 ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : 'text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527] flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           Next <IoIosArrowForward />
//         </button>
//     </div>
  


//     </div>
//   );
// }

// export default BroadcasterCharges;



























// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


// function BroadcasterCharges() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const itemsPerPage = 5;

//   const data = [
//     { name: "Creator 1", email: "john@example.com", dueDate: "2024-11-05", paymentMethod: "Bank", status: "Pending" },
//     { name: "Creator 2", email: "jane@example.com", dueDate: "2024-11-06", paymentMethod: "PayPal", status: "Pending" },
//     { name: "Creator 3", email: "doe@example.com", dueDate: "2024-11-07", paymentMethod: "Skrill", status: "Approved" },
//     { name: "Creator 4", email: "smith@example.com", dueDate: "2024-11-08", paymentMethod: "Credit Card", status: "Pending" },
//     { name: "Creator 5", email: "jones@example.com", dueDate: "2024-11-09", paymentMethod: "Bank", status: "Declined" },
//     { name: "Creator 6", email: "taylor@example.com", dueDate: "2024-11-10", paymentMethod: "PayPal", status: "Pending" },
//   ];

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.email.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const pageNumbers = Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1);

//   const generateInvoice = () => {
//     const doc = new jsPDF();
//     doc.text("Invoice", 20, 20);
//     currentItems.forEach((item, index) => {
//       doc.text(`${index + 1}. Name: ${item.name}, Email: ${item.email}, Due Date: ${item.dueDate}, Payment: ${item.paymentMethod}, Status: ${item.status}`, 20, 30 + index * 10);
//     });
//     doc.save('invoice.pdf');
//   };

//   return (
//     <div className="bg-black flex-col h-screen flex">
//       {/* Top Section with Stats */}
//       <div className="mt-6 px-6 flex items-center justify-center">
//         <div className="flex items-center justify-center w-20 h-20 text-white border-2 border-dotted border-gray-400 rounded-lg">
//           213
//         </div>
//       </div>
//       <div className="text-3xl px-6 mt-9">
//         <h1 className="text-white font-semibold">Pending Requests</h1>
//       </div>

//       <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
//         <div className="flex gap-4 mb-4 md:mb-0">
//           {/* Search Bar */}
//           <div className="relative flex items-center">
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery} // Bind search input to state
//               onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
//               className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
//             />
//           </div>
//           {/* Container for Date and Sort */}
//           <div className="flex gap-4">
//             <input
//               type="date"
//               id="dateRange"
//               className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             />
//             <select
//               id="sortBy"
//               className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             >
//               <option value="">Sort by</option>
//               <option value="date">Date</option>
//               <option value="name">Name</option>
//               <option value="status">Status</option>
//             </select>
//           </div>
//         </div>

//         {/* Generate Invoice Button */}
//         <div
//           onClick={generateInvoice} // Call generateInvoice function on click
//           className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
//         >
//           Generate Invoice
//         </div>
//       </div>

//       <div className="overflow-x-auto mt-6 px-6">
//         <table className="min-w-full bg-[#1B1B1C] text-white rounded-lg">
//           <thead>
//             <tr className="border-gray-600">
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Email</th>
//               <th className="py-3 px-4 text-left">Due Date</th>
//               <th className="py-3 px-4 text-left">Payment Method</th>
//               <th className="py-3 px-4 text-left">Status</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index} className="border-gray-600">
//                 <td className="py-3 px-4">{item.name}</td>
//                 <td className="py-3 px-4">{item.email}</td>
//                 <td className="py-3 px-4">{item.dueDate}</td>
//                 <td className="py-3 px-4">{item.paymentMethod}</td>
//                 <td className="py-3 px-4 text-[#FF9548]">{item.status}</td>
//                 <td className="py-3 px-4">
//                   <button className="text-[#FFF528] hover:underline"><u>Approve</u></button>
//                   <button className="text-[#FFF528] hover:underline ml-2"><u>Decline</u></button>
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
//           className={`px-4 py-2 flex justify-center items-center text-[#fcf527] rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//             key={number}
//             onClick={() => handlePageChange(number)}
//             className={`px-4 py-2 ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : 'text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527] flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//         >
//           Next <IoIosArrowForward />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BroadcasterCharges;

































// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { CiImageOn } from "react-icons/ci";


// function BroadcasterCharges() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState("");
//   const itemsPerPage = 5;

//   const data = [
//     { name: "Creator 1", clipReference: "Clip1", date: "2024-11-05", ExportDuration:'10$',  amount: "100", status: "Pending" },
//     { name: "Creator 2", clipReference: "Clip2", date: "2024-11-06", ExportDuration:'10$', amount: "150", status: "Pending" },
//     { name: "Creator 3", clipReference: "Clip3", date: "2024-11-07", ExportDuration:'10$', amount: "200", status: "Approved" },
//     { name: "Creator 4", clipReference: "Clip4", date: "2024-11-08", ExportDuration:'10$', amount: "250", status: "Pending" },
//     { name: "Creator 5", clipReference: "Clip5", date: "2024-11-09", ExportDuration:'10$', amount: "300", status: "Declined" },
//     { name: "Creator 6", clipReference: "Clip6", date: "2024-11-10", ExportDuration:'10$', amount: "350", status: "Pending" },
//   ];

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.clipReference.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   const pageNumbers = Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1);

//   const generateInvoice = () => {
//     const doc = new jsPDF();
//     doc.text("Invoice", 20, 20);
//     currentItems.forEach((item, index) => {
//       doc.text(`${index + 1}. Name: ${item.name}, Clip Reference: ${item.clipReference}, Date: ${item.date}, Amount: ${item.amount}, Status: ${item.status}`, 20, 30 + index * 10);
//     });
//     doc.save('invoice.pdf');
//   };

//   return (
//     <div className="bg-black flex-col h-screen flex">
//       {/* Top Section with Image Upload */}
//       <div className="mt-6 flex items-center px-6">
//         <div className="flex items-center justify-center w-[160px] h-[160px] text-white border-2 border-dashed border-[#FFF528] rounded-lg">
//           <CiImageOn className='w-[30.19px] h-[30.19px] text-[#FFF528]' />
//         </div>
//         <div className='px-6'>
//           <h1 className='text-[#FFF528]'>Select broadcaster to update data below</h1>
//         </div>
//       </div>

//       <div className="text-2xl px-6 mt-9">
//         <h1 className="text-white font-semibold">Details</h1>
//       </div>

//       {/* Search and Filters */}
//       <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
//         <div className="flex gap-4 mb-4 md:mb-0">
//           {/* Search Bar */}
//           <div className="relative flex items-center">
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery} // Bind search input to state
//               onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
//               className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
//             />
//           </div>
//           {/* Container for Date and Sort */}
//           <div className="flex gap-4">
//             <input
//               type="date"
//               id="dateRange"
//               className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             />
//             <select
//               id="sortBy"
//               className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             >
//               <option value="">Sort by</option>
//               <option value="date">Date</option>
//               <option value="name">Name</option>
//               <option value="status">Status</option>
//             </select>
//           </div>
//         </div>

//         {/* Generate Invoice Button */}
//         <div
//           onClick={generateInvoice}
//           className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
//         >
//           Generate Invoice
//         </div>
//       </div>

//       <div className=" mt-6 px-6">
//       <table className="min-w-full bg-[#1B1B1C] text-white border-separate border-spacing-0">
//   <thead>
//     <tr>
//       <th className="p-4 border-b-2 border-gray-600">Name</th>
//       <th className="p-4 border-b-2 border-gray-600">Clip Reference</th>
//       <th className="p-4 border-b-2 border-gray-600">Date</th>
//       <th className="p-4 border-b-2 border-gray-600">Export Duration</th>
//       <th className="p-4 border-b-2 border-gray-600">Amount</th>
//       <th className="p-4 border-b-2 border-gray-600">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     {currentItems.map((item, index) => (
//       <tr key={index} className="hover:bg-gray-700">
//         <td className="p-4 border-b border-gray-600">{item.name}</td>
//         <td className="p-4 border-b border-gray-600">{item.clipReference}</td>
//         <td className="p-4 border-b border-gray-600">{item.date}</td>
//         <td className="p-4 border-b border-gray-600 ">{item.ExportDuration}</td>
//         <td className="p-4 border-b border-gray-600">{item.amount}</td>
//         <td className="p-4 border-b border-gray-600">
//           <button className="text-[#FFF528] mr-2">Edit</button>
//           <button className="text-red-500">Delete</button>
//         </td>
//       </tr>
//     ))}
//   </tbody>
// </table>

//       {/* Pagination */}
//      <div className="flex justify-end mt-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className={`px-4 py-2 flex justify-center items-center  text-[#fcf527]  rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//           >
//           <IoIosArrowBack /> Preview
//         </button>

//         {pageNumbers.map((number) => (
//           <button
//           key={number}
//           onClick={() => handlePageChange(number)}
//           className={`px-4 py-2  ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : ' text-white'}`}
//           >
//             {number}
//           </button>
//         ))}

//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className={`px-4 py-2 text-[#fcf527]  flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
//           >
//           Next <IoIosArrowForward />
//         </button>
//       </div>     </div>
//     </div>
//   );
// }

// export default BroadcasterCharges;

































import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CiImageOn } from "react-icons/ci";

function BroadcasterCharges() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;

  const data = [
    { name: "Creator 1", clipReference: "Clip1", date: "2024-11-05", ExportDuration: '10$', amount: "100", status: "Pending" },
    { name: "Creator 2", clipReference: "Clip2", date: "2024-11-06", ExportDuration: '10$', amount: "150", status: "Pending" },
    { name: "Creator 3", clipReference: "Clip3", date: "2024-11-07", ExportDuration: '10$', amount: "200", status: "Approved" },
    { name: "Creator 4", clipReference: "Clip4", date: "2024-11-08", ExportDuration: '10$', amount: "250", status: "Pending" },
    { name: "Creator 5", clipReference: "Clip5", date: "2024-11-09", ExportDuration: '10$', amount: "300", status: "Declined" },
    { name: "Creator 6", clipReference: "Clip6", date: "2024-11-10", ExportDuration: '10$', amount: "350", status: "Pending" },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.clipReference.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="bg-black flex-col h-screen flex">
      {/* Top Section with Image Upload */}
      <div className="mt-6 flex items-center px-6">
        <div className="flex items-center justify-center w-[160px] h-[160px] text-white border-2 border-dashed border-[#FFF528] rounded-lg">
          <CiImageOn className='w-[30.19px] h-[30.19px] text-[#FFF528]' />
        </div>
        <div className='px-6'>
          <h1 className='text-[#FFF528]'>Select broadcaster to update data below</h1>
        </div>
      </div>

      <div className="text-2xl px-6 mt-9">
        <h1 className="text-white font-semibold">Details</h1>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
        <div className="flex gap-4 mb-4 md:mb-0">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
            />
          </div>
          <div className="flex gap-4">
            <input
              type="date"
              className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
            />
            <select
              className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border px-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
            >
              <option value="">Sort by</option>
              <option value="date">Date</option>
              <option value="name">Name</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => console.log('Generate Invoice')}
          className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
        >
          Generate Invoice
        </button>
      </div>

      {/* Table */}
      <div className="mt-6 px-6">
        <table className="min-w-full  bg-[#1B1B1C] text-white border-separate border-spacing-0">
          <thead>
            <tr >
              <th className="p-4 border-b-2 border-gray-600">Name</th>
              <th className="p-4 border-b-2 border-gray-600">Clip Reference</th>
              <th className="p-4 border-b-2 border-gray-600">Date</th>
              <th className="p-4 border-b-2 border-gray-600">Export Duration</th>
              <th className="p-4 border-b-2 border-gray-600">Amount</th>
              <th className="p-4 border-b-2 border-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="  ">
                <td className="p-4 border-b border-gray-600">{item.name}</td>
                <td className="p-4 border-b border-gray-600">{item.clipReference}</td>
                <td className="p-4 border-b border-gray-600">{item.date}</td>
                <td className="p-4 border-b border-gray-600">{item.ExportDuration}</td>
                <td className="p-4 border-b border-gray-600">{item.amount}</td>
                <td className="p-4 border-b border-gray-600">
                  <button className="text-[#FFF528] mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 flex justify-center items-center text-[#fcf527] rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <IoIosArrowBack /> Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : 'text-white'}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 text-[#fcf527] flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          Next <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default BroadcasterCharges;
