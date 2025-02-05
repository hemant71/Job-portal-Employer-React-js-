import React, { useState } from "react";
import { FaBell, FaInstagram } from "react-icons/fa";
import { ChevronDown, ArrowRight, Layers, User, PlusCircle, Briefcase, Bookmark, CreditCard, Users, Settings, LogOut } from "lucide-react";
import { RadioGroup } from "@headlessui/react";

const menuItems = [
  { label: "Overview", icon: Layers, link: "#" },
  { label: "Employers Profile", icon: User, link: "#" },
  { label: "Post a Job", icon: PlusCircle, link: "#" },
  { label: "My Jobs", icon: Briefcase, link: "#" },
  { label: "Saved Candidate", icon: Bookmark, link: "#" },
  { label: "Plans & Billing", icon: CreditCard, link: "#" },
  { label: "All Companies", icon: Users, link: "#" },
  { label: "Settings", icon: Settings, link: "#" }
];

const PostJobForm = () => {
  const [applyMethod, setApplyMethod] = useState("Jobpilot");

  return (
    <div>
      <div className="flex">
        <div className="flex-1 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Post a job</h2>

          <InputField label="Job Title" placeholder="Add job title, role, vacancies etc" />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <InputField label="Tags" placeholder="Job keyword, tags etc..." />
            <Dropdown label="Job Role" placeholder="Select..." />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <InputField label="Min Salary" placeholder="Minimum salary..." />
            <InputField label="Max Salary" placeholder="Maximum salary..." />
            <Dropdown label="Salary Type" placeholder="Select..." />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <Dropdown label="Education" placeholder="Select..." />
            <Dropdown label="Experience" placeholder="Select..." />
            <Dropdown label="Job Type" placeholder="Select..." />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            <Dropdown label="Vacancies" placeholder="Select..." />
            <InputField label="Expiration Date" placeholder="DD/MM/YYYY" />
            <Dropdown label="Job Level" placeholder="Select..." />
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <label className="block text-gray-700 font-medium mb-2">Apply Job on:</label>
            <RadioGroup value={applyMethod} onChange={setApplyMethod} className="space-y-2">
              {["Jobpilot", "External Platform", "Your Email"].map((option) => (
                <RadioGroup.Option key={option} value={option}>
                  {({ checked }) => (
                    <div className={`flex items-center p-3 border rounded-lg cursor-pointer ${checked ? "border-purple-500 bg-purple-100" : "border-gray-300"}`}>
                      <div className={`w-5 h-5 mr-3 rounded-full border flex items-center justify-center ${checked ? "bg-purple-500" : "border-gray-400"}`}>
                        {checked && <div className="w-3 h-3 bg-white rounded-full" />}
                      </div>
                      <span className="text-sm">{option}</span>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>

          <InputField label="Description" placeholder="Add your job description..." textarea />
          <InputField label="Responsibilities" placeholder="Add your job responsibilities..." textarea />

          <div className="flex justify-end mt-6">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center">
              Post Job <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder, textarea }) => (
  <div className="mb-4">
    <label className="block text-gray-600 text-sm font-medium mb-1">{label}</label>
    {textarea ? (
      <textarea className="w-full border border-gray-300 rounded-lg p-2 h-24" placeholder={placeholder}></textarea>
    ) : (
      <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder={placeholder} />
    )}
  </div>
);

const Dropdown = ({ label, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-600 text-sm font-medium mb-1">{label}</label>
    <button className="w-full border border-gray-300 rounded-lg p-2 flex justify-between items-center">
      <span>{placeholder}</span>
      <ChevronDown size={16} />
    </button>
  </div>
);

export default PostJobForm;
