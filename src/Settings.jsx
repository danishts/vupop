import React, { useState } from 'react';
import { FaPen, FaEye, FaEyeSlash } from 'react-icons/fa';  // Eye icons for show/hide password
import Profile from './assets/Profile.png';
import { CgToggleSquare } from "react-icons/cg";


function Settings() {
  const [activeSection, setActiveSection] = useState('');
  const [profileImage, setProfileImage] = useState(Profile); // To store the profile image
  const [imagePreview, setImagePreview] = useState(null);  // For image preview
  const [showPassword, setShowPassword] = useState(false);  // To toggle password visibility
  const [socialFee, setSocialFee] = useState(0); // For managing the social fee value

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setImagePreview(URL.createObjectURL(file)); // For previewing the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    window.alert('Your changes have been saved!');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);  // Toggle the password visibility
  };

  return (
    <div className="bg-black min-h-screen flex flex-col p-8">
      <div className="flex flex-wrap gap-10 mb-8">
        <h1
          className={`text-3xl font-bold cursor-pointer ${activeSection === 'editProfile' ? 'text-[#FFF528] border-b-2 border-[#FFF528]' : 'text-white'}`}
          onClick={() => handleClick('editProfile')}
        >
          Edit Profile
        </h1>
        <h1
          className={`text-3xl font-bold cursor-pointer ${activeSection === 'security' ? 'text-[#FFF528] border-b-2 border-[#FFF528]' : 'text-white'}`}
          onClick={() => handleClick('security')}
        >
          SECURITY
        </h1>
        <h1
          className={`text-3xl font-bold cursor-pointer ${activeSection === 'SOCIAL FEES' ? 'text-[#FFF528] border-b-2 border-[#FFF528]' : 'text-white'}`}
          onClick={() => handleClick('SOCIAL FEES')}
        >
          SOCIAL FEES
        </h1>
      </div>

      {/* Profile Image and Form Content - Side by Side */}
      {activeSection === 'editProfile' && (
        <div className="mt-8 p-4 bg-black flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative w-[120px] h-[134px] mx-auto sm:mx-0">
            {/* Profile Image */}
            <img
              src={imagePreview || profileImage} // Displaying the new image if available
              alt="Profile"
              className="w-full h-full "
            />
            {/* Pencil Icon below image */}
            <label htmlFor="file-upload" className="absolute bottom-0 right-0 p-2 cursor-pointer">
              <FaPen className="text-white text-2xl" />
            </label>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="mb-4 flex flex-col">
              <label className="text-[#535353] text-lg">Your Name</label>
              <input
                type="text"
                className="w-full sm:w-[320px] p-2 mt-2 bg-gray-900 text-[white] rounded-lg focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            {/* Email and Password in one row with equal width */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mb-4">
              <div className="flex flex-col sm:w-[320px]">
                <label className="text-[#535353] text-lg">Email</label>
                <input
                  type="email"
                  className="w-full p-2 mt-2 bg-[#1b1b1c] text-[white] rounded-lg focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col relative sm:w-[320px]">
                <label className="text-[#535353] text-lg">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}  // Conditionally toggle input type
                  className="w-full p-2 mt-2 bg-[#1b1b1c] text-[white] rounded-lg focus:outline-none"
                  placeholder="Enter your password"
                />
                {/* Eye Icon to show/hide password */}
                <div
                  className="absolute right-3 mt-14 transform -translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash className="text-white text-xl" /> : <FaEye className="text-white text-xl" />}
                </div>
              </div>
            </div>

            <button className="w-full sm:w-[120px] p-3 bg-[#FFF528] text-black font-bold rounded-lg mt-4" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      )}

      {/* SECURITY Section */}
      {activeSection === 'security' && (
        <div className="mt-8 flex flex-col p-4 bg-black">
          <div className='text-[#FFF528] font-semibold text-2xl'>
            <h1>Two-factor Authentication</h1>
          </div>
         <div className="flex items-center mt-9">
          <h2 className="flex items-center gap-6 text-[60px] text-[#FFF528]">
    <CgToggleSquare />
    <span className="text-white text-[18px]">Enable or disable two-factor authentication</span>
            </h2>
</div>
          <div className=''>
          <h1 className='text-[#FFF528] text-4xl mt-6'> Change Password</h1>
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-4xl mt-6'>Current Password</label>
            <input type="password" placeholder='********' className='bg-[#1b1b1c] text-white w-[400px] h-[44px] mt-6'/>
          </div>

           <div className=''>
          <h1 className='text-[#FFF528] text-4xl mt-6'> Change Password</h1>
          </div>
          <div className='flex flex-col'>
            <label className='text-white text-4xl mt-6'>New Password</label>
            <input type="password" placeholder='********' className='bg-[#1b1b1c] text-white w-[400px] h-[44px] mt-6'/>
          </div>
            <button className="w-full sm:w-[120px]  p-3 bg-[#FFF528] text-black font-bold rounded-lg mt-8" onClick={handleSave}>
              Save
            </button>
          </div>
      )}

      {/* SOCIAL FEES Section */}
      {activeSection === 'SOCIAL FEES' && (
        <div className="mt-8 bg-black p-4">
          <h2 className="text-white text-4xl font-semibold">Social Fee (in %)</h2>
          {/* Number input box with up and down controls */}
          <div className="flex items-center mt-4">
            <input type='range'/>
            <input
              type="number"
              min="0"
              max="100"
              value={socialFee}
              onChange={(e) => setSocialFee(e.target.value)}
              className="w-[100px] p-2 bg-gray-800 text-white text-xl text-center rounded-lg focus:outline-none"
            />
            <span className="text-white text-lg ml-4">%</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
