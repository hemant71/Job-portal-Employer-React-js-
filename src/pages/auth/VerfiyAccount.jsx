import React, { useState } from "react";
import Icon from "../../assets/Background.png";
import Logo from "../../assets/loginLogo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineMailOutline  } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";


export default function VerifyAccount() {
 
  return (
    <div className="flex fixed top-0 left-0 bg-white w-screen h-screen">
      <div className="flex flex-col items-center justify-center gap-8 h-full w-1/2 px-14">
        <div className="flex flex-col items-center  gap-2">
                <p className="font-poppins text-[32px] ">Verify Your Account</p>
                <p className="font-poppins text-[15px] font-[400] text-[#666666]">Where should we send your verifcation code?</p>
        </div>
        <div className="flex flex-col gap-5">
                <div className="flex flex-col justify-center items-center gap-4 border-2 w-[400px] h-[130px] rounded-xl border-[#7900BA]">
                        <span className="inline-flex gap-3 items-center">
                                <FaPhoneAlt className="h-5 w-5 text-[#514E61]"/>
                                <p className="text-[18px] text-[#514E61] font-medium font-inter">+91 7317767796</p>
                                <GoPencil className="cursor-pointer h-5 w-5 text-[#514E61]"/>
                        </span>
                        <button className="h-9 font-inter font-semibold rounded-md text-white w-1/2 bg-[#7900BA] ">Select Phone</button>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 border-2 w-[400px] h-[130px] rounded-xl border-[#7900BA]">
                        <span className="inline-flex gap-3 items-center">
                                <MdOutlineMailOutline  className="h-6 w-6 text-[#514E61]"/>
                                <p className="text-[18px] text-[#514E61] font-medium font-inter">abcdefasfahdgsfdajdsfas@gmail.com</p>
                                <GoPencil className="cursor-pointer h-5 w-5 text-[#514E61]"/>
                        </span>
                        <button className="h-9 font-inter font-semibold rounded-md text-white w-1/2 bg-[#7900BA] ">Select Email</button>
                </div>
        </div>
        <div className="w-1/2 flex flex-col gap-5 justify-center items-center">
                <span className="font-poppins font[400] text-[#7D7D7D]">Go back to <Link to="/login" className="cursor-pointer text-[#7900BA]">login</Link></span>
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
