import React from "react";
import { Link } from "react-router-dom";
import AuthenticationLayout from '../../custom/AuthenticationLayout';

function ForgotPasswordPage() {
  return (
    <AuthenticationLayout>
      <>
        <h1 className="text-2xl font-bold text-black mb-4">Forgot Password</h1>
        <p className="text-[var(--secondary-text)] text-sm mb-6">
          Enter your email address, and we’ll send you a link to reset your password.
        </p>
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
          <button
            type="submit"
            className="w-full bg-secondary-cyan hover:bg-primary-cyan text-white py-2 px-4 rounded-md font-semibold"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/" className="text-sm text-black hover:underline">
            Back to Login
          </Link>
        </div>
      </>
    </AuthenticationLayout >
  );
}

export default ForgotPasswordPage;
