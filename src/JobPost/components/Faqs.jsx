import React from "react";
import FooterTerm from '../components/Footer/FooterTerm'
import phone_icon from "../../assets/Phone.png";
import tech_icon from "../../assets/Tech.png";

const Faqs = () => {
  return (
    <>
      <nav className="flex">
        <div className="md:flex md:flex-col md:w-full shadow-sm">
          <div className="bg-gray-100">
            <div className="flex justify-between md:mx-[100px] md:p-2">
              <div className="flex md:p-2">
                <ul className="flex space-x-5 text-grey-500">
                  <li>
                    <a aria-current="page" className="hover:text-violet-700" data-discover="true">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-violet-700" href="find candidate" data-discover="true">
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
                  <div className="flex space-x-4">
                    <div className="flex space-x-3 items-center md:p-2">
                      <img src={phone_icon} alt="Phone Icon" />
                      <li>
                        <a href="#contact" className="hover:underline font-semibold md:text-md">
                          +1-202-555-0178
                        </a>
                      </li>
                    </div>
                    <div className="flex space-x-2 items-center">
                      <div className="flag mt-2">
                        <img src="https://flagcdn.com/us.svg" alt="en" width="25" />
                      </div>
                      <select className="md:text-md outline-none text-grey-500 bg-grey-100 md:p-1 rounded">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="us">USA</option>
                        <option value="in">India</option>
                      </select>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="flex space-x-6 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src={tech_icon} alt="Tech Icon" />
            <div className="flex items-center border border-gray-300 shadow-sm rounded-md p-2 bg-white max-w-md mx-auto">
              <div className="flex items-center pr-4 border-r border-gray-300">
                <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-6 h-4 mr-2" />
                <select className="md:text-md outline-none text-grey-500 bg-grey-100 md:p-1 rounded">
                  <option value="in">India</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="us">USA</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 text-gray-500"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex items-center w-full pl-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-purple-500 mr-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm10-1l-4.35-4.35" />
                </svg>
                <input
                  type="text"
                  placeholder="Job title, keyword, company"
                  className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex space-x-4 p-4 bg-white">
              <button className="px-6 py-2 bg-white text-purple-500 font-bold rounded-md border-2 border-black hover:bg-gray-800 transition">
                Sign In
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white font-bold rounded-md border-2 border-purple-600 hover:bg-purple-700 transition">
                Post A Job
              </button>
            </div>
          </div>
        </div>
      </header>


      {/*section*/}
      <section id="contact" className="container  p-6 text-center">
        <div className="max-w-2xl mx-auto p-6 mb-4">
          <h1 className="text-3xl font-bold mt-6 text-left">Your Account</h1>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium ">
                    How do I create an account?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer mb-6">
                <div className=" bg-white rounded-md shadow-md p-4 cursor-pointer flex justify-between items-center">
                  <h3 className="text-purple-800 font-medium ">
                    How can I update my profile information?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
                <div>
                  {/* <br/> */}
                  <h3>
                    To update your profile information, go to the "Your Account"
                    section and click on "Edit Profile." Make the necessary
                    changes and save them to keep your details up to date.
                  </h3>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    What should I do if I forget my password?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">
                      How do I change my email address or contact details?
                    </h3>
                    <span className="text-gray-500">+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto  mt-6">
            <h2 className="text-2xl font-bold mb-4 text-left">
              Employers and Jobs
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    How do I post a new job listing?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    How can I search for jobs in my desired field or location?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    How do I promote my job listing to reach more candidates?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-6 ">
            <h3 className="text-2xl font-bold mb-4 text-left">
              Candidate & Resume
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    How do I set up job alerts for new opportunities?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    What file formats are accepted for resume uploads?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
              <div className="bg-white rounded-md shadow-md p-4 cursor-pointer">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">
                    How do I upload my resume to the portal?
                  </h3>
                  <span className="text-gray-500">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*section*/}
     <FooterTerm/>
      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-2">
        <p>@ 2024 TechnoHire- Job Portal. All rights Rserved</p>
      </footer>
    </>

  );
};

export default Faqs;

