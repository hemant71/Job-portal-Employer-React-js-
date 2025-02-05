import React, { useState } from 'react';
import close from '../../assets/close.svg'
import ronald from '../../assets/ronald.png'

const MainContainer = () => {
  const [createCol, setCreateCol] = useState(false)

  const handleCreate = () => {
    setCreateCol(true)
  }

  return (
    <>
      {/* <div className="min-h-screen min-w-[99vw] flex items-center justify-center left-0 top-0 absolute z-50 bg-slate-900 " style={{ backgroundColor: 'rgba(77, 77, 77, 0.8)' }}>
        <div className="min-w-[53.33vw] min-h-[152.5vh] bg-[#FFFFFF] rounded-md px-11 py-11 flex flex-col gap-4 relative animate-pop-in my-8">
           <div className="topHeading flex items-center justify-center">
            <div className="profile flex gap-4 items-center">
             <img src={ronald} alt="img" className="size-16" />
             <div className="username flex flex-col gap-2 justify-center">
              <span className="text-[#151502] text-xl font-semibold">Esther Howard</span>
              <span className="text-[14px] text-[#8d8d8c]">Website Designer (UI/UX)</span>
             </div>
            </div>
            <div className="RightSide">
              <div className="btns flex gap-2">
                   
              </div>
            </div>
           </div>

          <div className="closeImg bg-[#FFFFFF] absolute p-2 rounded-full top-1 -right-16 cursor-pointer">
            <img src={close} alt="" className="size-6" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default MainContainer;


