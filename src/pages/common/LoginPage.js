import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import loginImage from '../../assets/images/loginImage.jpg';
import AuthenticationLayout from "../../custom/AuthenticationLayout";
const LoginPage = () => {
  //   const navigate = useNavigate();

  //   const handleLogin = () => {
  //     // Simulate login logic (e.g., authentication)
  //     localStorage.setItem('auth', true); // Set a dummy "authenticated" flag
  //     navigate('/dashboard'); // Redirect to dashboard after login
  //   };

  return (
    <AuthenticationLayout heading = {< h1 className="text-secondary-cyan text-3xl font-bold px-4 py-4">
      Welcome Back!
    </h1>}>
  <>
    <h1 className="text-2xl font-bold text-black mb-4 font-sans">Login</h1>
    <form>
      <div className="mb-4">
        <label className="block text-secondary-cyan font-medium mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary-cyan font-medium mb-2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
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
    </div></>
    </AuthenticationLayout >
    );
};

export default LoginPage;
