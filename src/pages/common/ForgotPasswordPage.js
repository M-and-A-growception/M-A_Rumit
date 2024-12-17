import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgotPasswordPage() {

  const emailRef = useRef(null) // Ref for username input

  const handleForgotPassword = async (event) => {


    event.preventDefault();
    // Access the current value of the input fields using refs
    const email = emailRef.current.value;
    const data = {
      email
    }

    try {
      const response = await axios.post(`http://localhost:8000/forgotpasswordRoute/forgotpassword`, data);//need to be changed

      console.log('data fetching via email successful:', response.data.reply[0]);
      alert("successfully sent")

      //sending to the reset link function

    } catch (error) {
      // Handle errors, such as network issues or invalid responses
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error('Error response:', error.response);
        alert(`You are not register yet, please register first!`);
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


  // const handleresetpassword =async(email)=>{

  // const DOMAIN = 'mna.growception.com';
  // const API_KEY = '6df690bb-2a544cc9';
  // const FRONTEND_RESET_URL = 'https://growception.com/';

  // // Create reset link
  // // const resetLink = `${FRONTEND_RESET_URL}?token=${resetToken}&email=${email}`;
  // const resetLink = `${FRONTEND_RESET_URL}`;


  //   // Send email using Mailgun
  //   const url = `https://api.mailgun.net/v3/${DOMAIN}/messages`;
  //   try {
  //       const response = await axios.post(
  //           url,
  //           new URLSearchParams({
  //               from: 'Support <support@mg.mna.growception.com>',
  //               to: email,
  //               subject: 'Password Reset Request',
  //               text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
  //           }),
  //           {
  //               auth: {
  //                   username: 'api',
  //                   password: API_KEY,
  //               },
  //           }
  //       );

  //       console.log("successfull sending the mail")
  //       alert("successfull sending the mail")
  //   } catch (error) {
  //       console.error('Error sending email:', error.response);
  //   }

  // }

  return (
    <div className="min-h-screen bg-[var(--primary-bg)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-custom-blue mb-4">Forgot Password</h1>
        <p className="text-[var(--secondary-text)] text-sm mb-6">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-white py-2 px-4 rounded-md font-semibold"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-[var(--button-bg)] hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
