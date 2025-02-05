import React from "react";
import ArrowDown from "../../assets/ArrowDown.png";
import infosys from "../../assets/infosys.png";

const Page3 = () => {
    return (
        <div className="flex flex-col items-center gap-6">

            <img src={infosys} alt="." className="w-[160px] h-[160px]" />

            <input
                type="text"
                value="Infosys Limited"
                placeholder="Company Name"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded-lg"
            />

            {/* Two input fields */}
            <div className="flex gap-4 w-full">
                <div className="relative w-full">
                    <input
                        type="text"
                        value="2003"
                        placeholder="Type here..."
                        className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg "
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                        <img src={ArrowDown} alt="Arrow Down" className="w-[10px] h-[5px]" />
                    </button>
                </div>
                <div className="relative w-full">
                    <input
                        type="text"
                        value="IT Service & Consulting"
                        placeholder="Type here..."
                        className="w-full py-2 pl-4 pr-12 border border-gray-300 rounded-lg "
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                        <img src={ArrowDown} alt="Arrow Down" className="w-[10px] h-[5px]" />
                    </button>
                </div>
            </div>


            <div className="flex gap-4 w-full">
                <input
                    type="text"
                    value="2000-3000"
                    placeholder="year"
                    className="py-2 pl-4 pr-4 border border-gray-300 rounded-lg w-[49%]"
                />

            </div>
            <input
                type="text"
                value="Banglore"
                placeholder="Company Name"
                className="w-full py-2 pl-4 pr-4 border border-gray-300 rounded-lg"
            />



        </div>
    )
}

export default Page3