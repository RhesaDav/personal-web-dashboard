import React from "react";
import LayoutDashboard from "../../Layout/LayoutDashboard";
import { AiFillDelete } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";
import {FiSearch} from "react-icons/fi"

export default function Articles() {
  return (
    <div>
      <LayoutDashboard title="Articles">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">Article</h1>
          <div className="flex justify-between">
            <div className="bg-white w-full min-h-96 justify-between flex flex-col border rounded-xl shadow-xl">
              <div className="flex flex-col p-3 gap-4">
                <div className="flex justify-between items-center px-5">
                  <div className="flex items-cneter">
                    <input type="text" className="border h-9 px-3 py-1  rounded-l-full border-slate-300 w-72 focus:outline-none focus:border-blue-500" placeholder="Search articles ..." />
                    <button className="border h-9 rounded-r-full px-3 py-1 hover:bg-blue-500 hover:border-blue-500"><FiSearch/></button>
                  </div>
                  <button className="border hover:scale-110 transition duration-150 ease-in-out bg-green-500 py-1 px-2 rounded-lg text-black hover:font-semibold">
                    Create New Article
                  </button>
                </div>
                <hr className="border w-full" />
                <div className="flex flex-col gap-4">
                  <div className="border flex justify-between rounded-full px-10 py-3">
                    <div className="flex flex-col gap-2">
                      <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                        This Is Article Title
                      </button>
                      <h1 className="text-xs text-gray-500">
                        Kamis, 23 April 2022 13.42
                      </h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-150 ease-in-out">
                        <AiFillDelete className="h-10 p-2 w-10 " />
                      </button>
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500 hover:scale-110 transition duration-150 ease-in-out">
                        <RiEditFill className="h-10 p-2 w-10 " />
                      </button>
                    </div>
                  </div>
                  <div className="border flex justify-between rounded-full px-10 py-3">
                    <div className="flex flex-col gap-2">
                      <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                        This Is Article Title
                      </button>
                      <h1 className="text-xs text-gray-500">
                        Kamis, 23 April 2022 13.42
                      </h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <AiFillDelete className="h-10 p-2 w-10" />
                      </button>
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <RiEditFill className="h-10 p-2 w-10" />
                      </button>
                    </div>
                  </div>
                  <div className="border flex justify-between rounded-full px-10 py-3">
                    <div className="flex flex-col gap-2">
                      <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                        This Is Article Title
                      </button>
                      <h1 className="text-xs text-gray-500">
                        Kamis, 23 April 2022 13.42
                      </h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <AiFillDelete className="h-10 p-2 w-10" />
                      </button>
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <RiEditFill className="h-10 p-2 w-10" />
                      </button>
                    </div>
                  </div>
                  <div className="border flex justify-between rounded-full px-10 py-3">
                    <div className="flex flex-col gap-2">
                      <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                        This Is Article Title
                      </button>
                      <h1 className="text-xs text-gray-500">
                        Kamis, 23 April 2022 13.42
                      </h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <AiFillDelete className="h-10 p-2 w-10" />
                      </button>
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <RiEditFill className="h-10 p-2 w-10" />
                      </button>
                    </div>
                  </div>
                  <div className="border flex justify-between rounded-full px-10 py-3">
                    <div className="flex flex-col gap-2">
                      <button className="font-semibold text-xl text-black hover:text-blue-300 hover:underline">
                        This Is Article Title
                      </button>
                      <h1 className="text-xs text-gray-500">
                        Kamis, 23 April 2022 13.42
                      </h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <AiFillDelete className="h-10 p-2 w-10" />
                      </button>
                      <button className="bg-blue-500 text-sm m-1 text-white rounded-full border-blue-500 border hover:bg-white hover:text-blue-500">
                        <RiEditFill className="h-10 p-2 w-10" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutDashboard>
    </div>
  );
}
