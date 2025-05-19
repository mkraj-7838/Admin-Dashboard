"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, Search, X, Bell, Settings, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    const [searchFocused, setSearchFocused] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Dropdown animation variants
    const dropdownVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
        closed: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.15,
                ease: "easeInOut",
            },
        },
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-20 shadow-md border-b border-gray-200">
            <div className="flex items-center justify-center px-4 py-3 gap-4 md:gap-80">
                {/* Left: Menu and dropdown */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                    >
                        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Custom Dropdown */}
                    <div ref={dropdownRef} className="relative inline-block">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2
                                       hover:bg-blue-700 transition-colors duration-200
                                       font-medium text-sm"
                        >
                            <span>All Candidates</span>
                            <svg
                                className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    variants={dropdownVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200
                                               overflow-hidden z-10"
                                >
                                    <div
                                        className="py-1"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="options-menu"
                                    >
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => {
                                                setActiveItem("Recent Candidates");
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Recent Candidates
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => {
                                                setActiveItem("Shortlisted Candidates");
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            Shortlisted Candidates
                                        </button>
                                        <button
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                            role="menuitem"
                                            onClick={() => {
                                                setActiveItem("All Candidates");
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            All Candidates
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Search input */}
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Search..."
                            className={`pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full
                                       transition-all duration-300 ${searchFocused ? "w-64" : "w-56"}`}
                            onFocus={() => setSearchFocused(true)}
                            onBlur={() => setSearchFocused(false)}
                        />
                        <Search
                            size={18}
                            className={`absolute right-3 top-2.5 text-gray-400 transition-colors ${searchFocused ? "text-blue-500" : ""}`}
                        />
                    </div>
                </div>

                {/* Right: Icons with badges */}
                <div className="flex items-center gap-3 md:gap-5">
                    {/* Notification */}
                    <div className="relative">
                        <button className="bg-blue-700 p-2 rounded-full text-white hover:bg-blue-800 transition-colors">
                            <Bell size={20} />
                        </button>
                        <span className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white animate-ping-slow">
                            3
                        </span>
                    </div>
                    {/* Settings */}
                    <div className="relative">
                        <button className="bg-orange-600 p-2 rounded-full text-white hover:bg-orange-700 transition-colors">
                            <Settings size={20} />
                        </button>
                        <span className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">
                            1
                        </span>
                    </div>
                    {/* Mail */}
                    <div className="relative">
                        <button className="bg-teal-600 p-2 rounded-full text-white hover:bg-teal-700 transition-colors">
                            <Mail size={20} />
                        </button>
                        <span className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">
                            9
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

