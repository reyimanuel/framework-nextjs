import React from "react";
import { MdMenu } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white focus:outline-none">
            <MdMenu className="h-6 w-6" />
          </button>
          <h1 className="ml-2 md:ml-0 text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gray-700 rounded-full p-2">
            <span className="text-sm font-medium">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}