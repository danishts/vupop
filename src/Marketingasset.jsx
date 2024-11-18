// import React, { useState } from 'react';
// import { IoIosCloseCircle } from "react-icons/io";
// import { IoIosClose } from "react-icons/io";
// import { MdDelete } from "react-icons/md";
// import { MdOutlineFileDownload } from "react-icons/md";


// import { MdOutlineModeEdit } from "react-icons/md";

// function Marketingasset() {
//   // State to toggle form visibility
//   const [isFormOpen, setIsFormOpen] = useState(false);
//   // State to store the selected file
//   const [selectedImage, setSelectedImage] = useState(null);

//   const toggleForm = () => {
//     setIsFormOpen(!isFormOpen);
//   };

//   // Function to handle file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setSelectedImage(reader.result); // Set image preview
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to remove the selected image
//   const removeImage = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div className='h-full w-full bg-black'>
//       <div className='flex flex-wrap p-6 justify-between items-center'>
//         <div className='font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-2xl'>
//           ASSET
//         </div>
//         <div
//           className='flex justify-center items-center font-bold w-full sm:w-[212px] h-[44px] bg-[#FFF528] mt-4 sm:mt-0 cursor-pointer'
//           onClick={toggleForm} // Toggle the form visibility
//         >
//           Add Marketing Asset
//         </div>
//       </div>

//       {/* Conditionally render the form */}
//       {isFormOpen && (
//         <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
//           <div className='relative p-6 bg-[#1b1b1c] max-w-lg w-full rounded-md'>
            
//             {/* Close button */}
//             <div
//               className='absolute top-2 right-2 text-white cursor-pointer'
//               onClick={toggleForm} // Close the form when clicked
//             >
//               <IoIosCloseCircle size={36} className='mt-4 text-[#FFF528]' />
//             </div>

//             <h2 className='text-xl font-bold text-white mb-4 text-center'>
//               Add Marketing Asset
//             </h2>

//             <form>
//               <div className='mb-4'>
//                 <label className='block text-2xl text-white'>Upload File</label>

//                 {/* Custom upload box */}
//                 <div className="flex justify-center items-center w-full mt-3 h-32 p-2 bg-[#1b1b1c] border-dashed border-2 border-[#FFF528] rounded-lg">
//                   {!selectedImage ? (
//                     <label htmlFor="file-upload" className="cursor-pointer text-white">
//                       Upload
//                     </label>
//                   ) : (
//                     <div className="relative w-full h-full">
//                       <img
//                         src={selectedImage}
//                         alt="Selected"
//                         className="w-full h-full object-cover rounded-lg"
//                       />
//                       <div
//                         className="absolute top-0 right-0 p-2 cursor-pointer"
//                         onClick={removeImage}
//                       >
//                         <IoIosClose  size={24} className="text-black" />
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 {/* Hidden file input */}
//                 <input
//                   id="file-upload"
//                   type="file"
//                   onChange={handleFileChange}
//                   className="hidden"
//                 />
//               </div>

//               <div className='mb-4'>
//                 <label className='block text-white'>Title</label>
//                 <input
//                   type="text"
//                   placeholder="Title here"
//                   className="w-full p-2 border border-[#1b1b1c] rounded-lg"
//                 />
//               </div>

//               <div className='flex flex-col sm:flex-row sm:justify-between gap-4'>
//                 <button type="button" className='w-full sm:w-[250px] bg-[#494949] text-white font-bold px-4 py-2 rounded-lg'>
//                   Cancel
//                 </button>
//                 <button type="submit" className='w-full sm:w-[250px] bg-[#FFF528] text-black font-bold px-4 py-2 rounded-lg'>
//                   Add
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//           )}
               


// <div className="flex  w-full">
//       <div className="p-6 h-[220px] w-full sm:w-[450px] bg-black rounded-lg">
//         <div className="bg-[#FFF528] h-[180px] w-full text-[3rem] sm:text-[75px] flex justify-around items-center rounded-t-lg">
//           SOCIALS
//         </div>
//         <div className="flex h-[80px] gap-3 bg-[#1b1b1c] rounded-b-lg">
//           {/* Text stays on one line */}
//           <div className="text-white flex justify-center items-center p-2 text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
//             Leaflet template PDF
//           </div>
          
//           {/* Icons pushed to the right */}
//           <div className="ml-auto flex justify-center items-center gap-3">
//             <h1 className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg">
//               <MdOutlineModeEdit />
//             </h1>
//             <h1 className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg">
//               <MdDelete />
//             </h1>
//             <h1 className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg">
//               <MdOutlineFileDownload />
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>

