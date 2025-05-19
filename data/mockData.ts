export const mockData = {
    stats: {
    messages: 138,
    jobs: 50,
    candidates: 100,
  },
  appliedJobs: [
    {
      id: 1,
      title: "Sales Executive",
      company: "Access Bank",
      logo: "🏦",
      timeAgo: "20mins ago",
    },
    {
      id: 2,
      title: "User Experience Designer",
      company: "Paystack",
      logo: "💳",
      timeAgo: "10mins ago",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Pay",
      logo: "🏢",
      timeAgo: "5mins ago",
    },
  ],
  employees: [
    {
      id: 1,
      name: "John Doe",
      role: "Product Manager",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Ginna Lee",
      role: "Sales Executive",
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "John Dore",
      role: "UI UX Designer",
      avatar: "👨‍🎨",
    },
  ],
  candidates: [
    {
      id: 1,
      name: "John Doe",
      appliedFor: "Product Manager",
      score: 90,
      status: "high",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Ginna Lee",
      appliedFor: "Sales Executive",
      score: 89,
      status: "medium",
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "James Foe",
      appliedFor: "Product Manager",
      score: 85,
      status: "high",
      avatar: "👨‍💻",
    },
  ],
  payrolls: [
    {
      id: 1,
      name: "John Doe",
      amount: "₦800,000",
      status: "Paid",
      avatar: "👨‍💼",
    },
    {
      id: 2,
      name: "Ginna Lee",
      amount: "₦750,000",
      status: "Processing",
      avatar: "👩‍💼",
    },
    {
      id: 3,
      name: "James Foe",
      amount: "₦650,000",
      status: "Processing",
      avatar: "👨‍💻",
    },
  ],
}


export type AppliedJob = typeof mockData.appliedJobs[0];
export type Employee = typeof mockData.employees[0];
export type Candidate = typeof mockData.candidates[0];
export type Payroll = typeof mockData.payrolls[0];