import React from "react";
import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const id=useParams()
  console.log(id.id);

  const emailRef = useRef(null) // Ref for username input

  const handleForgotPassword = async (event) => {


    event.preventDefault();
    // Access the current value of the input fields using refs
      const email = emailRef.current.value;
      const data={
        email
      }

      try {
        const response = await axios.post(`http://localhost:8000/forgotpasswordRoute/forgotpassword`, data);//need to be changed
    
        console.log('data fetching via email successful:', response.data.results[0]);
        alert("successfully sent")

        //sending to the reset link function
        
      } catch (error) {
        // Handle errors, such as network issues or invalid responses
        if (error.response) {
          // The server responded with a status code outside of 2xx
          console.error('Error response:', error.response);
          alert(`You are not register yet, please register first: ${error.response.data.message || 'Unknown error'}`);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Error request:', error.request);
          alert('Login failed: No response from server');
        } else {
          // Something else happened (e.g., invalid configuration)
          console.error('Error message:', error.message);
          alert(`You are not register yet, please register first: ${error.message}`);
        }
      }
  
  };



  return (
    <div className="min-h-screen bg-[var(--primary-bg)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-custom-blue mb-4">Resetting Password</h1>
        <p className="text-[var(--secondary-text)] text-sm mb-6">
          Enter your new password which you want to reset.
        </p>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your new Password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm_password"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="confirm your new Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-white py-2 px-4 rounded-md font-semibold"
          >
             Reset Password
          </button>
        </form>
        {/* <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-[var(--button-bg)] hover:underline">
            Back to Login
          </Link>
        </div> */}
      </div>
    </div>
  );
}

export default ResetPassword;