//     </div>
//   );
// }

// export default Marketingasset;









































import React, { useState } from 'react';
import { IoIosCloseCircle, IoIosClose } from "react-icons/io";
import { MdDelete, MdOutlineFileDownload, MdOutlineModeEdit } from "react-icons/md";

function Marketingasset() {
  // State to toggle form visibility
  const [isFormOpen, setIsFormOpen] = useState(false);
  // State to store the selected file
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  // Function to handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set image preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to remove the selected image
  const removeImage = () => {
    setSelectedImage(null);
  };

  // Edit function (for now, it just logs the action)
  const handleEdit = () => {
    alert("Edit action triggered");
    // You can add logic to handle the edit functionality here
  };

  // Delete function (for now, it just logs the action)
  const handleDelete = () => {
    alert("Delete action triggered");
    // You can add logic to remove the asset here
  };

  // Download function (for now, it just logs the action)
  const handleDownload = () => {
    if (selectedImage) {
      const link = document.createElement('a');
      link.href = selectedImage; // Assuming the image is selected
      link.download = 'marketing_asset'; // You can modify the name
      link.click();
    } else {
      alert('No file selected for download');
    }
    };
    const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  // Clear function
  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="h-full w-full bg-black">
      <div className="flex flex-wrap p-6 justify-between items-center">
        <div className="font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-2xl">
          ASSET
        </div>
        <div
          className="flex justify-center items-center font-bold w-full sm:w-[212px] h-[44px] bg-[#FFF528] mt-4 sm:mt-0 cursor-pointer"
          onClick={toggleForm} // Toggle the form visibility
        >
          Add Marketing Asset
        </div>
      </div>

      {/* Conditionally render the form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative p-6 bg-[#1b1b1c] max-w-lg w-full rounded-md">
            {/* Close button */}
            <div
              className="absolute top-2 right-2 text-white cursor-pointer"
              onClick={toggleForm} // Close the form when clicked
            >
              <IoIosCloseCircle size={36} className="mt-4 text-[#FFF528]" />
            </div>

            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Add Marketing Asset
            </h2>

            <form>
              <div className="mb-4">
                <label className="block text-2xl text-white">Upload File</label>

                {/* Custom upload box */}
                <div className="flex justify-center items-center w-full mt-3 h-32 p-2 bg-[#1b1b1c] border-dashed border-2 border-[#FFF528] rounded-lg">
                  {!selectedImage ? (
                    <label htmlFor="file-upload" className="cursor-pointer text-white">
                      Upload
                    </label>
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div
                        className="absolute top-0 right-0 p-2 cursor-pointer"
                        onClick={removeImage}
                      >
                        <IoIosClose size={24} className="text-black" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Hidden file input */}
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div className="mb-4">
                <label className="block text-white">Title</label>
                <input
                  type="text"
                  placeholder="Title here"
                  className="w-full p-2 border border-[#1b1b1c] rounded-lg"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <button type="button" className="w-full sm:w-[250px] bg-[#494949] text-white font-bold px-4 py-2 rounded-lg">
                  Cancel
                </button>
                <button type="submit" className="w-full sm:w-[250px] bg-[#FFF528] text-black font-bold px-4 py-2 rounded-lg">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Card to display the marketing asset */}
      <div className="flex w-full">
        <div className="p-6 h-[220px] w-full sm:w-[450px] bg-black rounded-lg">
          <div className="bg-[#FFF528] h-[180px] w-full text-[3rem] sm:text-[75px] flex justify-around items-center rounded-t-lg">
            SOCIALS
          </div>
          <div className="flex h-[80px] gap-3 bg-[#1b1b1c] rounded-b-lg">
            {/* Text stays on one line */}
            <div className="text-white flex justify-center items-center p-2 text-[16px] whitespace-nowrap overflow-hidden text-ellipsis">
              Leaflet template PDF
            </div>

            {/* Icons pushed to the right */}
            <div className="ml-auto flex justify-center items-center gap-3">
              <h1
                onClick={handleEdit}
                className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg cursor-pointer"
              >
                <MdOutlineModeEdit />
              </h1>
              <h1
                onClick={handleDelete}
                className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg cursor-pointer"
              >
                <MdDelete />
              </h1>
              <h1
                onClick={handleDownload}
                className="h-10 w-10 flex justify-center items-center text-4xl bg-yellow-300 rounded-lg cursor-pointer"
              >
                <MdOutlineFileDownload />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketingasset;
