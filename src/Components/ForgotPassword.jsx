import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [forgotemail, setForgotEmail] = useState("");
  const navigate = useNavigate();

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(forgotemail);
    setForgotEmail("");
  };

  return (
    <div className="mt-10 px-20 py-10">
      <div>
        <p className="uppercase">Forgot Password</p>
      </div>
      <div className="mt-5 w-1/2">
        <form action="" onSubmit={SubmitForm}>
          <div className="flex flex-col mb-1">
            <label htmlFor="Email" className="mb-1">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              className="border py-2 px-2 rounded-md"
              required
              value={forgotemail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
          </div>
          <div className="mt-2 flex">
            <button className="border bg-blue-400 text-white rounded-md py-2 px-8">
              Sent
            </button>
          </div>
          <div className="flex justify-center">
            {" "}
            <span
              className="cursor-pointer text-blue-500"
              onClick={() => navigate("/login")}
            >
              Back to Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
