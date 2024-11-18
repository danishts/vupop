// import React, { useState } from 'react';
// import { CiSearch } from 'react-icons/ci';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// function Payouts() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchQuery, setSearchQuery] = useState(""); // State for search query
//   const itemsPerPage = 5; // Number of items per page

//   // Sample data
//   const data = [
//     { name: "Creator 1", email: "john@example.com", dueDate: "2024-11-05", paymentMethod: "Bank", status: "Pending" },
//     { name: "Creator 2", email: "jane@example.com", dueDate: "2024-11-06", paymentMethod: "PayPal", status: "Pending" },
//     { name: "Creator 3", email: "doe@example.com", dueDate: "2024-11-07", paymentMethod: "Bank", status: "Approved" },
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

//   return (
//     <div className="bg-black flex-col h-screen flex">
//       {/* Top Section with Stats */}
//       <div className="flex flex-wrap mt-14 px-7 gap-4 justify-center md:justify-start">
//         <div className="flex flex-col gap-4 px-4 py-6 w-full md:w-[473px] h-[148px] bg-[#FFF528] rounded-lg">
//           <h1 className="text-2xl font-semibold">Total Community Users</h1>
//           <h1 className="text-3xl font-semibold">72,65</h1>
//         </div>
//         <div className="flex flex-col gap-4 px-4 py-6 w-full md:w-[473px] text-[#FFF528] h-[148px] bg-[#1B1B1C] rounded-lg">
//           <h1 className="text-2xl font-semibold">Total Editors</h1>
//           <h1 className="text-3xl font-semibold">72,65</h1>
//         </div>
//       </div>

//       <div className="text-3xl px-6 mt-9">
//         <h1 className="text-white font-semibold">Pending Requests</h1>
//       </div>

//       {/* Filter Section with Search Bar */}
//       <div className="flex flex-col md:flex-row mt-4 px-6 justify-between items-center">
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
//               className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             />
//             <select
//               id="sortBy"
//               className="h-[42px] w-[157px] rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
//             >
//               <option value="">Sort by</option>
//               <option value="date">Date</option>
//               <option value="name">Name</option>
//               <option value="status">Status</option>
//             </select>
//           </div>
//         </div>

//         {/* Export to CSV Button */}
//         <div className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528]">
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

// export default Payouts;



  // <div className="flex justify-end mt-4">
  //       <button
  //         onClick={() => handlePageChange(currentPage - 1)}
  //         disabled={currentPage === 1}
  //         className={`px-4 py-2 flex justify-center items-center text-[#fcf527] rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
  //       >
  //         <IoIosArrowBack /> Preview
  //       </button>

  //       {pageNumbers.map((number) => (
  //         <button
  //           key={number}
  //           onClick={() => handlePageChange(number)}
  //           className={`px-4 py-2 ${currentPage === number ? 'bg-[#fcf527] text-black rounded-lg font-semibold' : 'text-white'}`}
  //         >
  //           {number}
  //         </button>
  //       ))}

  //       <button
  //         onClick={() => handlePageChange(currentPage + 1)}
  //         disabled={currentPage === totalPages}
  //         className={`px-4 py-2 text-[#fcf527] flex justify-center items-center rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
  //       >
  //         Next <IoIosArrowForward />
  //       </button>
  //   </div>
  





