import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../Contexts/Authcontext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logoutHandle = () => {
    logOutUser()
      .then(() => {
        navigate("/home");
      })
      .catch(() => {});
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/home"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/events"}>Events</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-500">Events</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-medium">{navLinks}</ul>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-4 w-fit">
        {user && <p className="w-full">{user.displayName}</p>}
        {user ? (
          <Link
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            onClick={logoutHandle}
          >
            {" "}
            Log Out{" "}
          </Link>
        ) : (
          <Link
            className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
            to={"/login"}
          >
            {" "}
            Login{" "}
          </Link>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="absolute top-10 left-0 w-full bg-white shadow-md p-5 md:hidden z-50">
          <ul className="flex flex-col gap-4 font-medium">{navLinks}</ul>

          <div className="flex flex-col gap-3 mt-5">
            {user && <p className="w-full">{user.displayName}</p>}
            {user ? (
              <Link
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                onClick={logoutHandle}
              >
                {" "}
                Log Out{" "}
              </Link>
            ) : (
              <Link
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
                to={"/login"}
              >
                {" "}
                Login{" "}
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
