import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { FiLogIn } from "react-icons/fi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init.js";
import Loading from "../Shared/Loading.jsx";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const headerRef = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!headerRef.current.contains(e.target)) {
        setShow(false);
      }
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
  }
  return (
    <header ref={headerRef} className="bg-white shadow-lg">
      <div className="header-container">
        <div>
          <img className="header-logo" src={logo} alt="" />
        </div>

        {/* desktop menu */}
        <div className="hidden lg:flex">
          <ul className="desktop-menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">About</li>
            <li className="menu-item">
              <Link to={"/course"}>Course</Link>
            </li>
            <li className="menu-item">Gallery</li>
            <li className="menu-item">Teachers</li>
            <li className="menu-item">Contact</li>
            {user ? (
              <li className="px-3 py-1 bg-primary ml-4 rounded-md text-white">
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            ) : (
              <li className="px-3 py-1 bg-primary ml-4 rounded-md">
                <Link
                  className=" flex items-center gap-1 text-white"
                  to={"/login"}
                >
                  <span>login</span> <FiLogIn className="right-navbar-item" />
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile and tab menu */}
        <div className="flex lg:hidden">
          <div onClick={() => setShow(!show)}>
            <ul className="flex items-center gap-6">
              <li>
                {" "}
                <FiLogIn className="right-navbar-item" />
              </li>
              <li>
                {!show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </li>
            </ul>
          </div>
          <ul
            className={`flex fixed bg-primary z-40 w-36 md:w-44 h-screen  pt-6  flex-col transition-all duration-500 ${
              show ? "top-16 left-0" : "top-16 -left-96"
            }`}
          >
            <li className="menu-item my-1">Home</li>
            <li className="menu-item my-1">About</li>
            <li className="menu-item my-1">
              <Link to={"/course"}>Course</Link>
            </li>
            <li className="menu-item my-1">Gallery</li>
            <li className="menu-item my-1">Teachers</li>
            <li className="menu-item my-1">Contact</li>
            {user ? (
              <li className="px-3 py-1 bg-primary ml-4 rounded-md text-white">
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            ) : (
              <li className="px-3 py-1 bg-primary ml-4 rounded-md">
                <Link
                  className=" flex items-center gap-1 text-white"
                  to={"/login"}
                >
                  <span>login</span> <FiLogIn className="right-navbar-item" />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
