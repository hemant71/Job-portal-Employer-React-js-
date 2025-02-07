import React from "react"
import { Link } from "react-router-dom";
import Page1 from "../../assets/Page1.png";
import PhoneCall from "../../assets/PhoneCall.png";
import Background from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Continue from "../../assets/Continue.png";
import EyeIcon from "../../assets/Eye.png";
import Circle from "../../assets/Circle.png";

const ResetPassword = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex z-[9999] bg-white">

            {/* Circle at Top Left */}
            <img
                src={Circle}
                alt="Decorative Circle"
                className="absolute w-[32px] h-[32px] mt-5 ml-5"
            />
            {/* Left Side - Forget Password Form */}
            <div className="w-[50%]">
                <div className="flex flex-col justify-center items-center mt-[25%]">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-3">Reset Password</h2>
                    <p className="text-gray-500 text-center mb-20">
                        Set a new password to access your account
                    </p>

                    {/* Input Field */}
                    <div className=" flex flex-col w-full max-w-2xl gap-5">
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border p-3 w-full rounded"
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                                <img src={EyeIcon} alt="Arrow Down" className="size-5" />
                            </button>
                        </div>
                        <div className="relative w-full">
                            <input
                                type="password"
                                placeholder="Password"
                                className="border p-3 w-full rounded"
                            />
                            <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800">
                                <img src={EyeIcon} alt="Arrow Down" className="size-5" />
                            </button>
                        </div>
                    </div>


                    {/* Reset Password Button */}
                    <button className="w-full max-w-sm flex items-center justify-center bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-800 transition mt-4">
                        <span>Reset Password</span>
                        <img src={Continue} alt="Continue" className="size-4 ml-2" />
                    </button>

                    {/* Go Back to Login */}
                    <div className="w-full max-w-sm m-10 text-center">
                        <span>Go Back to </span>
                        <Link to="/login" className="text-violet-900 hover:underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
            {/* Right Side - Logo Background */}
            <div
                className="w-[50%] h-full bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${Background})` }}
            >
                <img src={Logo} alt="Logo" />
            </div>
        </div>


    )
}

export default ResetPassword 