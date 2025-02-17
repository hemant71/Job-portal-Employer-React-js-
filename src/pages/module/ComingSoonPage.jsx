import React from "react";
import Illustration from "../../assets/Illustration.png";
import fb from "../../assets/fb.png";
import envelope from "../../assets/Envelope.png";
import Insta from "../../assets/Insta.png";
import Yt from "../../assets/Yt.png";
import Twits from "../../assets/Twit.png";
import Continue from "../../assets/Continue.png";

const ComingSoonPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-7xl m-auto h-[700px] mt-10">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 ">
                {/* Left Side */}
                <div className="flex flex-col items-start text-left p-6 mr-10 gap-[32px]">
                    <h1 className="text-4xl font-bold mb-2">Our website is under<br />construction</h1>
                    <p className="text-gray-600 mb-4">
                        Our website is currently under construction—stay tuned for something exciting coming soon!
                    </p>

                    {/* Email Subscription */}
                    <div className="flex items-center justify-center space-x-2">
                        <div className="flex items-center relative h-[56px]">
                            <img src={envelope} alt="Email" className="absolute left-3 w-5 h-5" />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="pl-10 p-2 border border-gray-300 rounded-lg w-[312px] h-[56px]"
                            />
                        </div>
                        <button
                            className="flex items-center justify-center gap-2 p-4 bg-violet-700 border border-gray-300 rounded-md w-[179px] h-[56px] hover:bg-violet-800 transition"
                        >
                            <span className="text-white">Subscribe</span>
                            <img src={Continue} alt="Continue" className="size-4 ml-3" />
                        </button>
                    </div>


                </div>

                {/* Right Side - Illustration */}
                <div className="hidden md:flex flex-col items-center justify-center p-2">
                    <img src={Illustration} alt="Illustration" className="w-[896px] h-[672px]" />
                </div>
            </div>

            {/* Bottom Navbar */}
            <div className="w-full py-4 mt-auto flex flex-col md:flex-row items-center justify-between px-10">
                {/* Follow Us Section */}
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-gray-600">Follow us</p>
                    <div className="flex space-x-4 mt-2">
                        {[fb, Twits, Insta, Yt].map((icon, index) => (
                            <div
                                key={index}
                                className="p-3 bg-blue-400 bg-opacity-20 rounded-lg transition duration-300 hover:border hover:border-violet-700 h-[40px] w-[40px]"
                            >
                                <img src={icon} alt="Social Icon" className="w-5 h-5" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Copyright Text */}
                <p className="text-gray-600 mt-4 md:mt-0">@ 2024 TechnoHire - Job Portal. All rights Reserved</p>
            </div>
        </div>
    );
};

export default ComingSoonPage;
