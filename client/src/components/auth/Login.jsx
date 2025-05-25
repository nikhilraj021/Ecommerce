import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-500 to-gray-900">
      <div className="bg-white p-5 rounded-md w-[400px]">
        {state === "Sign Up" ? (
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Create Account
          </h1>
        ) : (
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Login to your account
          </h1>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-5">
          {state === "Sign Up" && (
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="border p-2 rounded-md"
              placeholder="Full Name"
            />
          )}
          <input
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded-md"
            placeholder="Email"
          />
          <input
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="border p-2 rounded-md"
            placeholder="Password"
          />
          <p>Forgot Password?</p>
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded-md"
          >
            {state}
          </button>
        </form>
        {state === "Sign Up" ? (
          <p className="text-center mt-5">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        ) : (
          <p className="text-center mt-5">
            Don't have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
