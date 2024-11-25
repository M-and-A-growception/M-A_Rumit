import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateAccountPage = () => {

  const [userType, setUserType] = useState(1);
  const user_firstname =useRef();
  const user_lastname =useRef();
  const user_email =useRef();
  const user_phone =useRef();
  const user_password =useRef();
  const user_confpassword =useRef();
  
  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleRegister=async(event)=>{

    event.preventDefault();
   const  first_name=user_firstname.current.value;
   const  last_name=user_lastname.current.value;
   const  email=user_email.current.value;
   const  phone=user_phone.current.value;
   const  password=user_password.current.value;
   const  confpassword=user_confpassword.current.value;
   const user_type=userType;
  

   if(password===confpassword){

    const data={
      first_name,
      last_name,
      email,
      phone,
      password,
      user_type
    }
  
    try {
      const response = await axios.post(`http://localhost:8000/registration/addbuyerregistration`, data);
  
      console.log('registration successful:', response.data);
      alert("successfully login");
    } catch (error) {
      // Handle errors, such as network issues or invalid responses
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error('Error response:', error.response);
        alert(`registration failed: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        alert('registration failed: No response from server');
      } else {
        // Something else happened (e.g., invalid configuration)
        console.error('Error message:', error.message);
        alert(`registration failed: ${error.message}`);
      }
    }

   }
   else{
    alert("Password does not match");
   }
  
   
  
  }

  return (
    <div className="min-h-screen bg-[var(--primary-bg)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-custom-blue mb-4 font-sans">
          Create Account
        </h1>
        <form onSubmit={handleRegister}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              ref={user_firstname}
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              ref={user_lastname}
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label  className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              ref={user_email}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label  className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
              Phone Number
            </label>
            <input
              ref={user_phone}
              type="number"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your Phone Number"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              ref={user_password}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              ref={user_confpassword} 
              type="password"
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Confirm your password"
            />
          </div>

          {/* User Type Selection (Buyer or Seller) */}
          <div className="mb-4 flex items-center space-x-4">
          <div>
              <input
                type="radio"
                id="seller"
                name="userType"
                value={1}
                checked={userType === 1}
                onChange={handleUserTypeChange}
                className="mr-2"
              />
              <label htmlFor="seller" className="text-[var(--primary-text)]">
                Seller
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="buyer"
                name="userType"
                value={2}
                checked={userType === 2}
                onChange={handleUserTypeChange}
                className="mr-2"
              />
              <label htmlFor="buyer" className="text-[var(--primary-text)]">
                Buyer
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-white py-2 px-4 rounded-md font-semibold"
          >
            Create Account
          </button>
        </form>

        {/* Link to Login page */}
        <div className="mt-4 text-center text-sm text-[var(--button-bg)]">
          <p>
            Already have an account?{" "}
            <Link to="/" className="hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountPage;
