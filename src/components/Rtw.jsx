import React from 'react'

const Rtw = () => {
  return (
    <div className='pt-10 text-white bg-black pb-10'>
        <h1 className='md:text-center text-xl px-12 text-start'>
            Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className='flex flex-col justify-center items-start px-11 xl:items-center space-y-5 md:flex-row md:space-y-0 md:mt-5 md:space-x-3'>
            <form action="" className='flex flex-col justify-center mt-5 md:mt-0 relative'>
                <label className='text-sm left-2 md:left-5 md:text-lg md:top-1.5 top-1 absolute'>Email address</label>
                <input className='sm:w-xl w-lg md:w-[34rem] xl:w-140 xl:pl-6 xl:h-18 md:pl-4 h-14md:pt-11 md:pb-5 md:text-lg pl-2 pt-6 pb-1 border border-[#ffffff59] bg-[#81abff2c] rounded' type="text" />
            </form>
            <button className='bg-red-600 rounded cursor-pointer px-3 flex space-x-2 py-3 md:py-5.5 xl:py-5 2xl:py-4 2xl:space-x-4 2xl:px-8'>
                <span className='font-bold text-xl text-nowrap 2xl:text-3xl xl:text-2xl '>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 2xl:h-10' width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12l-7 -7M16 12l-7 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"/></path></svg>
            </button>
        </div>
    </div>
  )
}

export default Rtw