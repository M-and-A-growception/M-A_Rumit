import React, { useEffect } from "react";
import { useRef } from "react";
// import { useNavigate } from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const useremailRef = useRef(null); // Ref for username input
  const passwordRef = useRef(null); // Ref for password input
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const HandleRefreshToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/registration/RefreshToken",
        {},
        { withCredentials: true }
      );
      console.log("refresh token intialized", response);
    } catch (error) {
      // Handle errors, such as network issues or invalid responses
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error("Error response here:", error.response);
        alert(`Login again: ${error.response.status || "Unknown error"}`);
        clearInterval(intervalRef.current);
        sessionStorage.removeItem("jwtToken");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        alert("refhresh token failed: No response from server");
      } else {
        // Something else happened (e.g., invalid configuration)
        console.error("Error message:", error.message);
        alert(`token refhresh failed: ${error.message}`);
      }
    }
  };

  const tokenInterval = () => {
    intervalRef.current = setInterval(() => {
      HandleRefreshToken();
    }, 60 * 1000);
  };

  tokenInterval();

  // const tokenInterval=setInterval(()=>{
  //   HandleRefreshToken();
  // },60*1000);
  // return()=>(clearInterval(tokenInterval));

  const handleLogin = async (event) => {
    event.preventDefault();
    // Access the current value of the input fields using refs
    const email = useremailRef.current.value;
    const password = passwordRef.current.value;
    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        `http://localhost:8000/registration/buyerlogin`,
        data,
        {
          //AxiosRequestConfig parameter
          withCredentials: true, //correct
        }
      );

      console.log("Login successful:", response.data);
      alert("successfully login");

      //for store in localstorage jwt token
      sessionStorage.setItem("jwtToken", response?.data?.accessToken);
      navigate("/home");
    } catch (error) {
      // Handle errors, such as network issues or invalid responses
      if (error.response) {
        // The server responded with a status code outside of 2xx
        console.error("Error response:", error.response);
        alert(
          `Login failed: ${error.response.data.message || "Unknown error"}`
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        alert("Login failed: No response from server");
      } else {
        // Something else happened (e.g., invalid configuration)
        console.error("Error message:", error.message);
        alert(`Login failed: ${error.message}`);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[var(--primary-bg)] flex-col flex items-center justify-center">
      <div className="absolute top-2 right-2">
        <a className="text-blue-500 text-base" href="/google">
          Click
        </a>
        <span> here to fetch Businees Details</span>
      </div>
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-custom-blue mb-4 font-sans">
            Login
          </h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-[var(--primary-text)] font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                ref={useremailRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[var(--primary-text)] font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--button-bg)] hover:bg-[var(--button-hover-bg)] text-white py-2 px-4 rounded-md font-semibold"
            >
              Login
            </button>
          </form>
          <div className="mt-4 flex justify-between text-sm text-[var(--button-bg)]">
            <Link to="/forgot-password" className="hover:underline">
              Forgot Password?
            </Link>
            <Link to="/create-account" className="hover:underline">
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
