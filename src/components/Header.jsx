import React, { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";
import useUserStore from "../store/zustand";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login_check, role } = useUserStore();
  const navigate = useNavigate();
  const navLinks = useMemo(() => {
    if (login_check && role === "admin") {
      return ["Home", "View", "Create User", "Logout"];
    }
    if (login_check && role === "user") {
      return ["Home", "View", "Logout"];
    }
    return ["Home", "View", "Login"];
  }, [login_check, role]);
  const navigateRoute = (link) => {
    if (link === "Home") {
      navigate("/");
      return;
    } else if (link === "View") {
      navigate("/view");
      return;
    } else if (link === "Create User") {
      navigate("/create-user");
      return;
    } else if (link === "Logout") {
      // call logout function
      return;
    }
  };
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">MyLogo</div>

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
