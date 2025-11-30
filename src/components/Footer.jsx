import React from "react";
import { NavLink } from "react-router";

const Footer = () => {
  const activeClass = "pb-1 border-b-2 border-blue-600 text-blue-600";
  const normalClass =
    "pb-1 border-b-2 border-transparent text-black  hover:text-blue-600";

  return (
    <div className="">
      <footer className="footer footer-center p-8  flex flex-col gap-8 bg-base-300">
        <nav className="flex flex-wrap justify-center gap-8 text-sm ">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Home
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            My-Bookings
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Blogs
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : normalClass)}
          >
            Contact Us
          </NavLink>
        </nav>

        <nav>
          <div className="grid grid-flow-col gap-6 ">
            <a
              href="https://github.com/Md-Anwer-Hosen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12A11.5 11.5 0 008.207 23.1c.6.11.793-.258.793-.573 0-.283-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.836 2.809 1.305 3.492.997.108-.774.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.48 11.48 0 0112 6.8a11.48 11.48 0 012.993.403c2.291-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.805 5.628-5.479 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .318.19.69.8.572A11.5 11.5 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/a.h.nur.707226/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/md-anwer-hosen-530822388/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700 transition "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                className="fill-current text-black"
              >
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.1 1 2.5 1 4.98 2 4.98 3.5zM.5 8h4V24h-4V8zm7.982 0h3.833v2.17h.055c.534-1.01 1.84-2.17 3.787-2.17C21.35 8 24 10.29 24 15v9h-4v-8.37c0-2.08-.045-4.75-2.89-4.75-2.89 0-3.33 2.26-3.33 4.6V24h-4V8z" />
              </svg>
            </a>
          </div>
        </nav>

        <div>
          <p className="text-gray-600 text-sm ">
            © {new Date().getFullYear()} — All Rights Reserved | Phudu
            HealthCare
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
