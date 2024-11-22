import React from "react";
// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const LoginPage = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simulate login logic (e.g., authentication)
//     localStorage.setItem('auth', true); // Set a dummy "authenticated" flag
//     navigate('/dashboard'); // Redirect to dashboard after login
//   };

    return (
      <div className="min-h-screen bg-[var(--primary-bg)] flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-custom-blue mb-4 font-sans">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="email">
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
            <label className="block text-[var(--primary-text)] font-medium mb-2" htmlFor="password">
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
  );
};

export default LoginPage;
