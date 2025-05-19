"use client";
import { Header } from "@/components/Header";
import { StatsCards } from "@/components/StatsCards";
import { AppliedJobsCard } from "@/components/cards/AppliedJobsCard";
import { EmployeesCard } from "@/components/cards/EmployeesCard";
import { CandidatesCard } from "@/components/cards/CandidatesCard";
import { PayrollsCard } from "@/components/cards/PayrollsCard";
import { UserList } from "@/components/UserList";
import { mockData } from "@/data/mockData";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <main className="flex-1 p-6 lg:ml-5 pt-20 overflow-y-auto h-screen">
        {activeItem === "Employee Management" ? (
          <UserList />
        ) : (
          <>
            <StatsCards />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <AppliedJobsCard jobs={mockData.appliedJobs} />
              <EmployeesCard employees={mockData.employees} />
              <CandidatesCard candidates={mockData.candidates} />
              <PayrollsCard payrolls={mockData.payrolls} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}