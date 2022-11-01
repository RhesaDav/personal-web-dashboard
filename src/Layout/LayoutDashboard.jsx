import React, { useState } from "react";
import BannerDashboard from "../components/BannerDashboard";
import Sidebar from "../components/Sidebar";

export default function LayoutDashboard({ children, title, banner }) {
  // const [banner, setBanner] = useState(false)
  return (
    <>
      <div className="flex">
        <div className="bg-blue-400 h-screen w-1/5">
          <Sidebar />
        </div>
        <div className="bg-gray-100 w-4/5">
          <div className="bg-white flex shadow-2xl flex-col">
            <div className="flex justify-between px-8 py-3">
              <div>{title}</div>
              <div>
                <span>Rhesa Davinanto</span>
              </div>
            </div>
            <div className="flex justify-center">
              {banner ? <hr className="border w-11/12" /> : ""}
            </div>
            {banner ? <BannerDashboard /> : ""}
          </div>
          <div className="p-7">{children}</div>
        </div>
      </div>
    </>
  );
}
