import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Sidebar() {
  const menu = [
    {
      name: "Home",
    },
    {
      name: "Posts",
    },
  ];

  const activeClassName =
    "mx-1 py-2 px-3 rounded-xl cursor-pointer bg-blue-600";
  const inactiveClassName = "mx-1 py-2 px-3 rounded-xl cursor-pointer";
  return (
    <nav className="flex flex-col gap-2 my-5 mx-2">
      <div className="flex justify-center my-3">
        <img className="h-20 w-20" src={Logo} alt="" />
      </div>
      <div className="flex flex-col">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/articles"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Articles
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Projects
        </NavLink>
      </div>
    </nav>
  );
}
