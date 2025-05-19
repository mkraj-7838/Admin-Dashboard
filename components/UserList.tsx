import { MoreVertical, Eye, Edit, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import mockUserData from "../data/mockUser.json";

interface Employee {
  name: string;
  dept: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: string;
  email: string;
  phone: string;
  salary: number;
  employeeId: string;
  status: string;
  location: string;
  manager: string;
}

export const UserList = () => {
  const [employees] = useState<Employee[]>(mockUserData.employees);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Modal animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
      y: 100,
      rotateX: 15,
      transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.6, -0.05, 0.01, 0.99],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      y: 100,
      rotateX: -15,
      transition: { duration: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0, transition: { duration: 0.4 } },
    visible: { opacity: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4 sm:p-6 font-sans min-h-[calc(100vh-5rem)]">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">
          Employee Management
        </h2>
        <div className="flex items-center gap-3">
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
            aria-label="Filter"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h18M3 4l4 4M3 4l4-4m14 0l-4 4m4-4l-4-4" />
            </svg>
          </button>
          <button 
            className="bg-green-600 text-white px-4 sm:px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md shadow-sm"
          >
            <span className="text-sm sm:text-base font-bold">Export</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className={`overflow-x-auto rounded-lg border border-gray-200 transition-all duration-300 ${selectedEmployee ? 'blur-sm' : ''}`}>
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-3 sm:px-6 py-4 font-bold">Name(s)</th>
              <th className="px-3 sm:px-6 py-4 font-bold hidden sm:table-cell">Dept</th>
              <th className="px-3 sm:px-6 py-4 font-bold hidden md:table-cell">Job Title</th>
              <th className="px-3 sm:px-6 py-4 font-bold hidden lg:table-cell">Start Date</th>
              <th className="px-3 sm:px-6 py-4 font-bold hidden lg:table-cell">Category</th>
              <th className="px-3 sm:px-6 py-4 font-bold hidden xl:table-cell">Gender</th>
              <th className="px-3 sm:px-6 py-4 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr 
                key={index} 
                className={`border-b cursor-pointer transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-blue-50`}
                onClick={() => setSelectedEmployee(employee)}
              >
                <td className="px-3 sm:px-6 py-4 font-bold text-gray-800">{employee.name}</td>
                <td className="px-3 sm:px-6 py-4 font-semibold hidden sm:table-cell">{employee.dept}</td>
                <td className="px-3 sm:px-6 py-4 font-semibold hidden md:table-cell">{employee.jobTitle}</td>
                <td className="px-3 sm:px-6 py-4 font-semibold hidden lg:table-cell">{employee.startDate}</td>
                <td className="px-3 sm:px-6 py-4 font-semibold hidden lg:table-cell">{employee.category}</td>
                <td className="px-3 sm:px-6 py-4 font-semibold hidden xl:table-cell">{employee.gender}</td>
                <td className="px-3 sm:px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      className="bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-lg flex items-center gap-1 hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="font-bold">Actions</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <button 
                      className="p-1 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 hover:shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical size={16} className="text-gray-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Employee Details */}
      <AnimatePresence>
        {selectedEmployee && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="absolute inset-0 backdrop-blur-md"
              onClick={() => setSelectedEmployee(null)}
            />
            <motion.div 
              className="relative bg-white rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg shadow-2xl max-h-[80vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10">
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-800">Employee Details</h3>
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="p-1 rounded-full hover:bg-gray-100 transition-all duration-200 transform [hover]:scale-110 [hover]:shadow-md"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Employee ID</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.employeeId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Name</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Department</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.dept}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Job Title</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.jobTitle}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Start Date</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.startDate}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Category</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Gender</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Email</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Phone</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Salary</p>
                    <p className="text-gray-800 font-bold">${selectedEmployee.salary.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Status</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Location</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold">Manager</p>
                    <p className="text-gray-800 font-bold">{selectedEmployee.manager}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-3 sticky bottom-0 bg-white pt-4">
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all duration-200 transform hover:scale-105 hover:shadow-md font-bold"
                >
                  Close
                </button>
                <button 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-md font-bold"
                >
                  Edit Profile
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};