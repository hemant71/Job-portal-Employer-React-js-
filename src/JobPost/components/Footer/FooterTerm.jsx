import React from 'react'
import tech_icon from "../../../assets/Tech.png";

const FooterTerm = () => {
  return (
    <section id="contact" className="container mx-auto my-12 p-6 text-center">
    <div className="flex space-x-6 items-center">
      <img src={tech_icon} alt="Tech Icon" />
      <div className="bg-white p-4 rounded-md">
        <h3 className="text-xl font-bold mb-2">Quick Link</h3>
        <ul className="list-none pl-0">
          <li className="mb-2">
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li className="mb-2">
            <a href="pricing" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="blog" className="hover:underline">
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
            <a href="/faqs" className="hover:underline">
              Faqs
            </a>
          </li>
          <li className="mb-2">
            <a href="/privacyPolicy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li className="mb-2">
            <a href="termsConditions" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default FooterTerm