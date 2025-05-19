import { MoreVertical, Briefcase } from "lucide-react";
import { AppliedJob } from "../../data/mockData";

interface AppliedJobsCardProps {
  jobs: AppliedJob[];
}

export const AppliedJobsCard = ({ jobs }: AppliedJobsCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-bottom-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">Applied Jobs</h3>
        <MoreVertical size={20} className="text-gray-400 hover:text-gray-600 hover:scale-110 hover:rotate-12 transition-all duration-200" />
      </div>

      <div className="space-y-3">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100 hover:scale-[1.03] hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center space-x-4">
              <Briefcase
                size={24}
                className="text-indigo-600 hover:scale-125 hover:rotate-12 transition-transform duration-300"
              />
              <div>
                <h4 className="font-bold text-base text-gray-900">{job.title}</h4>
                <p className="text-sm text-gray-600 font-medium">{job.company}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500 font-semibold">{job.timeAgo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};