import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from '../../assets/images/loginImage.jpg';
import AuthenticationLayout from "../../custom/AuthenticationLayout";

function CreateAccountPage() {
  const [userType, setUserType] = useState("buyer");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <AuthenticationLayout>
      <>
        <h1 className="text-2xl font-bold text-black mb-4 font-sans">
          Create Account
        </h1>
        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-secondary-cyan font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your first name"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-secondary-cyan font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] placeholder:text-sm placeholder:font-normal placeholder:text-custom-font-grey"
              placeholder="Enter your last name"
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-secondary-cyan font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
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
                id="buyer"
                name="userType"
                value="buyer"
                checked={userType === "buyer"}
                onChange={handleUserTypeChange}
                className="mr-2"
              />
              <label htmlFor="buyer" className="text-secondary-cyan">
                Buyer
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="seller"
                name="userType"
                value="seller"
                checked={userType === "seller"}
                onChange={handleUserTypeChange}
                className="mr-2"
              />
              <label htmlFor="seller" className="text-secondary-cyan">
                Seller
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary-cyan hover:bg-primary-cyan text-white py-2 px-4 rounded-md font-semibold"
          >
            Create Account
          </button>
        </form>

        {/* Link to Login page */}
        <div className="mt-4 text-center text-sm text-black">
          <p>
            Already have an account?{" "}
            <Link to="/" className="hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </>
    </AuthenticationLayout>
  );
}

export default CreateAccountPage;
