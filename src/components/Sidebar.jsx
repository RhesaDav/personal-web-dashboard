import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Sidebar() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    setMenu(<PersonalWebRoute />);
  }, []);
  const PersonalWebRoute = () => {
    return (
      <>
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
      </>
    );
  };

  const StoreRoute = () => {
    return (
      <>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Store
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
      </>
    );
  };
  const StreamingVideoRoute = () => {
    return (
      <>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? activeClassName : inactiveClassName
          }
        >
          Video
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
      </>
    );
  };

  const handleChangeRoute = (value) => {
    if (value === "personal-web") {
      setMenu(<PersonalWebRoute />);
    } else if (value === "store") {
      setMenu(<StoreRoute />);
    } else if (value === "streaming-video") {
      setMenu(<StreamingVideoRoute />);
    }
  };

  const activeClassName =
    "mx-1 py-2 px-3 rounded-xl cursor-pointer bg-blue-600";
  const inactiveClassName =
    "mx-1 py-2 px-3 rounded-xl hover:bg-blue-500 cursor-pointer";

  return (
    <nav className="flex flex-col gap-2 my-5 mx-2">
      <div className="flex justify-center my-3">
        <img className="h-20 w-20" src={Logo} alt="" />
      </div>
      <div>
        <select
          onChange={(e) => handleChangeRoute(e.target.value)}
          name=""
          id=""
        >
          <option value="personal-web">Personal Web</option>
          <option value="store">Store</option>
          <option value="streaming-video">Streaming Video</option>
        </select>
      </div>
      <div className="flex flex-col">{menu}</div>
    </nav>
  );
}
