// src/Signup.jsx
import React, { useState } from "react";
import { url } from "../constants/constant";
import { toast } from "react-toastify";
import { TbLoader2 } from "react-icons/tb";
import NewFooter from "../components/NewFooter";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const handleInput = (key, value) => {
    setUserDetail((prev) => ({ ...prev, [key]: value }));
  };

  const signup_user = async (e) => {
    e.preventDefault();
    if (
      ![userDetail?.username, userDetail.password, userDetail.email].every(
        Boolean
      )
    ) {
      toast.error("All fields are required !!!");
      return;
    }
    try {
      setloading(true);
      const response = await fetch(`${url}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userDetail }),
      });
      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.message);
        return;
      }
      // toast.success("User created successfully");
      toast.success("Request pending for verification");
      setUserDetail(() => ({
        username: "",
        email: "",
        password: "",
      }));
    } catch (error) {
      console.log(error);
      toast.error("Internal server error or internet error");
    } finally {
      setloading(false);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create an Account
          </h2>
          <form onSubmit={signup_user}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
                value={userDetail?.username}
                onChange={(e) => handleInput("username", e.target.value)}
              />
            </div>
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
                className="bg-[#F50A8B] hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-flex items-center justify-center gap-5"
              >
                SignUp{" "}
                {loading && (
                  <span>
                    <TbLoader2 className="text-yellow-400 animate-spin" />
                  </span>
                )}
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-500 hover:text-blue-700 cursor-pointer "
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default Signup;
