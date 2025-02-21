import React from "react";
import phone_icon from "../../assets/Phone.png";
import FooterTerm from "./Footer/FooterTerm";
import bell_icon from "../../assets/Bell.png";
import insta_icon from "../../assets/Insta.png";
const Contact = () => {
  return (
    <div id="root">
      {/* Navbar */}
      {/* <nav className="bg-gray-200 text-black p-4 shadow-md"> */}
      <nav className="flex  ">
        {/* <div className="container mx-auto flex justify-between items-center"> */}
        <div className="md:flex md:flex-col md:w-full shadow-sm">
          <div className=" bg-gray-100">
            <div className="flex justify-between md:mx-[100px] md:p-2">
              <div className="flex md:p-2">
                {/* <ul className="hidden md:flex space-x-6"> */}
                <ul className="flex space-x-5 text-grey-500">
                  <li>
                    {/* <a href="#about" className="hover:underline"> */}
                    <a
                      arial-current="page"
                      class=" hover:text-violet-700"
                      data-discover="true"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    {/* <a href="#services" className="hover:underline"> */}
                    <a
                      className="hover:text-violet-700"
                      href="find candidate"
                      data-discover="true"
                    >
                      Find Job
                    </a>
                  </li>
                  <li>
                    <a href="#why-choose-us" className="hover:underline">
                      Employers
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="hover:underline">
                      Candidates
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:underline">
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:underline">
                      Customer Supports
                    </a>
                  </li>
                  {/* <div className="font-sans bg-gray-100 flex justify-between "> */}
                  <div className="flex space-x-4">
                    <div className="flex space-x-3 items-center md:p-2">
                      <img src={phone_icon} alt="Phone Icon" />
                      <li>
                        <a
                          href="#contact"
                          className="hover:underline font-semibold md:text-md"
                        >
                          +1-202-555-0178
                        </a>
                      </li>
                    </div>
                    {/* <div className="font-sans bg-gray-100 flex justify-between"> */}
                    <div className="flex space-x-2 items-center">
                      <div className="flag mt-2">
                        {/* <img src={flag_icon} alt="flag Icon" /> */}

                        <img
                          src="https://flagcdn.com/us.svg"
                          alt="en"
                          width="25"
                          class
                        />
                      </div>
                      <select className="md:text-md outline-none text-grey-500 bg-grey-100 md:p-1 rounded">
                        <img src="https://flagcdn.com/us.svg" />
                        <option value="en">English</option>
                        <img src="https://flagcdn.com/fr.svg" />
                        <option value="en">French</option>
                        <img src="https://flagcdn.com/de.svg" />
                        <option value="en">German</option>
                        <img src="https://flagcdn.com/w320/us.png" />
                        <option value="en">USA</option>
                        <img src="https://flagcdn.com/w320/in.png" />
                        <option value="en">India</option>
                      </select>
                      {/* <li>
              <a href="#contact" className="hover:underline">
                English
              </a>
            </li> */}
                      {/* <img src={down_icon} alt="down Icon" /> */}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center md:space-x-96 md:ml-[100px] bg-white">
            <img
              src="https://www.technokrate.com/img/Techknokrate%20logo%202.png"
              alt="Logo"
              class="h-24 cursor-pointer mr-4"
            />
            <div className="flex items-center space-x-6 bg-white">
              <img src={bell_icon} alt="Bell Icon" />
              <button className="px-6 py-2 bg-purple-600 text-white font-bold rounded-md border-2 border-purple-600 hover:bg-purple-700 transition">
                Post A Job
              </button>
              <img src={insta_icon} alt="Insta Icon" />
            </div>
          </div>
          <hr className="text-grey-600" />
        </div>
      </nav>
      
      <div className="container mx-auto p-6 bg-white text-grey-100">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-black-400">01.</span> Terms & Conditions
            </h2>
            <p className="text-grey-300 mb-4">
              Praesent placerat dictum elementum. Nam pulvinar urna vel lectus
              maximus, eget faucibus turpis hendrerit. Sed iaculis molestie
              arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus
              bibendum. Duis sit amet eros mollis, viverra ipsum sed, convallis
              sapien. Donec justo erat, pulvinar vitae dui ut, finibus euismod
              enim. Donec velit tortor, mollis eu tortor euismod, gravida
              lacinia arcu.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-grey-400">
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>
                Curabitur luctus sapien augue, mattis faucibus nisl vehicula
                nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum,
                sagittis malesuada nulla vulputate et.
              </li>
              <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-black-400">02.</span> Limitations
            </h2>
            <p className="text-grey-300 mb-4">
              In pretium est sit amet diam feugiat eleifend. Curabitur
              consectetur fringilla metus. Morbi hendrerit facilisis tincidunt.
              Sed condimentum lacinia arcu. Ut ut iaculis metus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-grey-400">
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Curabitur luctus sapien augue.</li>
              <li>Mattis faucibus nisl vehicula nec, Mauris at scelerisque lorem.</li>
              <li>Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
              <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-black-400">03.</span> Security
            </h2>
            <p className="text-grey-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ex neque, elementum eu blandit in, ornare eu purus. Fusce eu
              rhoncus mi, quis ultrices lacus. Phasellus id pellentesque nulla.
              Cras erat nisi, mattis et efficitur et, iaculis a lacus. Fusce
              gravida augue quis leo facilisis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-black-400">04.</span> Privacy Policy
            </h2>
            <p className="text-grey-300 mb-4">
              Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
              Aliquam metus mauris, semper eu eros vitae, blandit tristique
              metus. Vestibulum maximus nec justo sed maximus.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-grey-400">
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>
                Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis
                malesuada nulla vulputate et.
              </li>
              <li>Aenean vel metus leo.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="lg:w-1/4 bg-white p-6 rounded-small shadow-lg">
          <h2 className="text-xl font-bold text-grey-600 mb-4">TABLE OF CONTENTS</h2>
          <ul className="space-y-2 text-grey-300">
            <p>01. Terms & Conditions</p>
            <p>02. Limitations</p>
            <p>03. Security</p>
            <p>04. Privacy Policy</p>
          </ul>
        </div>
      </div>
    </div>
      <FooterTerm />
      </div>
  );
};

export default Contact;