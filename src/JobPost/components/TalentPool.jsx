import React, { useState } from 'react';
import InviteApply from './InviteApply';
import Footer from './Footer/Footer'
import Header from './header/MainHeader'

const TalentPool = () => {
    const [selectedItems, setSelectedItems] = useState('');
    const [search, setSearch] = useState('');
    const [Location, setLocation] = useState('');
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedSalary, setSalary] = useState(null);
    const [selectedPrefrence, setPrefrence] = useState(null);
    const [selectedEducation, setEducation] = useState(null);
    const [bookmark, setBookmark] = useState('/unbooked.svg');
    const [PageActive, setPageActive] = useState(null);
    const [showInviteApplyModal, setShowInviteApplyModal] = useState(false); // Add state for modal visibility
    const Pages = 5;

    const Skills = ["Html", "CSS", "JavaScript", "ReactJs"];
    const candidate = ["Fresher", "1-2 years", "2-4 years", "4-6 years", "10-15 years", "15+ years"];
    const Salary = ["5000-25000", "50000-65000", "100000-150000", "200000+"];
    const Prefrence = ["All", "Full Time", "Part Time", "Internship", "Remote", "Temporary"];
    const Education = ["HighSchool", "Intermediate", "Graduation", "Master Degree", "Bachelor Degree", "All"];

    const User = [
        { Name: "Guy Hawkins", img: "", role: "Senior UX Designer", experience: "7+ Years Experience", education: "Education: Master Degree", applied: "Applied:Jan 23 ,2022", skill: ["User Interface (UI) Design", "User Experience (UX) Design", "User Research", "Responsive Design"] },
        { Name: "Rebecca Watson", img: "", role: "Graphic Designer", experience: "7+ Years Experience", education: "Education: Master Degree", applied: "Applied:Jan 23 ,2022", skill: ["User Interface (UI) Design", "User Experience (UX) Design", "User Research", "Responsive Design"] }
    ];

    const handleSelectChange = (e) => {
        setSelectedItems(e.target.value);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleCheckCandidate = (index) => {
        setSelectedCandidate(index);
    };

    const handleSalary = (index) => {
        setSalary(index);
    };

    const handlePrefrence = (index) => {
        setPrefrence(index);
    };

    const handleEducation = (index) => {
        setEducation(index);
    };

    const toggleBookmark = (e) => {
        if (e.target.src.endsWith('/unbooked.svg')) {
            e.target.src = '/booked.svg';
        } else {
            e.target.src = '/unbooked.svg';
        }
    };

    const handlePages = (index) => {
        setPageActive(index);
    };

    const handleInviteApplyClick = () => {
        setShowInviteApplyModal(true); // Open the modal when the button is clicked
    };

    const handleCloseModal = () => {
        setShowInviteApplyModal(false); // Close the modal
    };

    return (
           <>
            <Header />
        <div className='flex w-[100vw] overflow-x-hidden'>
            <div className="leftCol min-h-full w-[35%] flex justify-end py-6">
                <div className="flex flex-col gap-10 w-3/4 justify-start">
                    <div className="firstItems w-[24.5vw] min-h-[24vh] flex flex-col gap-[28px] py-3">
                        <div className="search relative">
                            <label htmlFor="search">
                                <img src="/search.svg" alt="Search Icon" className='absolute top-[10px] left-[8px]' />
                                <input
                                    id='search'
                                    name='search'
                                    type="text"
                                    onChange={handleSearch}
                                    value={search}
                                    placeholder='Search Candidate'
                                    className='py-2 px-11 w-[24.5vw] border-[1px] border-slate-200'
                                />
                            </label>
                        </div>
                        <div className="search relative">
                            <label htmlFor="location">
                                <img src="/location.svg" alt="Location" className='absolute top-[10px] left-[8px]' />
                                <input
                                    id='location'
                                    name='location'
                                    type="text"
                                    onChange={handleLocation}
                                    value={Location}
                                    placeholder='Location'
                                    className='py-2 px-11 w-[24.5vw] border-[1px] border-slate-200'
                                />
                            </label>
                        </div>
                        <select value={selectedItems} onChange={handleSelectChange} className='p-2 border-[1px] w-[24.5vw] border-slate-200'>
                            <option value="" disabled className='text-slate-500 w-44'>Select Skills</option>
                            {Skills.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="secondItems w-[24vw] min-h-[15vh] gap-[24px] flex flex-col">
                        <div className="title">Candidate Experience</div>
                        <div className="flex flex-wrap">
                            {candidate.map((item, index) => (
                                <div key={index} className="lg:w-1/3 flex flex-wrap items-center justify-start">
                                    <label htmlFor={`candidate-${index}`} className="flex items-center cursor-pointer text-sm py-2">
                                        <input
                                            type="radio"
                                            id={`candidate-${index}`}
                                            name="candidate"
                                            checked={selectedCandidate === index}
                                            onChange={() => handleCheckCandidate(index)}
                                            className="ml-2"
                                        />
                                        <span className="mr-2 px-1">{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="thirdItems w-[24vw] min-h-[15vh] gap-[25px] flex flex-col ">
                        <div className="title">Candidate Expectations</div>
                        <div className="flex flex-wrap">
                            {Salary.map((item, index) => (
                                <div key={index} className="lg:w-1/2 flex flex-wrap items-center justify-start">
                                    <label htmlFor={`Salary-${index}`} className="flex items-center cursor-pointer text-sm py-2">
                                        <input
                                            type="radio"
                                            id={`Salary-${index}`}
                                            name="Salary"
                                            checked={selectedSalary === index}
                                            onChange={() => handleSalary(index)}
                                            className="ml-2"
                                        />
                                        <span className="mr-2 px-1">{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="forthItem w-[24vw] min-h-[15vh] gap-[22px] flex flex-col ">
                        <div className="title">Candidate Preference</div>
                        <div className="flex flex-wrap">
                            {Prefrence.map((item, index) => (
                                <div key={index} className="lg:w-1/3 flex flex-wrap items-center justify-start">
                                    <label htmlFor={`Prefrence-${index}`} className="flex items-center cursor-pointer text-sm py-2">
                                        <input
                                            type="checkbox"
                                            id={`Prefrence-${index}`}
                                            name="candidate"
                                            checked={selectedPrefrence === index}
                                            onChange={() => handlePrefrence(index)}
                                            className="ml-2"
                                        />
                                        <span className="mr-2 px-1">{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="fifthItem w-[24vw] min-h-[15vh] gap-[22px] flex flex-col ">
                        <div className="title">Education</div>
                        <div className="flex flex-wrap">
                            {Education.map((item, index) => (
                                <div key={index} className="flex-wrap flex items-center justify-start">
                                    <label htmlFor={`Education-${index}`} className="flex items-center cursor-pointer text-sm py-2">
                                        <input
                                            type="checkbox"
                                            id={`Education-${index}`}
                                            name="Education"
                                            checked={selectedEducation === index}
                                            onChange={() => handleEducation(index)}
                                            className="ml-2"
                                        />
                                        <span className="mr-2 px-1">{item}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="btn rounded-[4px] relative left-[15%]">
                        <button className='bg-[#7900BA] w-[182px] h-[56px] text-white py-[16px] px-[32px]'>Find Candidate</button>
                    </div>
                </div>
            </div>
            <div className="RightCol w-[64%] border-l-[1px] flex flex-col  ">
                <div className="headings flex w-[48vw] justify-between items-center mx-10 my-10">
                    <h1 className='font-semibold text-xl'>Talent Pool</h1>
                    <button className='px-4 py-1 rounded-sm text-[#f6f6f6] text-md bg-[#7900ba]'>Sort</button>
                </div>

                <div className="talentBox mx-10 my-10 flex flex-col gap-11">
                    {User.map((items, index) => {
                        return (
                            <div key={index} className=" w-[46vw] h-[38vh] flex flex-col gap-4 border px-6 py-8">
                                <div className="upperSection flex justify-between  ">
                                    <div className='userid flex gap-2 py-2'>
                                        <img src="/Instagram.jpeg" alt="" className='w-10 h-10 rounded-full' />
                                        <div className="username">
                                            <div className='text-[14px]'>{items.Name}</div>
                                            <div className='text-[12px] text-[#babec5]'>{items.role}</div>
                                        </div>
                                    </div>
                                    <div className="border-[#7900ba] h-fit p-1 my-2 flex gap-1 rounded-l-md border-[1px] justify-center items-center">
                                        <img src="/matching.svg" alt="" className='size-4' />
                                        <h3 className='text-[#7900ba] text-[12px]'>Matches Profile : 40%</h3>
                                    </div>
                                    <div className="btns flex gap-2 h-fit justify-center items-start">
                                        <div className="flex gap-2 h-fit justify-center items-center">
                                            <div className="bookmark">
                                                <img onClick={(e) => toggleBookmark(e)} src={`/unbooked.svg`} alt="" />
                                            </div>
                                            <button className='bg-[#dcbded] text-[#7900ba] px-4 py-2 rounded-md' onClick={handleInviteApplyClick}>Invite To Apply</button>
                                            <div className="dots">
                                                <img src={'/Dots.svg'} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="details px-4 py-2">
                                    <li className='text-[#727982] text-sm'>{items.experience}</li>
                                    <li className='text-[#727982] text-sm'>{items.education}</li>
                                    <li className='text-[#727982] text-sm'>{items.applied}</li>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h2 className='text-[#727982] text-md mx-6'>Skills</h2>
                                    <div className="skillSection flex gap-4 mx-6">
                                        {items.skill.map((skill, skillIndex) => (
                                            <button key={skillIndex} className='rounded-full border border-[#9a40cb] text-[#9a40cb] text-[10px] font-semibold px-2 py-1'>{skill}</button>
                                        ))}
                                        <div className='text-[#9a40cb] relative text-[11px] top-1 right-4' >+3 more</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="PageChanger">
                    <div className="mainSection flex gap-2 relative left-44 top-16 items-center">
                        <img src="/pre.svg" alt="pre" className='p-4 rounded-full text-sm hover:bg-[#dcbded]' />
                        <div className="PageNo">
                            {[...Array(Pages).keys()].map(i => (
                                <button key={i} onClick={() => handlePages(i)} className={`px-6 py-4 rounded-full text-sm hover:bg-[#f1f2f4] ${PageActive === i ? 'bg-[#7900ba] text-white' : ''}`}>{i + 1}</button>
                            ))}
                        </div>
                        <img src="/next.svg" alt="next" className='p-4 rounded-full text-sm hover:bg-[#dcbded]' />
                    </div>
                </div>
            </div>

            {/* Render InviteApply modal when showInviteApplyModal is true */}
            {showInviteApplyModal && <InviteApply onClose={handleCloseModal} />}
        </div>
            <Footer />
            </>
    );
};

export default TalentPool;
