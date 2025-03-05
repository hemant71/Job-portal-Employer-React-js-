import React from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import Background from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import Continue from "../../assets/Continue.png";
import Circle from "../../assets/Circle.png"

const ForgetPassword = () => {
    const navigate = useNavigate(); // Initialize the navigation function

    const handleResetPassword = () => {
        navigate("/resetPassword"); // Navigate to resetPassword page
    };

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
                <div className="flex flex-col justify-center items-center mt-[25%]  ">
                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-2">Forget Password</h2>
                    <p className="text-gray-500 text-center mb-20">
                        Enter your registered email to receive a password reset link
                    </p>

                    {/* Input Field */}
                    <div className="w-full flex justify-center items-center max-w-2xl">
                        <input
                            type="email"
                            placeholder="Email"
                            className="border bg-[#F7F8F9] p-2 w-2/3 rounded"
                        />
                         
                    </div>
                    <span className="text-right text-[#7D7D7D]">Go Back to
                    <Link to="/login" className="text-right text-[#7900BA] ">
                            Login
                    </Link>
                         </span>
                   
                    {/* Go Back to Login */}
                    {/* <div className="w-1/2  mt-3 text-right">
                        <span className="text-[#7D7D7D]">Go Back to </span>
                       
                    </div> */}

                    {/* Reset Password Button */}
                    <button
                        onClick={handleResetPassword} // Added onClick
                        className="w-1/3  flex items-center justify-center bg-[#7900BA] text-white py-2 rounded-lg  transition mt-5"
                    >
                        <span>Reset Password</span>
                        <img src={Continue} alt="Continue" className="size-4 ml-2" />
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-[#7D7D7D] mt-5">
                        Don't have an account?{" "}
                        <a href="#" className="text-[#7900BA] font-semibold ">Sign Up</a>
                    </p>
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
    );
};

export default ForgetPassword;
