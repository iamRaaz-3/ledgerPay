"use client";

import { useState } from "react";

const tabs = [
  {
    id: "onboarding",
    title: "Employee Onboarding",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Manage your employees and stay on top of onboarding</h2>
        <p>Chart the right course for your payroll operations from the day you hire your first employee.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Effortless data migration" desc="Bring your existing data into the vault with minimal effort using pre-defined templates." />
          <Feature title="Employee hikes, increments, and appraisals" desc="Track increments and appraisals effortlessly, reflecting them automatically in payslips." />
          <Feature title="Salary history and designation" desc="Keep track of employees' career progression, salary history, and designations." />
          <Feature title="Streamlined employee self-service" desc="Reduce manual work by letting employees update their data via the self-service portal." />
        </div>
      </div>
    ),
  },
  {
    id: "administration",
    title: "Powerful Administration",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Streamline your administration tasks</h2>
        <p>Manage roles, permissions, and payroll efficiently with smart tools.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Straightforward setup" desc="Get your payroll up and running with simple setup steps." />
          <Feature title="Multiple work locations" desc="Manage payroll across all your branches seamlessly." />
          <Feature title="Personalized salary components" desc="Define earnings and reimbursements per employee." />
          <Feature title="Allowances that reflect your culture" desc="Tailor allowances that align with company culture." />
        </div>
      </div>
    ),
  },
  {
    id: "processing",
    title: "Payroll Processing",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Automate and complete your payroll processing in minutes</h2>
        <p>Stop spending weeks on payroll — get it done faster with automation.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Choose an industry-specific pay schedule" desc="Pick a routine that fits your business, from monthly to custom paydays." />
          <Feature title="Complete pay runs in a click" desc="Finish payroll quickly once setup is complete." />
          <Feature title="Add customized one-time earnings" desc="Plan bonuses or profit-sharing easily." />
          <Feature title="Apply custom deductions to payslips" desc="Handle pre-tax or post-tax deductions automatically." />
        </div>
      </div>
    ),
  },
  {
    id: "selfservice",
    title: "Self Service",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Self service your employees will love</h2>
        <p>Provide a secure, collaborative workspace for employees and payroll staff.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Keep everything in one place" desc="Centralize all pay and tax summaries in one portal." />
          <Feature title="Process employee reimbursements effortlessly" desc="Allow easy reimbursement submissions with receipts." />
          <Feature title="Password-protected employee documents" desc="Ensure all sensitive data remains secure." />
          <Feature title="Ace tax season with compliance documents" desc="Provide downloadable forms and tax summaries instantly." />
        </div>
      </div>
    ),
  },
  {
    id: "compliance",
    title: "Compliance and Reporting",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Keep payroll compliance easy amidst changing tax laws</h2>
        <p>Stay legally sound and generate tax-compliant payslips effortlessly.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Adapt to varying scenarios" desc="Account for tax law changes, pay grades, and components easily." />
          <Feature title="Build employees’ retirement chests" desc="Automate PF and retirement contributions accurately." />
          <Feature title="Deduct social security benefits taxes" desc="Keep your employees covered with regular contributions." />
          <Feature title="Collect professional tax accurately" desc="Automatically deduct and file professional taxes." />
        </div>
      </div>
    ),
  },
  {
    id: "benefits",
    title: "Benefits",
    content: (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Employee benefits that reflect your organization’s culture</h2>
        <p>Customize benefit plans that boost morale and provide security.</p>
        <button className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600">Start Trial</button>
        <div className="grid md:grid-cols-2 gap-6 pt-6">
          <Feature title="Manage employee insurances" desc="Handle medical, term, and vehicle insurance efficiently." />
          <Feature title="Salary advances" desc="Assist employees in times of need with salary advances." />
          <Feature title="Multiple loan types" desc="Manage car, house, or personal loans with configurable rates." />
          <Feature title="Personalized employee benefits" desc="Track ESOPs, fuel reimbursements, and other custom perks." />
        </div>
      </div>
    ),
  },
];

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 border rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}

export default function Tabs() {
  const [active, setActive] = useState("onboarding");

  return (
    <div className="p-6 max-w-7xl mx-auto mt-20">
      <nav className="flex flex-wrap justify-center gap-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`pb-2 border-b-2 transition ${
              active === tab.id
                ? "border-red-500 text-red-600 font-medium"
                : "border-transparent text-gray-600 hover:text-red-400"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </nav>

      <div className="mt-8">{tabs.find((t) => t.id === active)?.content}</div>
    </div>
  );
}
