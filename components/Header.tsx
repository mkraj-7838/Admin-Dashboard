"use client";
import { Menu, Search, X, Bell, Settings, Mail } from "lucide-react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const Header = ({
  isSidebarOpen,
  setIsSidebarOpen,
  activeItem,
  setActiveItem,
}: HeaderProps) => {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#eaf1fb] z-20 shadow">
      <div className="flex items-center justify-center px-4 py-3 gap-30">
        {/* Left: Menu and dropdown */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="text-black hover:text-gray-800"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="bg-[#1e3a8a] text-white px-4 py-2 rounded-md flex items-center gap-2">
            <span>All Candidates</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Search input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
            />
            <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Right: Icons with badges */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <div className="relative">
            <div className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition-colors">
              <Bell size={20} />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">3</span>
          </div>

          {/* Settings */}
          <div className="relative">
            <div className="bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors">
              <Settings size={20} />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">1</span>
          </div>

          {/* Mail */}
          <div className="relative">
            <div className="bg-teal-600 p-2 rounded-full text-white hover:bg-teal-700 transition-colors">
              <Mail size={20} />
            </div>
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">9</span>
          </div>
        </div>
      </div>
    </header>
  );
};