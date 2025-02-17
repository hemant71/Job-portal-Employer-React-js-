import React from "react";
import phone_icon from "../../assets/Phone.png";
import tech_icon from "../../assets/Tech.png";
import bell_icon from "../../assets/Bell.png";
import insta_icon from "../../assets/Insta.png";
import map_icon from "../../assets/Map.png";
const Contact = () => {
//   const colorData = {
//     "color1": "bg-[#f1f2f4]"
// };
// const NavData = ["Home", "Find Candidate", "Dashboard", "My Job", "Applications", "Customer Supports"];

// const [activeIndex, setActiveIndex] = useState(null);
// const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// const handleClick = (index) => {
//     setActiveIndex(index);
// };

// const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
// };
  return (

    <div id="root ">
      {/* Navbar */}
      {/* <nav className="bg-gray-200 text-black p-4 shadow-md"> */}
      <nav className="flex flex-col w-full  items-center space-x-6  ">
        {/* <div className="container mx-auto flex justify-between items-center"> */}
        <div className="md:flex md:flex-col md:w-full shadow-sm ">
          <div className=" flex justify-around items- bg-gray-100 ">
            <div className="flex justify-between md:p-2 ">
              <div className="flex md:p-2 ">
                {/* <ul className="hidden md:flex space-x-6"> */}
                <ul className="flex space-x-5 text-grey-500 flex-row gap-3 items-center min-h-full ">
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
                  <li >
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
                  {/* <div className="flex space-x-4"> */}
                  {/* <div className="right side flex flex-row gap-5 items-center min-h-full  space-x-2 "> */}
                  <div className='text-slate-600 text-[13px] flex flex-row gap-1 items-center min-h-full space-x-2'>
                    {/* <div className="flex space-x-3 items-center md:p-2"> */}
                    <div className='text-slate-600 text-[13px] flex flex-row  items-center min-h-full '>
                      <img src={phone_icon} alt="Phone Icon" />
                      <li>
                        <a
                          href="#contact"
                          className="hover:underline font-bold md:text-md px-2"
                        >
                          +1-202-555-0178
                        </a>
                      </li>
                    </div>
                    {/* <div className="font-sans bg-gray-100 flex justify-between"> */}
                    {/* <div className="flex space-x-2 items-center"> */}
                    <div className='text-slate-600 text-[13px] flex flex-row gap-1 items-center'>
                      <div className="flag mt-2">
                        {/* <img src={flag_icon} alt="flag Icon" /> */}

                        <img
                          src="https://flagcdn.com/us.svg"
                          alt="en"
                          width="25"
                          
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
      {/* <header className="flex space-x-6 bg-white border-b border-gray-200 shadow-sm"> */}
      <header className=" py-4 justify-around flex items-center  bg-gray-200 ">
        <div>Contact</div>
        <div><span className="text-gray-600">Home</span>/Contact</div>
      </header>
      <section className=" flex item-center justify-between bg-white  py-12 px-6 md:px-16 lg:px-32">
        {/* <div className="bg-black text-white py-12 px-6 md:px-16 lg:px-32"> */}
        <div className="max-w-80 ">
          <h2 className="text-purple-400 text-sm font-semibold uppercase tracking-wide">
            Who we are
          </h2>
          <h1 className="text-4xl font-bold mt-4 mb-6">
            We care about customer services
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Want to chat? We'd love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
          <button className="bg-purple-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            Email Support
          </button>
        </div>

        <div className="flex relative  justify-center items-center min-h-[40vh] bg-white">
          <div className="bg-white rounded-2xl px-6 py-4 shadow-xl w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Get in Touch
            </h2>
            <form>
              
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subjects"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition flex items-center justify-center"
              >
                Send Message
                <span className="ml-2">✈️</span>
              </button>
            </form>
          </div>
        </div>
        {/* </div> */}
      </section>
      <div>
        <img src={map_icon} alt="Map Icon" />
      </div>

      <section className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Newsletter Form */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-72 px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>

          {/* Statistics */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12 text-center">
            <div>
              <p className="text-2xl font-semibold">1,75,324</p>
              <p className="text-gray-400">Live Job</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">97,354</p>
              <p className="text-gray-400">Companies</p>
            </div>
            <div>
              <p className="text-2xl font-semibold">38,47,154</p>
              <p className="text-gray-400">Candidates</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="container mx-auto my-12 p-6 text-center">
        <div className="flex space-x-6 items-center">
          <img src={tech_icon} alt="Tech Icon" />
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">Quick Link</h3>
            <ul className="list-none pl-0">
            {/* <ul className="grid grid-cols-4 gap-4"> */}
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">Candidate</h3>
            <ul className="list-none pl-0">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Browse Jobs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Browse Employers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Saved Jobs
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">Employers</h3>
            <ul className="list-none pl-0">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Post a Job
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Browse Candidates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Employers Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Applications
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <ul className="list-none pl-0">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Faqs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
