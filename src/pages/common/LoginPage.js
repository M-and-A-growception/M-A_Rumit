import React from "react";
import { useRef } from "react";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "../../assets/url/url";
import loginImage from '../../assets/images/loginImage.jpg';
import AuthenticationLayout from "../../custom/AuthenticationLayout";

const LoginPage = () => {


  const useremailRef = useRef(null); // Ref for username input
  const passwordRef = useRef(null); // Ref for password input

  const handleLogin = async (event) => {
    event.preventDefault();
    // Access the current value of the input fields using refs
    const email = useremailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      email,
      password
    }

    try {
      const response = await axios.post(`http://localhost:8000/registration/buyerlogin`, data);

      console.log('Login successful:', response.data);
      alert("successfully login");
    } catch (error) {
      // Handle errors, such as network issues or invalid responses
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error('Error response:', error.response);
        alert(`Login failed: ${error.response.data.message || 'Unknown error'}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
        alert('Login failed: No response from server');
      } else {
        // Something else happened (e.g., invalid configuration)
        console.error('Error message:', error.message);
        alert(`Login failed: ${error.message}`);
      }
    }

  };

  return (
    <AuthenticationLayout heading={< h1 className="text-secondary-cyan text-3xl font-bold px-4 py-4">
      Welcome Back!
    </h1>}>
      <>
        <h1 className="text-xl font-bold text-black mb-4 font-sans">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-secondary-cyan font-medium text-base mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              ref={useremailRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-xs placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-secondary-cyan font-medium text-base mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-xs placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary-cyan hover:bg-primary-cyan text-white py-2 px-4 rounded-md font-semibold"
          >
            Login
          </button>
        </form>
        <div className="mt-4 flex justify-between text-sm text-black">
          <Link to="/forgot-password" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/create-account" className="hover:underline">
            Create an Account
          </Link>
        </div>
      </>
    </AuthenticationLayout>
  );
};

export default LoginPage;