import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Payouts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const itemsPerPage = 5; // Number of items per page

  // Sample data
  const data = [
    { name: "Creator 1", email: "john@example.com", dueDate: "2024-11-05", paymentMethod: "Bank", status: "Pending" },
    { name: "Creator 2", email: "jane@example.com", dueDate: "2024-11-06", paymentMethod: "PayPal", status: "Pending" },
    { name: "Creator 3", email: "doe@example.com", dueDate: "2024-11-07", paymentMethod: "Skrill", status: "Approved" },
    { name: "Creator 4", email: "smith@example.com", dueDate: "2024-11-08", paymentMethod: "Credit Card", status: "Pending" },
    { name: "Creator 5", email: "jones@example.com", dueDate: "2024-11-09", paymentMethod: "Bank", status: "Declined" },
    { name: "Creator 6", email: "taylor@example.com", dueDate: "2024-11-10", paymentMethod: "PayPal", status: "Pending" },
    // Add more sample data if needed
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Filter data based on search query
  const filteredData = data.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Get current items for the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Create an array of page numbers
  const pageNumbers = Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }, (_, i) => i + 1);

  // Export to CSV function
  const exportToCSV = () => {
    const csvRows = [];
    // Get the headers
    const headers = ['Name', 'Email', 'Due Date', 'Payment Method', 'Status'];
    csvRows.push(headers.join(',')); // Join headers into a single string

    // Get the data rows
    currentItems.forEach(item => {
      const row = [item.name, item.email, item.dueDate, item.paymentMethod, item.status];
      csvRows.push(row.join(',')); // Join row data into a single string
    });

    // Create a blob and trigger the download
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'payouts.csv');
    a.click();
    URL.revokeObjectURL(url); // Clean up the URL
  };

  return (
    <div className="bg-black flex-col h-screen flex">
      {/* Top Section with Stats */}
      <div className="flex flex-wrap mt-14 px-7 gap-4 justify-center md:justify-start">
        <div className="flex flex-col gap-4 px-4 py-6 w-full md:w-[473px] h-[148px] bg-[#FFF528] rounded-lg">
          <h1 className="text-2xl font-semibold">Total Community Users</h1>
          <h1 className="text-3xl font-semibold">72,65</h1>
        </div>
        <div className="flex flex-col gap-4 px-4 py-6 w-full md:w-[473px] text-[#FFF528] h-[148px] bg-[#1B1B1C] rounded-lg">
          <h1 className="text-2xl font-semibold">Total Editors</h1>
          <h1 className="text-3xl font-semibold">72,65</h1>
        </div>
      </div>

      <div className="text-3xl px-6 mt-9">
        <h1 className="text-white font-semibold">Pending Requests</h1>
      </div>

      {/* Filter Section with Search Bar */}
      <div className="flex flex-col md:flex-row  mt-4 px-6 justify-between items-center">
        <div className="flex gap-4 mb-4 md:mb-0">
          {/* Search Bar */}
          <div className="relative flex items-center">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery} // Bind search input to state
              onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
              className="w-[191px] h-[42px] pl-10 pr-4 rounded-lg bg-[#1B1B1C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FFF528] md:w-[200px]"
            />
          </div>
          {/* Container for Date and Sort */}
          <div className="flex gap-4">
            <input
              type="date"
              id="dateRange"
              className="h-[42px] rounded-lg w-[157px] bg-[#1B1B1C] text-white border border-gray-600 px-2 focus:outline-none focus:ring-2 focus:ring-[#FFF528]"
            />
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

        {/* Export to CSV Button */}
        <div 
          onClick={exportToCSV} // Call export function on click
          className="flex justify-center items-center font-bold w-full md:w-[154px] h-[42px] rounded-lg bg-[#FFF528] cursor-pointer"
        >
          Export to CSV
        </div>
      </div>

      <div className="overflow-x-auto mt-6 px-6">
        <table className="min-w-full bg-[#1B1B1C] text-white rounded-lg">
          <thead>
            <tr className="border-gray-600">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Due Date</th>
              <th className="py-3 px-4 text-left">Payment Method</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="border-gray-600">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.email}</td>
                <td className="py-3 px-4">{item.dueDate}</td>
                <td className="py-3 px-4">{item.paymentMethod}</td>
                <td className="py-3 px-4 text-[#FF9548]">{item.status}</td>
                <td className="py-3 px-4">
                  <button className="text-[#FFF528] hover:underline"><u>Approve</u></button>
                  <button className="text-[#FFF528] hover:underline ml-2"><u>Decline</u></button>
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
          <IoIosArrowBack /> Preview
        </button>

        {pageNumbers.map((number) => (
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

export default Payouts;
