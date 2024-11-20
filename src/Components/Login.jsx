import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [regemail, setRegEmail] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const navigate = useNavigate();

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log(regemail)
    console.log(regpassword)
    setRegEmail("");
    setRegPassword("");
  };

  return (
    <div className="mt-10 px-20 py-10">
      <h2 className="mb-2 uppercase">Login</h2>
      <div className="w-1/2">
        <form action="" onSubmit={FormSubmit}>
          <div className="flex flex-col mb-1">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border py-2 px-2 rounded-md"
              required
              value={regemail}
              onChange={(e) => setRegEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-1">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="border py-2 px-2 rounded-md"
              required
              value={regpassword}
              onChange={(e) => setRegPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="flex justify-end">
              <span
                className="cursor-pointer text-blue-500"
                onClick={() => navigate("/forgotpassword")}
              >
                Forgot Password?
              </span>
            </div>
            <div>
              <button className="border bg-blue-400 text-white rounded-md py-2 px-8">
                Login
              </button>
            </div>
            <div className="flex justify-center mt-10">
              <p>
                Not a member yet?{" "}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => navigate("/registration")}
                >
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
