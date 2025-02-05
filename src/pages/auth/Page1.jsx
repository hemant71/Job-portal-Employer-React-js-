import React from "react";
import Upload from "../../assets/Upload.png";
import ArrowDown from "../../assets/ArrowDown.png";

const Page1 = () => {
    return (
        <div className="flex flex-col items-center gap-6">

            <img src={Upload} alt="Upload" className="w-[160px] h-[160px]" />

            <input
                type="text"
                placeholder="Company Name"
                className="w-full py-2 pl-4 pr-4  border-gray-300 border rounded-lg"
            />

            {/* Two input fields */}
            <div className="flex gap-4 w-full">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Founded in"
                        className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg"
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                        <img src={ArrowDown} alt="Arrow Down" className="w-[10px] h-[5px]" />
                    </button>
                </div>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Type"
                        className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg "
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                        <img src={ArrowDown} alt="Arrow Down" className="w-[10px] h-[5px]" />
                    </button>
                </div>
            </div>

            {/* Two side-by-side input fields */}
            <div className="flex gap-4 w-full">
                <input
                    type="text"
                    placeholder="Size"
                    className="py-2 pl-4 pr-4 border border-gray-300 rounded-lg w-full"
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="py-2 pl-4 pr-4 border border-gray-300 rounded-lg w-full"
                />
            </div>

            {/* Textarea */}
            <textarea
                className="w-full h-32 p-2 border border-gray-300 rounded-lg "
                placeholder="About the company"
            ></textarea>
        </div>
    )
}

export default Page1