import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import plantImg from "../../assets/extra-section/leaf animation.gif";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../AllContexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const [theme, setTheme] = useState("abyss");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "abyss";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = (e) => {
    const newTheme = e.target.checked ? "abyss" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={`/dashboard`}
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Dashboard
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/exploregardeners"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browsetips"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Browse Tips
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          Support
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            `${
              isActive ? "underline font-bold" : ""
            } text-sm max1590:text-lg md:text-2xl`
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-20 bg-base-200 shadow mb-10 rounded-2xl px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost xl:hidden block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-3">
          <span>
            <img src={plantImg} alt="Plant Logo" className="w-15 h-15" />
          </span>
          <div className="items-center font-semibold md:text-3xl lg:text-4xl hidden md:flex">
            Plant Book
          </div>
        </div>
      </div>

      <div className="navbar-center hidden xl:flex max-[1200px]:hidden">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <label className="swap swap-rotate mr-5">
          <input
            type="checkbox"
            onChange={toggleTheme}
            checked={theme === "abyss"}
          />
          {/* Sun */}
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              data-tooltip-id="userTooltip"
              data-tooltip-content={user.username || user.email || "User"}
            >
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/k6cvchkQ/male.jpg"}
                  alt={user.username || "User profile"}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <Tooltip id="userTooltip" place="bottom" effect="solid" />
            <ul className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link
                  onClick={handleLogout}
                  to="/signin"
                  className="btn w-full"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/signin" className="btn btn-outline btn-primary">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
