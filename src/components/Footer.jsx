import React, { useState } from 'react'
import { LanguagesIcon,  } from 'lucide-react'

const Footer = () => {
  const [drop, setDrop] = useState(false)
  return (
    <div className='bg-black px-12 pt-10 lg:px-20 xl:px-32 2xl:px-46 pb-10'>
        <a href="" className='text-white/70 underline text-xl'>Questions? Contact us.</a>
        <div className="flex flex-wrap text-white/70 underline text-xl mt-16 gap-5 md:gap-x-0 lg:gap-0 mb-20">
            <ul className="w-full md:w-1/2 lg:w-1/4 space-y-3">
                <li><a href="" className="">
                    FAQ    
                </a></li>
                <li><a href="" className="">Investor Relations</a></li>
                <li><a href="" className="">Privacy</a></li>
                <li><a href="" className="">Speed Test</a></li>
            </ul>
            <ul className="w-full md:w-1/2 lg:w-1/4 space-y-3">
                <li><a href="" className="">Help Center</a></li>
                <li><a href="" className="">Jobs</a></li>
                <li><a href="" className="">Cookie Preferences</a></li>
                <li><a href="" className="">Legal Notices</a></li>
            </ul>
            <ul className="w-full md:w-1/2 lg:w-1/4 space-y-3">
                <li><a href="" className=""> Account</a></li>
                <li><a href="" className="">Ways to Watch</a></li>
                <li><a href="" className="">Corporate Informtion</a></li>
                <li><a href="" className="">Only on Netflix</a></li>
            </ul>
            <ul className="w-full md:w-1/2 lg:w-1/4 space-y-3">
                <li><a href="" className="">Media Center</a></li>
                <li><a href="" className="">Terms of Use</a></li>
                <li><a href="" className="">Contact Us</a></li>
            </ul>
        </div>
        <button onClick={() => {setDrop(!drop)}} className='border border-white/45 p-2 rounded-lg text-white flex gap-2 cursor-pointer focus:outline-3 focus:outline-offset-3'>
            <span>
                <LanguagesIcon size={28} />
            </span>
            <span className='font-bold text-lg'>English</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 9a1 1 0 0 0-.707 1.707l5 5a1 1 0 0 0 1.414 0l5-5A1 1 0 0 0 17 9z" clip-rule="evenodd"/></svg>
            </span>
        </button>
        {drop&&<div className='z-10 text-white p-2 bg-blue-700 w-38 border text-xl text-center font-semibold -mt-0.5'>
            English
        </div>}
        <p className='text-white/70 text-lg mt-10 mb-20'>Netflix Nigeria</p>
    </div>
  )
}

export default Footer