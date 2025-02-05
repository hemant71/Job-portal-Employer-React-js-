import React from "react";
import infosysBg from "../../assets/infosysBg.png";
import Verified from "../../assets/Verified.png";
import Calender from "../../assets/Calender.png";
import Vector from "../../assets/Vector.png";
import User from "../../assets/User.png";
import Mail from "../../assets/Mail.png";
import Location from "../../assets/Location.png";
import PhoneCall from "../../assets/PhoneCall.png";
import Globe from "../../assets/Globe.png";
import Fb from "../../assets/facebook.png";
import Twitter from "../../assets/Twitter.png";
import Linkedin from "../../assets/Linkedin.png";

const DetailsPage = () => {
    return (
        <div className="w-full flex flex-col items-center">
            {/* Top Section - Background Image */}
            <div className="relative w-full h-[400px]">
                <img src={infosysBg} alt="Infosys Banner" className="w-full h-full object-cover" />
            </div>

            {/* Bottom Section - Company Details */}
            <div className="w-full p-6 bg-white shadow-lg rounded-2xl mt-[-40px] relative flex flex-col items-center gap-6">
                {/* Company Name & Verification (Above Grid) */}
                <div className="w-full flex flex-col items-start items-center">
                    {/* Company Name & Verification (Aligned Left) */}
                    <div className="w-full max-w-xl m-5">
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl font-bold">Infosys Limited</h1>
                            <img src={Verified} alt="Verified" className="w-5 h-5" />
                        </div>
                        <p className="text-gray-500 text-sm mt-1">20k followers</p>
                    </div>

                    {/* 3x2 Company Info Grid (Aligned Left with Same Margin) */}
                    <div className="grid grid-cols-2 gap-4 mt-4 w-full max-w-xl">
                        {/* Founded Year */}
                        <div className="flex items-center gap-2">
                            <img src={Calender} alt="Calendar" className="w-5 h-5" />
                            <p>Founded in <span className="font-semibold">2003</span></p>
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center gap-2">
                            <img src={PhoneCall} alt="Phone" className="w-5 h-5" />
                            <p>+91 9834910231</p>
                        </div>

                        {/* IT Service & Consulting */}
                        <div className="flex items-center gap-2">
                            <img src={Vector} alt="Industry" className="w-5 h-5" />
                            <p className="text-gray-700">IT Service & Consulting</p>
                        </div>


                        {/* Email */}
                        <div className="flex items-center gap-2">
                            <img src={Mail} alt="Mail" className="w-5 h-5" />
                            <p>Infosys@gmail.com</p>
                        </div>

                        {/* Employees Count */}
                        <div className="flex items-center gap-2">
                            <img src={User} alt="Employees" className="w-5 h-5" />
                            <p>2000 - 3000 Employees</p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <img src={Location} alt="Location" className="w-5 h-5" />
                            <p>Bangalore, India</p>
                        </div>
                    </div>
                </div>


                {/* Description */}
                <div className="mt-6 px-6 text-center">
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-gray-600 mt-2">
                        Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey.Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journeyenterprises, we expertly steer our clients through their digital journey.
                        <br></br>
                        <br></br>
                        Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 50 countries to navigate their digital transformation. With over three decades of experience in managing the systems and workings of global enterprises, we expertly steer our clients through their digital journey.
                    </p>
                </div>

                {/* Website Link (Centered) */}
                <div className="mt-6 flex flex-col items-center">
                    <h2 className="text-xl font-semibold">Website Link</h2>
                </div>

                {/* Social Media Icons - 4 Icons Below Website */}
                <div className="mt-4 flex gap-4">
                    <a href="#" className="border p-2 rounded-lg hover:bg-gray-100">
                        <img src={Fb} alt="Facebook" className="w-10 h-10" />
                    </a>
                    <a href="#" className="border p-2 rounded-lg hover:bg-gray-100">
                        <img src={Globe} alt="Website" className="w-10 h-10" />
                    </a>
                    <a href="#" className="border p-2 rounded-lg hover:bg-gray-100">
                        <img src={Twitter} alt="Twitter" className="w-10 h-10" />
                    </a>
                    <a href="#" className="border p-2 rounded-lg hover:bg-gray-100">
                        <img src={Linkedin} alt="LinkedIn" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </div>


    );
};

export default DetailsPage;
