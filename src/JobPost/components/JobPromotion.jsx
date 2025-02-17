import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const JobPromotion = ({ jobTitle, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("featured");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-1/3 shadow-lg">
        {/* Success Message */}
        <div className="p-4 border border-purple-300 rounded-lg bg-purple-50 text-purple-700 mb-4">
          🎉 <strong>Congratulations, Your Job is successfully posted!</strong>
          <p className="text-sm">You can manage your job from the my-jobs section in your dashboard.</p>
          <button className="mt-2 px-4 py-2 text-purple-600 border border-purple-600 rounded-lg flex items-center">
            View Jobs <ArrowRight className="ml-2" size={18} />
          </button>
        </div>

        {/* Promotion Section */}
        <h2 className="text-xl font-bold">Promote Job: {jobTitle}</h2>
        <p className="text-gray-600 mt-2">
          Always On Top keeps your job listing prominently displayed, ensuring maximum visibility and attracting top talent faster.
        </p>

        <div className="mt-4 flex space-x-4">
          {/* Featured Job Card */}
          <div
            className={`border p-4 rounded-lg cursor-pointer w-1/2 ${
              selectedOption === "featured" ? "border-purple-600 bg-purple-100" : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("featured")}
          >
            <input type="radio" name="promotion" id="featured" checked={selectedOption === "featured"} className="hidden" />
            <label htmlFor="featured" className="font-medium flex items-center">
              <span className="w-4 h-4 border rounded-full border-purple-600 flex items-center justify-center mr-2">
                {selectedOption === "featured" && <span className="w-2 h-2 bg-purple-600 rounded-full"></span>}
              </span>
              Featured Your Job
            </label>
            <p className="text-gray-500 text-sm mt-1">Boost your job listing for maximum visibility.</p>
          </div>

          {/* Highlight Job Card */}
          <div
            className={`border p-4 rounded-lg cursor-pointer w-1/2 ${
              selectedOption === "highlight" ? "border-purple-600 bg-purple-100" : "border-gray-300"
            }`}
            onClick={() => setSelectedOption("highlight")}
          >
            <input type="radio" name="promotion" id="highlight" checked={selectedOption === "highlight"} className="hidden" />
            <label htmlFor="highlight" className="font-medium flex items-center">
              <span className="w-4 h-4 border rounded-full border-purple-600 flex items-center justify-center mr-2">
                {selectedOption === "highlight" && <span className="w-2 h-2 bg-purple-600 rounded-full"></span>}
              </span>
              Highlight Your Job
            </label>
            <p className="text-gray-500 text-sm mt-1">Highlight your job with color to attract more attention.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button onClick={onClose} className="text-gray-500">Skip Now</button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md flex items-center">
            Promote Job <ArrowRight className="ml-2" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPromotion;
