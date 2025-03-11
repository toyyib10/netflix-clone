import React from 'react'
import { LucidePlus, LucideX } from 'lucide-react'

const Faq = () => {
  return (
    <div className="w-full relative bg-black text-white -mt-5 px-9 md:px-12 lg:px-20 xl:px-30 2xl:px-45 pt-15 pb-10">
        <h1 className='font-bold text-2xl xl:text-3xl pb-6'>Frequently Asked Questions</h1>

        <div className='w-full'>
            <div className="w-full flex justify-between py-6 bg-[#2d2d2d] px-6">
                <h1 className='text-[1.6rem]'>What is Netflix?</h1>
                <button className=''>
                    <LucidePlus />
                    <LucideX />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Faq