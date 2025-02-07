import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube  } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { PiPlusCircleBold } from "react-icons/pi";

const socialPlatforms = [
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "YouTube", icon: <FaYoutube /> },
];

const SocialMediaProfile = () => {
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Twitter", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "YouTube", url: "" },
  ]);

  const handleInputChange = (index, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index].url = value;
    setSocialLinks(updatedLinks);
  };

  const handleRemove = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleAddNew = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const handleSave = () => {
    console.log("Saved Links:", socialLinks);
    alert("Social media links saved!");
  };

  return (
    <div className=" ">
      
      {socialLinks.map((link, index) => (
        <div key={index} className="flex items-center space-x-3 mb-4">
          <select
            className="p-2 border rounded-lg w-1/4"
            value={link.platform}
            onChange={(e) => {
              const updatedLinks = [...socialLinks];
              updatedLinks[index].platform = e.target.value;
              setSocialLinks(updatedLinks);
            }}
          >
            <option value="">Select Platform</option>
            {socialPlatforms.map((platform) => (
              <option key={platform.name} value={platform.name}>
                {platform.icon} {platform.name}
              </option>
            ))}
          </select>
          
          <input
            type="text"
            placeholder="Profile link/url..."
            className="p-2 border rounded-lg w-3/4"
            value={link.url}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          
          <button
            className="bg-[#F1F2F4] text-black p-2 rounded-lg hover:bg-gray-200"
            onClick={() => handleRemove(index)}
          >
            <GoXCircle />
          </button>
        </div>
      ))}

      <button
        className="flex items-center justify-center  font-semibold
          w-full bg-[#F1F2F4] p-2 rounded-lg text-gray-700 hover:bg-gray-300"
        onClick={handleAddNew}
      >
        <span className="text-2xl md:mr-1 font-semibold"><PiPlusCircleBold /> </span> Add New Social Link
      </button>

      <button
        className="w-[175px] mt-4 bg-[#7900BA] text-white p-3 rounded-lg hover:bg-purple-700"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default SocialMediaProfile;
