import React, { useState } from 'react'
import { LucidePlus, LucideX } from 'lucide-react'
import { faqs } from '../constant';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full relative bg-black text-white -mt-5 px-9 md:px-12 lg:px-20 xl:px-30 2xl:px-45 pt-15 pb-10">
        <h1 className='font-bold text-2xl xl:text-3xl pb-6'>Frequently Asked Questions</h1>
        <div className="w-full space-y-3">
            {faqs.map((faq, index) => (
                <div key={index}>
                    <button onClick={() => toggleFAQ(index)} className="w-full flex justify-between items-center text-left text-white p-4 font-medium bg-[#2d2d2d] hover:bg-[#3f3f3f] px-6 transition"
                    >
                        <h1 className='text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem]'>{faq.question}</h1>
                        <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                            <LucidePlus className='size-10 lg:size-14 xl:size-14' strokeWidth={1} absoluteStrokeWidth/>
                        </span>
                    </button>
                    <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 h-auto" : "grid-rows-[0fr] opacity-0 h-0"}`}
                    >
                        <div className="overflow-hidden p-4 px-6 bg-[#2d2d2d] text-2xl mt-0.5 xl:text-3xl font-light xl:py-8">
                            <p>
                                {faq.answer}
                            </p>
                            {faq.answer2&&  <p className='mt-6 xl:mt-10'>
                                {faq.answer2}
                            </p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Faq