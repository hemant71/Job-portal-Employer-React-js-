import React, { useState } from "react";
import { FaBell, FaInstagram } from "react-icons/fa";
import { ChevronDown, ArrowRight, Layers, User, PlusCircle, Briefcase, Bookmark, CreditCard, Users, Settings, LogOut } from "lucide-react";
import { RadioGroup } from "@headlessui/react";
import JobPromotion from "./JobPromotion";

const PostJobForm = () => {
  const [applyMethod, setApplyMethod] = useState("Jobpilot");
  const [selectedJob, setSelectedJob] = useState(null);

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
          <InputField label="Description" placeholder="Add your job description..." textarea />
          <InputField label="Responsibilities" placeholder="Add your job responsibilities..." textarea />
          <div className="flex justify-end mt-6">
            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center"
              onClick={() => setSelectedJob("Your Job Title")}
            >
              Post Job <ArrowRight className="ml-2" size={18} />
            </button>
          </div>
        </div>
      </div>
      {selectedJob && <JobPromotion jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />}
    </div>
  );
};

const Navbar = () => (
  <div className="flex items-center justify-between p-2">
    <img src="/public/Group_8-removebg-preview 1.png" alt="TechnoHire Logo" className="h-18 w-50" />
    <div className="flex items-center space-x-4 mr-96">
      <FaBell />
      <button className="border border-blue-400 px-4 py-2 text-blue-400 font-bold rounded">Post A Job</button>
      <FaInstagram className="h-8 w-8 text-pink-500 cursor-pointer" />
    </div>
  </div>
);

const Sidebar = () => (
  <div className="w-64 bg-white p-4 shadow-md min-h-screen">
    <h2 className="text-gray-600 font-semibold mb-4">EMPLOYERS DASHBOARD</h2>
    <nav>
      {menuItems.map((item) => (
        <a key={item.label} href={item.link} className={`flex items-center p-3 rounded-lg hover:bg-gray-100 ${item.active ? "bg-purple-100 text-purple-600" : "text-gray-700"}`}>
          <item.icon size={18} className="mr-3" />
          {item.label}
        </a>
      ))}
    </nav>
    <div className="mt-6 pt-4 border-t">
      <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
        <LogOut size={18} className="mr-3" /> Log-out
      </a>
    </div>
  </div>
);

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
