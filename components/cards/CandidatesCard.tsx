import { MoreVertical, Eye, User2 } from "lucide-react";
import { Candidate } from "../../data/mockData";

interface CandidatesCardProps {
  candidates: Candidate[];
}

export const CandidatesCard = ({ candidates }: CandidatesCardProps) => {
  const getScoreColor = (status: string) => {
    switch (status) {
      case "high":
        return "bg-indigo-600";
      case "medium":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Candidates</h3>
        <MoreVertical size={20} className="text-gray-400 hover:text-gray-600 hover:scale-110 hover:rotate-12 transition-all duration-200" />
      </div>

      <div className="space-y-3">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-4">
              <User2
                size={24}
                className="text-indigo-600 hover:scale-125 hover:rotate-12 transition-transform duration-300"
              />
              <div>
                <h4 className="font-bold text-base text-gray-900">{candidate.name}</h4>
                <p className="text-sm text-gray-600 font-medium">
                  Applied for: <span className="font-semibold">{candidate.appliedFor}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div
                className={`w-8 h-8 ${getScoreColor(
                  candidate.status
                )} rounded-full flex items-center justify-center hover:scale-125 hover:rotate-12 transition-transform duration-300`}
              >
                <span className="text-white text-sm font-bold">{candidate.score}</span>
              </div>
              <span className="text-sm text-gray-500 font-semibold">ATS Score(%)</span>
              <button className="p-2 bg-green-100 rounded-lg hover:bg-green-200 hover:scale-110 hover:shadow-sm transition-all duration-300">
                <Eye size={18} className="text-green-600 hover:rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};