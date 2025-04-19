// src/Signup.jsx
import React, { useState } from "react";
import { toast } from "react-toastify";
import { url } from "../constants/constant";
import useUserStore from "../store/zustand";
import { useNavigate } from "react-router-dom";
import { TbLoader2 } from "react-icons/tb";
import NewFooter from "../components/NewFooter";

const Signin = () => {
  const { setUsername, setEmail, setRole, setLoginCheck } = useUserStore();
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

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
      setloading(true);
      const response = await fetch(`${url}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userDetail }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.message);
        setloading(false);
        return;
      }
      setEmail(data?.data?.email);
      setUsername(data?.data?.username);
      setRole(data?.data?.role);
      setLoginCheck(true);
      navigate("/");
      setloading(false);
    } catch (error) {
      console.error(error);
      setloading(false);
      toast.error("Internet Error / Server Error");
    }
  };
  return (
    <div>
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
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-flex items-center justify-center gap-2"
              >
                Login{" "}
                {loading && (
                  <span>
                    <TbLoader2 className="text-yellow-400 animate-spin" />
                  </span>
                )}
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <span className="text-blue-500 hover:text-blue-700">Sign Up</span>
          </p>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default Signin;
