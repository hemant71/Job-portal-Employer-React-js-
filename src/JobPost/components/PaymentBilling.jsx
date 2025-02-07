import React,{useState} from 'react'
import rightArrow from '../../assets/images/whiteArrow.svg'
import blueArrow from '../../assets/images/blueArrow.svg'
import edit from '../../assets/images/edit.svg'
import cross from '../../assets/images/cross.svg'
import download from '../../assets/download.svg'
import checks from '../../assets/images/checks.svg'
import masterCard from '../../assets/images/masterCard.svg'

const PaymentBilling = () => {
    const [activePage, setActivePage] = useState(null);
    const [leftArrowClicked, setLeftArrowClicked] = useState(false);
    const [rightArrowClicked, setRightArrowClicked] = useState(false);

    const data = [
        { id: '#487441', date: "Dec 7, 2019 23:26", plan: "Premium", amount: '₹999' },
        { id: '#487442', date: "Dec 7, 2019 23:26", plan: "Standard", amount: '₹999' },
        { id: '#487443', date: "Dec 7, 2019 23:26", plan: "Premium", amount: '₹999' },
        { id: '#487444', date: "Dec 7, 2019 23:26", plan: "Standard", amount: '₹999' },
        { id: '#487445', date: "Dec 7, 2019 23:26", plan: "Premium", amount: '₹999' },
        { id: '#487446', date: "Dec 7, 2019 23:26", plan: "Standard", amount: '₹999' },
        // Add more data as needed
    ];

    const Pages = ['01', '02', '03', '04', '05'];
   
  
    const handleLeftArrowClick = () => {
      setLeftArrowClicked(true);
      setRightArrowClicked(false);
    };
  
    const handleRightArrowClick = () => {
      setRightArrowClicked(true);
      setLeftArrowClicked(false);
    };

    return (
        <>
            <div className="paymentPage flex flex-col gap-2">
                <div className="flex gap-6 w-[60vw] h-[65vh] mt-6 items-start justify-center">
                    <div className="leftBoxes flex flex-col gap-5">
                        <div className="upper w-[24vw] h-[29vh] flex flex-col gap-5 rounded-md px-6 py-4 border border-[#deded9]">
                            <h3 className="text-sm font-[500] tracking-wide">Current Plan</h3>
                            <div className="midData flex flex-col gap-2">
                                <h1 className="text-2xl font-[600] tracking-wide">Premium</h1>
                                <p className="text-[#8d8d8c] break-words text-[14px]">
                                    A tailored subscription plan offering flexible features for efficient recruitment.
                                </p>
                            </div>
                            <div className="Planbtns flex items-center gap-6">
                                <button className="bg-[#F1F2F4] text-[#7900BA] text-[0.9rem] px-6 py-2 font-semibold rounded-md">Change Plans</button>
                                <button className="text-[#8d8d8c] text-[0.9rem] px-3 py-2 font-bold rounded-md">Change Plans</button>
                            </div>
                        </div>
                        <div className="lower w-[24vw] h-[30vh] flex flex-col gap-2 rounded-md px-6 py-4 border border-[#deded9]">
                            <h3 className="text-sm font-[500] tracking-wide">Next Inovices</h3>
                            <div className="midData flex flex-col gap-1">
                                <h1 className="text-3xl tracking-wide text-[#7900BA] font-[600]">&#8377; 59.00 USD</h1>
                                <h3 className="text-sm font-[500] tracking-wide">Nov 28, 2021</h3>
                                <p className=" break-words">
                                    <span className="text-[#8d8d8c] text-xs">Package started: </span>
                                    <span className="text-[#101010] text-xs">Jan 28, 2021</span>
                                </p>
                                <p className="text-[#8d8d8c] break-words text-xs">
                                    You have to pay this amount of money every month.
                                </p>
                            </div>
                            <button className="bg-[#7900BA] text-[#ffffff] text-[0.9rem] px-3 py-2 font-bold rounded-md  mt-2 flex gap-2 items-center justify-center">
                                <span>Pay Now</span>
                                <img src={rightArrow} alt=">" className="size-5" />
                            </button>
                        </div>
                    </div>
                    <div className="rightBoxes flex flex-col gap-6">
                        <div className="PlanBenifit  w-[28vw] h-[36vh] rounded-md flex flex-col gap-3 px-4 py-4 border border-[#deded9]">
                            <div className="upper flex flex-col gap-2 h-[8vh]">
                                <h3 className="text-sm font-[500] tracking-wide">Plan Benifits</h3>
                                <p className="text-[#8d8d8c] break-words text-xs">
                                    Unlock diverse tools and insights to enhance your hiring efficiency.
                                </p>
                            </div>
                            <div className="lower flex flex-col gap-2 h-[30vh]">
                                <div className="upper flex items-center justify-between">
                                    <div className="right flex flex-col gap-2 w-[48%] h-[10vh]">
                                        <div className="first flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">6 Active Jobs</span>
                                        </div>
                                        <div className="second flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">Highlight Job with Colors</span>
                                        </div>
                                        <div className="third flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">60 Days Resume Visibility</span>
                                        </div>
                                    </div>
                                    <div className="left flex flex-col gap-2 w-[48%] h-[10vh]">
                                        <div className="first flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">Urgents and Featured Jobs</span>
                                        </div>
                                        <div className="second flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">Access & Saved Candidates</span>
                                        </div>
                                        <div className="third flex items-center gap-2">
                                            <img src={checks} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">24/7 Critical Support</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="currentPlan bg-[#8d8d8c] w-[96%] my-1 mx-auto" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-sm font-[500] tracking-wide">Current Plan</h3>
                                    <div className="upper flex items-center justify-between">
                                        <div className="first flex items-center gap-2 w-[48%]">
                                            <img src={cross} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">9 Resume Access</span>
                                        </div>
                                        <div className="second flex items-center justify-start gap-2 w-[48%]">
                                            <img src={cross} alt="" className="size-4" />
                                            <span className="tracking-wide text-xs text-[#595959]">21 Days resume visibility</span>
                                        </div>
                                    </div>
                                    <div className="second flex items-center justify-start gap-2 w-[48%]">
                                        <img src={cross} alt="" className="size-4" />
                                        <span className="tracking-wide text-xs text-[#595959]">4 Active Jobs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="PaymentCard  w-[28vw] h-[25vh] rounded-md flex flex-col gap-4 px-4 py-4 border border-[#deded9]">
                            <div className="upper flex items-center justify-between">
                                <h3 className="text-sm font-[500] tracking-wide">Current Plan</h3>
                                <div className="editbtn flex items-center justify-center gap-1">
                                    <img src={edit} alt="edit" className="size-4" />
                                    <span className="text-[#8d8d8c] text-xs">edit card</span>
                                </div>
                            </div>
                            <div className="cardDetail flex justify-between items-center w-[90%]">
                                <div className="flex gap-3 items-center ">
                                    <img src={masterCard} alt='card' className='size-11' />
                                    <div className="username flex flex-col items-between justify-center">
                                        <span className="text-xs text-[#8d8d8c]">Name on card</span>
                                        <span className=" text-[14px] font-[500]">Esther Howard</span>
                                    </div>
                                </div>
                                <div className="username flex flex-col items-between justify-center">
                                    <span className="text-xs text-[#8d8d8c]">Expire date</span>
                                    <span className=" text-[14px] font-[500]">12/29</span>
                                </div>
                            </div>
                            <hr className="bg-[#8d8d8c] w-[96%] my-1 mx-auto" />
                            <h1 className="cardNumber text-xl font-semibold mx-2">6714 **** **** ****</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2  w-[52.5vw] h-[66vh] relative left-12 rounded-md border border-[#deded9]">
                    <h3 className="text-md font-[500] px-6 py-2 mt-2 tracking-wide">Latest Invoices</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-gray-100">
                            <thead className="bg-gray-200 w-[52.5vw] relative">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-[500] text-gray-500 uppercase tracking-wider">#ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-[500] text-gray-500 uppercase tracking-wider">DATE</th>
                                    <th className="px-6 py-3 text-left text-xs font-[500] text-gray-500 uppercase tracking-wider">PLAN</th>
                                    <th className="px-6 py-3 text-left text-xs font-[500] text-gray-500 uppercase tracking-wider">AMOUNT</th>
                                    <th className="py-3 text-left text-xs font-[500] text-gray-500 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="px-6 py-4 text-xs font-[500] whitespace-nowrap">{item.id}</td>
                                        <td className="px-6 py-4 text-xs font-[500] text-[#8d8d8c] whitespace-nowrap">{item.date}</td>
                                        <td className="px-6 py-4 text-xs font-[500] text-[#8d8d8c] whitespace-nowrap">{item.plan}</td>
                                        <td className="px-6 py-4 text-xs font-[500] text-[#8d8d8c] whitespace-nowrap">{item.amount}</td>
                                        <td className=" py-4 text-xs font-[500] text-[#8d8d8c] whitespace-nowrap "><img src={download} alt="" className="size-5" /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <div className="PageOptions flex items-center gap-2 relative top-4 justify-center">
      <img
        src={blueArrow}
        alt="left"
        className={`rotate-180 cursor-pointer py-2 px-2 rounded-full ${leftArrowClicked ? 'bg-[#E7F0FA] ' : 'opacity-50 '}`}
        onClick={handleLeftArrowClick}
      />
      {Pages.map((items, index) => {
        const isActive = activePage === index;
        return (
          <div
            key={index}
            onClick={() => setActivePage(index)}
            className={`py-2 px-3 rounded-full hover:bg-[#E7F0FA] hover:text-black text-[#8d8d8c] cursor-pointer ${isActive ? 'bg-[#7900BA] text-white' : ''}`}
          >
            {items}
          </div>
        );
      })}
      <img
        src={blueArrow}
        alt="right"
        className={`hover:bg-[#E7F0FA] py-2 px-2 rounded-full cursor-pointer ${rightArrowClicked ? 'bg-[#E7F0FA] ' : 'opacity-50 '}`}
        onClick={handleRightArrowClick}
      />
    </div>
                </div>

            </div>
        </>
    )
}

export default PaymentBilling