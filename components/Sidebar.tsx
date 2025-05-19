"use client";
import {
  Mail,
  Briefcase,
  Users,
  LogOut,
  BarChart3,
  FileText,
  Scale,
  CreditCard,
  Calendar,
  User,
  X,
} from "lucide-react";
import { useAuth } from "../app/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  setActiveItem: (item: string) => void;
}

export const Sidebar = ({
  isOpen,
  onClose,
  activeItem,
  setActiveItem,
}: SidebarProps) => {
  const menuItems = [
    { name: "Dashboard", icon: BarChart3, badge: null },
    { name: "Messages", icon: Mail, badge: 10 },
    { name: "Jobs", icon: Briefcase, badge: null },
    { name: "Candidates", icon: Users, badge: null },
    { name: "Resumes", icon: FileText, badge: null },
  ];

  const organizationItems = [
    { name: "Employee Management", icon: User, badge: null },
    { name: "Leave Management", icon: Calendar, badge: null },
    { name: "Performance Management", icon: Scale, badge: null },
  ];

  const payItems = [
    { name: "Payroll Management", icon: CreditCard, badge: null },
  ];

  const { user, name, logout, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [user, router]);

  if (!isAuthenticated()) {
    return null;
  }

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white flex flex-col z-40 transition-transform duration-300 lg:translate-x-0 lg:static ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="mt-3 p-3 border-b border-slate-800 flex flex-col items-center justify-center relative">
        <div className="flex flex-col items-center justify-center space-y-3 p-4">
          <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://greenway.sasroman.co/wp-content/uploads/2019/04/Avater-4.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-base">{name || "Admin"}</h3>
            <p className="text-slate-400 text-sm">Admin</p>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-3 right-3 lg:hidden text-white">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 hide-scrollbar">
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        <div className="mb-6">
          <h4 className="text-slate-400 text-xs font-medium mb-3">Features</h4>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-2 rounded-md ${
                  activeItem === item.name
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                } transition-colors duration-200`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={18} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>


        <div className="mb-6">
          <h4 className="text-slate-400 text-xs font-medium mb-3">
            Organization
          </h4>
          <nav className="space-y-1">
            {organizationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  onClose();
                }}
                className={`w-full flex items-center space-x-2 p-2 rounded-md ${
                  activeItem === item.name
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                } transition-colors duration-200`}
              >
                <item.icon size={18} />
                <span className="font-medium text-sm">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-slate-400 text-xs font-medium mb-3">Pay</h4>
          <nav className="space-y-1">
            {payItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  onClose();
                }}
                className={`w-full flex items-center space-x-2 p-2 rounded-md ${
                  activeItem === item.name
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                } transition-colors duration-200`}
              >
                <item.icon size={18} />
                <span className="font-medium text-sm">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => {
            logout?.();
            onClose();
          }}
          className="w-full bg-red-600 hover:bg-red-700 text-white p-2 rounded-md flex items-center justify-center space-x-2 transition-colors duration-200"
        >
          <LogOut size={18} />
          <span className="font-medium text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
};