import React from "react";
import LayoutDashboard from "../../Layout/LayoutDashboard";
import { SlNotebook } from "react-icons/sl";

export default function Dashboard() {
  return (
    <div>
      <LayoutDashboard title="Dashboard" banner={true}>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Overview</h1>
          <div className="flex justify-between">
            <div className="bg-white w-1/4 h-32 justify-between flex flex-col border rounded-xl shadow-xl">
              <div className="flex items-center p-3 gap-4">
                <div className="flex items-center">
                  <SlNotebook className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-md text-gray-500">Total Posts</h1>
                  <span className="text-2xl ml-2 font-bold text-black">22</span>
                </div>
              </div>
              <div className="p-2">
                <button className="text-blue-600 font-semibold">Details</button>
              </div>
            </div>
            <div className="bg-white w-1/4 h-32 justify-between flex flex-col border rounded-xl shadow-xl">
              <div className="flex items-center p-3 gap-4">
                <div className="flex items-center">
                  <SlNotebook className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-md text-gray-500">Total Posts</h1>
                  <span className="text-2xl ml-2 font-bold text-black">22</span>
                </div>
              </div>
              <div className="p-2">
                <button className="text-blue-600 font-semibold">Details</button>
              </div>
            </div>
            <div className="bg-white w-1/4 h-32 justify-between flex flex-col border rounded-xl shadow-xl">
              <div className="flex items-center p-3 gap-4">
                <div className="flex items-center">
                  <SlNotebook className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-md text-gray-500">Total Posts</h1>
                  <span className="text-2xl ml-2 font-bold text-black">22</span>
                </div>
              </div>
              <div className="p-2">
                <button className="text-blue-600 font-semibold">Details</button>
              </div>
            </div>
            
          </div>
        </div>
      </LayoutDashboard>
    </div>
  );
}
