import React, { useState } from "react";
import BannerDashboard from "../components/BannerDashboard";
import Sidebar from "../components/Sidebar";
import { HiChevronDown } from "react-icons/hi";
import Footer from "../components/Footer";

export default function LayoutDashboard({ children, title, banner }) {
  const [menuProfile, setMenuProfile] = useState(false);

  return (
    <>
      <div className="flex h-full w-full">
        <div className="bg-blue-400 min-h-screen w-1/5">
          <Sidebar />
        </div>
        <div className="bg-gray-100 w-full">
          <div className="bg-white flex shadow-2xl flex-col ">
            <div className="flex justify-between px-8 py-3 items-center">
              <div>{title}</div>
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  className="w-10 h-10"
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=Overall&clotheColor=Red&eyeType=EyeRoll&eyebrowType=AngryNatural&mouthType=Serious&skinColor=Brown"
                />
                <HiChevronDown className="text-3xl" />
              </div>
            </div>
            {menuProfile ? (
              <div className="flex justify-end relative">s</div>
            ) : (
              ""
            )}
            <div className="flex justify-center">
              {banner ? <hr className="border w-11/12" /> : ""}
            </div>
            {banner ? <BannerDashboard /> : ""}
          </div>
          <div className="p-7">{children}</div>
          <div>
              <Footer/>
            </div>
        </div>
      </div>
    </>
  );
}
