import { MoreVertical, User2, CheckCircle, Clock } from "lucide-react";
import { Payroll } from "../../data/mockData";

interface PayrollsCardProps {
  payrolls: Payroll[];
}

export const PayrollsCard = ({ payrolls }: PayrollsCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-500";
      case "Processing":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return CheckCircle;
      case "Processing":
        return Clock;
      default:
        return Clock;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">April Payrolls</h3>
        <MoreVertical size={20} className="text-gray-400 hover:text-gray-600 hover:scale-110 hover:rotate-12 transition-all duration-200" />
      </div>

      <div className="space-y-3">
        {payrolls.map((payroll) => {
          const StatusIcon = getStatusIcon(payroll.status);
          return (
            <div
              key={payroll.id}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center space-x-4">
                <User2
                  size={24}
                  className="text-indigo-600 hover:scale-125 hover:rotate-12 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-bold text-base text-gray-900">{payroll.name}</h4>
                  <p className="text-sm text-gray-600 font-medium">
                    Salary Amount: <span className="font-semibold">{payroll.amount}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`px-3 py-1 ${getStatusColor(
                    payroll.status
                  )} text-white rounded-lg text-sm font-bold flex items-center space-x-1 hover:scale-110 hover:shadow-sm transition-all duration-300`}
                >
                  <StatusIcon size={16} className="hover:rotate-45 transition-transform duration-300" />
                  <span>{payroll.status}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};