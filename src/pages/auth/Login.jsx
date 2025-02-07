import React from "react"
import { Link } from "react-router-dom";
import Page1 from "../../assets/Page1.png";
import PhoneCall from "../../assets/PhoneCall.png";
import Background from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Facebook from "../../assets/facebook.png"
import Google from "../../assets/Google.png"
import Linkedin from "../../assets/Linkedin.png"
import Circle from "../../assets/Circle.png"

const Login = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen flex z-[9999] bg-white">

            {/* Circle at Top Left */}
            <img
                src={Circle}
                alt="Decorative Circle"
                className="absolute w-[32px] h-[32px] mt-5 ml-5"
            />

            {/* Left Side - Login Form */}
            <div className="w-[50%] flex flex-col justify-center items-center">
                {/* Title */}
                <h2 className="text-2xl font-semibold mb-10">
                    Login In to <span className="text-violet-600">TechnoHire</span>
                </h2>

                {/* Input Fields */}
                <div className="w-full max-w-2xl space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 w-full rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 w-full rounded"
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="w-full max-w-2xl flex justify-between items-center mt-3">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" className="accent-violet-600" />
                        <span>Remember Me</span>
                    </label>
                    <Link to="/forgetPassword">
                        <p className="text-violet-600 hover:underline">
                            Forget Password?
                        </p>
                    </Link>
                </div>

                {/* Login Button */}
                <button className="w-full h-[60px] max-w-lg bg-violet-600 text-white py-2 rounded-lg mt-6">
                    Login
                </button>

                {/* Or Login With */}
                <div className="flex items-center w-full max-w-sm my-5">
                    <div className="flex-grow h-[1px] bg-gray-300"></div>
                    <span className="mx-2 text-gray-500">Or Login with</span>
                    <div className="flex-grow h-[1px] bg-gray-300"></div>
                </div>

                {/* Social Login Buttons */}
                <div className="flex space-x-4">
                    <button className="border border-gray-400 p-2 rounded">
                        <img src={Facebook} alt="Facebook" className="w-5 h-5" />
                    </button>
                    <button className="border border-gray-400 p-2 rounded">
                        <img src={Google} alt="Google" className="w-5 h-5" />
                    </button>
                    <button className="border border-gray-400 p-2 rounded">
                        <img src={Linkedin} alt="LinkedIn" className="w-5 h-5" />
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="mt-5">
                    Don't have an account?{" "}
                    <a href="#" className="text-violet-600 hover:underline">
                        Sign Up
                    </a>
                </p>
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

export default Login 