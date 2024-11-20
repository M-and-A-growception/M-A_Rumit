import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registrastion = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordmessage, setPasswordMessage] = useState("");

  const FormSumbit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      setPasswordMessage("Passwords do not match");
      return;
    }

    console.log(name);
    setName("");
    console.log(email);
    setEmail("");
    console.log(password);
    setPassword("");
    console.log(confirmpassword);
    setConfirmPassword("");
    setPasswordMessage("");
  };

  // const RegisterForm = () => {
  //   setIsRegisterOpen(true);
  // };

  return (
    <>
      <div className="w-full flex justify-center flex-col px-20 py-10">
        <p className="mb-10 uppercase ">Registrastion</p>
        <div className="w-1/2">
          <form action="" onSubmit={FormSumbit}>
            <div className="flex flex-col mb-1">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="border   py-2 px-2 rounded-md"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-1">
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border   py-2 px-2 rounded-md"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-1">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border   py-2 px-2 rounded-md"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-1">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                placeholder="Repeat Password"
                className="border   py-2 px-2 rounded-md"
                required
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="text-red-600">{passwordmessage}</div>
            </div>
            <div className="flex justify-start mt-5">
              <button
                type="submit"
                className="border bg-blue-400 text-white rounded-md py-2 px-8"
              >
                Sign In
              </button>
            </div>

            <div className="flex justify-center">
              <p>
                Back to{" "}
                <span
                  className="cursor-pointer text-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registrastion;
