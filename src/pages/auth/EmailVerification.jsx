import React, { useState,useEffect } from "react";
import Icon from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
export default function EmailVerification() {
        const [code,setCode]=useState("")
        const initialTime = 120;
        // Retrieve the saved countdown time from localStorage (or fallback to initialTime if not available)
        const savedTime = localStorage.getItem('otpCountdown1') 
          ? parseInt(localStorage.getItem('otpCountdown1'))
          : initialTime;
      
        const [countdownTime, setCountdownTime] = useState(savedTime);
        const [isExpired, setIsExpired] = useState(false);
      
        // Start countdown when the component mounts
        useEffect(() => {
          if (countdownTime === 0) return;
      
          // Update the countdown every second
          const interval = setInterval(() => {
            setCountdownTime((prevTime) => {
              if (prevTime <= 1) {
                clearInterval(interval);
                setIsExpired(true);
                localStorage.removeItem('otpCountdown1'); // Clear saved time when expired
                return 0;
              }
              const newTime = prevTime - 1;
              localStorage.setItem('otpCountdown1', newTime); // Save the updated time in localStorage
              return newTime;
            });
          }, 1000);
      
          // Clean up interval when the component is unmounted
          return () => clearInterval(interval);
        }, [countdownTime]);
      
        const resendOtp = () => {
          alert("OTP has been resent!");
          setCountdownTime(initialTime);  // Reset the timer
          setIsExpired(false);            // Reset expiration status
          localStorage.setItem('otpCountdown1', initialTime); // Save the reset time
        };
  return (
    <div className="flex fixed top-0 left-0 bg-white w-screen h-screen">
      <div className="flex flex-col pb-20 pt-10 items-center justify-between h-full w-1/2 px-14">
        <div className="flex  flex-col items-center gap-2">
                <p className="inline-flex gap-8  items-center font-poppins text-[32px] font-medium "><span><MdArrowBackIos/></span>Email Verification</p>
                <p className="font-poppins text-[14px] font-[400] text-[#666666]">We've sent an verifcation to <b>emailaddress@gmail.com</b> to verify </p>
                <p className="font-poppins text-[15px] font-[400] text-[#666666]">your email address and activate your account.</p>
        </div>
        <img src='leftgirl.svg' className="w-[170px]" alt=""/>
        <div>
                <input value={code} onChange={(e)=>setCode(e.target.value)} className="px-7 outline-none text-sm border p-3 w-[500px] rounded" type="text" placeholder="Verification Code" />
                <p className="mt-1 text-right font-inter font-medium text-[13px] text-[#7D7D7D]">Did not receive any code! <span className="cursor-pointer text-[#7900BA]">Resend Code</span></p>
        </div>
        <p className="font-poppins text-[14px] font-[600] text-black">00:{countdownTime} Sec </p>

        <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
                <span className="font-poppins font[400] text-[#7D7D7D]">Go back to <Link to='/login' className="cursor-pointer text-[#7900BA]">login</Link></span>
                <button className="h-11 font-inter font-semibold rounded-md text-white w-full bg-[#7900BA]">Continue</button>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${Icon})` }}
        className="h-full w-1/2 bg-cover bg-no-repeat flex justify-center items-center"
      >
        <img src={Logo} alt="Logo" />
      </div>
      <div className="absolute top-5 left-5 h-[32px] w-[32px] bg-[#7900BA] rounded-full"></div>
    </div>
  );
}
