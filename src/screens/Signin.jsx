// src/Signup.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import { url } from "../constants/constant";
import useUserStore from "../store/zustand";

const Signin = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    setRole,
    role,
    login_check,
    setLoginCheck,
  } = useUserStore();
  console.log({ username, email, role, login_check });

  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const handleInput = (key, value) => {
    setUserDetail((prev) => ({ ...prev, [key]: value }));
  };
  const login_user = async (e) => {
    e.preventDefault();
    if (![userDetail.email, userDetail.password].every(Boolean)) {
      toast.error("All Fields are required");
      return;
    }
    try {
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userDetail }),
      });
      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        toast.error(data?.message);
        return;
      }
      setEmail(data?.data?.email);
      setUsername(data?.data?.username);
      setRole(data?.data?.role);
      setLoginCheck(true);
    } catch (error) {
      console.error(error);
      toast.error("Internet Error / Server Error");
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Login With Your Account
          </h2>
          <form onSubmit={login_user}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
                required
                value={userDetail?.email}
                onChange={(e) => handleInput("email", e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Your Password"
                required
                value={userDetail?.password}
                onChange={(e) => handleInput("password", e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:text-blue-700">Sign Up</span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
