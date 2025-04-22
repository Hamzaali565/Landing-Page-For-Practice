import React, { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import useUserStore from "../store/zustand";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { url } from "../constants/constant";
import logo from "./images/EOS_Logo.jpg";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login_check, role, setEmail, setUsername, setLoginCheck, setRole } =
    useUserStore();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      const response = await fetch(`${url}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data?.message);
      }
      toast.success("Logout Successfully ❤");
      navigate("/");
      setEmail(null);
      setUsername(null);
      setLoginCheck(null);
      setRole(null);
    } catch (error) {
      console.log(error);
      toast.error("Internet / Server error ☹");
    }
  };
  const navLinks = useMemo(() => {
    if (login_check && role === "admin") {
      return [
        "Home",
        "Product List",
        "User Requests",
        "Price Update",
        "Logout",
      ];
    }
    if (login_check && role === "user") {
      return ["Home", "Product List", "Logout"];
    }
    return ["Home", "Product List", "Login", "SignUp"];
  }, [login_check, role]);
  const navigateRoute = (link) => {
    if (link === "Home") {
      navigate("/");
      return;
    } else if (link === "Product List") {
      navigate("/view");
      return;
    } else if (link === "User Requests") {
      navigate("/user-request");
      return;
    } else if (link === "Price Update") {
      navigate("/edit-data");
      return;
    } else if (link === "Login") {
      navigate("/login");
      return;
    } else if (link === "SignUp") {
      navigate("/create-user");
      return;
    } else if (link === "Logout") {
      // call logout function
      logout();
      return;
    }
  };
  return (
    <header className="w-full bg-white border-b-2 shadow-md md:fixed  md:top-0 md:left-0 md:z-10  md:h-20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="" className="w-24" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <p
              key={link}
              onClick={() => navigateRoute(link)}
              className="text-gray-600 hover:text-blue-600 transition font-medium cursor-pointer"
            >
              {link}
            </p>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <p
              key={link}
              onClick={() => navigateRoute(link)}
              className="block text-gray-600 hover:text-blue-600 transition font-medium cursor-pointer"
            >
              {link}
            </p>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
