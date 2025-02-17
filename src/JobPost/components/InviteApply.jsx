import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";

const InviteApply = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState(
    "Hi Ronald Richards,\nI'm Esther Howard from XYZ Company.\nI came across your profile and was really impressed.\nDo you have some time for a quick interview? Let me know what works for you.\n\nLooking forward to connecting!\nBest,\nEsther Howard"
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Invitation to Apply</h2>
          <button onClick={onClose} className="text-gray-500">
            <X size={20} />
          </button>
        </div>

        {/* Title Dropdown */}
        <div className="mt-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Title</label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="">Select...</option>
            <option value="Software Engineer">Software Engineer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>

        {/* Message Input */}
        <div className="mt-4">
          <label className="block text-gray-600 text-sm font-medium mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 h-32"
          />
        </div>

        {/* Rich Text Editor Buttons */}
        <div className="mt-2 flex space-x-3 text-gray-500 text-sm">
          <button className="hover:text-purple-500">B</button>
          <button className="hover:text-purple-500">I</button>
          <button className="hover:text-purple-500">U</button>
          <button className="hover:text-purple-500">S</button>
          <button className="hover:text-purple-500">🔗</button>
          <button className="hover:text-purple-500">☰</button>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md flex items-center">
            Send Message <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteApply;
