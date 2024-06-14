import React from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="w-screen h-32 bg-blue-200 flex justify-between items-center px-32">
        <div>
          <NavLink className={"text-3xl"} to="/">
            LOGO
          </NavLink>
        </div>
        <div className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-red-500" : "text-black"}`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-red-500" : "text-black"}`
            }
            to="/contact"
          >
            CONTACT US
          </NavLink>
        </div>
        <div className="flex gap-3 items-center">
          <NavLink
            className={({ isActive }) =>
              `text-3xl ${isActive ? "text-red-500" : "text-black"}`
            }
            to="/signup"
          >
            SIGNUP
          </NavLink>

          {localStorage.getItem("token") ? (
            <h1
              onClick={() => {
                localStorage.removeItem("token");
                toast.success("Logged Out SuccesFully");
              }}
              className=" cursor-pointer text-3xl text-black hover:taxt-red-400"
            >
              LOGOUT
            </h1>
          ) : (
            <NavLink
              className={({ isActive }) =>
                `text-3xl ${isActive ? "text-red-500" : "text-black"}`
              }
              to="/login"
            >
              LOGIN
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
