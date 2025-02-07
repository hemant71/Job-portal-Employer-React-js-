import React from "react";
import Correct from "../assets/Correct.png";
import logo from "../assets/Logo.png";
import image from "../assets/flag.png";
import PhoneCall from "../assets/PhoneCall.png";
import Down from "../assets/Down.png"
const Header = () => {
    return (
        <div className="flex w-[100vw] h-[93px] relative justify-between border-b border-gray-300 shadow-md pl-10 pb-2">
            <div>
                <img src={logo} alt="." />
            </div>
            <div className="flex items-center gap-10 px-[51px] py-[20px]">
                <div className="flex gap-3">
                    <img src={PhoneCall} alt="." className="size-5" />
                    <p>+1-202-555-0178</p>
                </div>
                <div className="flex gap-3 ">
                    <img src={image} alt="." className="size-5" />
                    <p>English</p>
                    <img src={Down} alt="." className="size-5" />
                </div>
            </div>
        </div>
    )
}

export default Header