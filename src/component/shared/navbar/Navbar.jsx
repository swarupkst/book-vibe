import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-16">

      {/* LEFT */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => setActive("home")}
                className={active === "home" ? "border border-success text-success rounded-md" : ""}
              >
                <Link to={"/"}>Home</Link>
              </a>
            </li>
            <li>
              <a
                onClick={() => setActive("listed")}
                className={active === "listed" ? "text-success font-medium" : ""}
              >
              <Link to={"/book"} >Listed Books</Link>
              </a>
            </li>
            <li>
              <a
                onClick={() => setActive("pages")}
                className={active === "pages" ? "text-success font-medium" : ""}
              >
              <Link to= {"/read-book"}>Pages to Read</Link> 
              </a>
            </li>

            {/* Mobile Buttons */}
            <div className="mt-2 flex flex-col gap-2">
              <button className="btn btn-success text-white">Sign In</button>
              <button className="btn btn-info text-white">Sign Up</button>
            </div>
          </ul>
        </div>

        {/* Logo */}
        <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">

          <li>
            <a
              onClick={() => setActive("home")}
              className={`rounded-lg ${
                active === "home"
                  ? "border border-success text-success"
                  : ""
              }`}
            >
              <Link to={"/"}>Home</Link>
            </a>
          </li>

          <li>
            <a
              onClick={() => setActive("listed")}
              className={active === "listed" ? "text-success font-medium" : ""}
            >
              <Link to={"/book"} >Listed Books</Link>
            </a>
          </li>

          <li>
            <a
              onClick={() => setActive("pages")}
              className={active === "pages" ? "text-success font-medium" : ""}
            >
              <Link to= {"/read-book"}>Pages to Read</Link> 
            </a>
          </li>

        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end hidden lg:flex gap-3">
        <button className="btn btn-success text-white">Sign In</button>
        <button className="btn btn-info text-white">Sign Up</button>
      </div>

    </div>
  );
};

export default Navbar;