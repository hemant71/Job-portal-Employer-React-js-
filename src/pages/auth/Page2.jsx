import React from "react";
import ArrowDown from "../../assets/ArrowDown.png";
const Page2 = () => {
    return (
        <div className="flex flex-col items-center gap-8 mt-5 mb-5">

            <input
                type="text"
                placeholder="Full Name"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Date of Birth"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded"
            />
            <div className="relative w-full">
                <input
                    type="text"
                    placeholder="Gender"
                    className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded "
                />
                <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                    <img src={ArrowDown} alt="Arrow Down" className="size-3" />
                </button>
            </div>
            <input
                type="text"
                placeholder="Contact Number"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded"
            />
            <input
                type="text"
                placeholder="Email Address"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded"
            />
        </div>
    )
}

export default Page2