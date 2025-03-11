import "../src/App.css"
import {links} from "./constant"
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import Reasons from "./components/Reasons";
import Faq from "./components/Faq";


const App = () => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setShowLeft(scrollLeft > 0);
        setShowRight(Math.round(scrollLeft + clientWidth) < Math.round(scrollWidth));
      }
    };

    const container = scrollRef.current;
    container?.addEventListener("scroll", checkScrollPosition);
    return () => container?.removeEventListener("scroll", checkScrollPosition);
  }, []);



  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;

      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
        <div className='bg-[url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs)] bg-center w-full  h-full text-white'>
          <div className='bg-linear-to-b from-[#000000e8] via-[#000000bb] to-[#000000ec] pt-6 xl:pt-10 2xl:pb-84 pb-28 md:pb-40 lg:pb-54 xl:pb-60'>
            <div className="flex px-6 2xl:px-38 xl:px-24 justify-between align-middle md:px-10 lg:px-16">
              <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="fill-red-600 text-red-600 lg:w-40 w-24 md:w-32 xl:w-44">
                <g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g>
              </svg>
              <button className="bg-red-600 -mt-0.5 md:px-5 md:text-xl text-white font-semibold py-2 px-3 text-sm rounded-sm">Sign In</button>
            </div>
            <div className="flex flex-col justify-center w-full mt-24 md:mt-36 xl:mt-40 2xl:mt-60">
              <h1 className='text-white text-center text-3xl font-extrabold mb-1 md:text-5xl 2xl:text-7xl xl:text-6xl xl:mb-4 2xl:mb-6'>Unlimited movies, TV</h1>
              <h1 className='text-white text-center text-3xl font-extrabold md:text-5xl 2xl:text-7xl xl:text-6xl'>shows, and more</h1>
              <h1 className='md:text-xl md:mt-3 text-white text-center mt-2 2xl:text-semibold xl:text-2xl 2xl:text-3xl 2xl:mt-6 xl:mt-4 xl:font-stretch-150%'>Starts at ₦2,200. Cancel anytime.</h1>
              <p className="md:text-xl text-center text-lg text-white mt-3.5 xl:text-2xl xl:mt-7 font-stretch-75% px-9">
              Ready to watch? Enter your email to create or restart your membership.
              </p>
              <div className='flex flex-col justify-center items-center space-y-5 md:flex-row md:space-y-0 md:mt-10 md:space-x-3'>
                <form action="" className='flex flex-col justify-center  mt-8 md:mt-0 relative'>
                  <label className='text-sm left-2 md:left-5 md:text-lg md:top-1.5 top-1 absolute'>Email address</label>
                  <input className='w-80 2xl:w-102 xl:w-90 xl:pl-6 2xl:h-20 xl:h-18 md:pl-4 h-12 md:pt-11 md:pb-5 md:text-lg pl-2 pt-6 pb-1 border border-[#ffffff59] bg-[#81abff2c] rounded' type="text" />
                </form>
                <button className='bg-red-600 rounded cursor-pointer px-3 flex space-x-2 py-3 md:py-4.5 xl:py-5 2xl:space-x-4 2xl:px-8'>
                  <span className='font-bold text-xl 2xl:text-3xl xl:text-2xl '>Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className='2xl:w-10 2xl:h-10' width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#fff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12l-7 -7M16 12l-7 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"/></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:-mt-10 lg:h-20 2xl:h-24 h-18 -mt-7  flex items-end" style={{background:"linear-gradient(to right, rgba(33, 13, 22, 1) 0%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 100%)", borderTopLeftRadius:"32%", borderTopRightRadius:"32%"}}>
          <div className="h-[95%] w-full" style={{background:"radial-gradient(50% 500% at 50% -420%, rgba(64, 97, 231, 0.4) 80%, rgba(0, 0, 0, 0.1) 100%), black", borderTopLeftRadius:"32%", borderTopRightRadius:"32%"}}>
          </div>
        </div>
        <div className="w-full relative bg-black text-white lg:-mt-3 -mt-3 px-9 md:px-12 lg:px-20 xl:px-30 2xl:px-45 pb-10">
          <h1 className="font-bold text-2xl xl:text-3xl pb-6">Trending Now</h1>
          <div ref={scrollRef} className="flex gap-6 lg:gap-9 2xl:gap-11 pl-10 overflow-x-auto py-5 [::-webkit-scrollbar]:hidden [scrollbar-width:none]">
            <button onClick={() => scroll("left")} className={`absolute xl:left-18 lg:left-9 2xl:left-30 left-2 top-1/2 -translate-y-1/2 bg-gray-300/15 h-1/3 rounded-full text-white z-10 transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <ChevronLeft className="size-5.5 lg:size-8 xl:size-9 2xl:10" />
            </button>
            {links.map((link, index) => (
              <div className = {`${link} 2xl:h-80 2xl:w-60 h-43 w-30 shrink-0 xl:w-56 xl:h-68 rounded-xl lg:w-42 lg:h-52 md:w-36 md:h-48 relative bg-cover bg-center bg-no-repeat hover:scale-110 transition duration-300 mb-5 cursor-pointer`}>
                <h1 className="absolute z-10 londrina-outline top-15 -left-4 text-white font-bold text-[75px] sm:text-[80px] sm:top-18 md:-left-4 lg:text-[105px] lg:top-16 lg:-left-5 xl:text-[110px] xl:top-30 xl:-left-4 2xl:top-38 2xl:-left-5 2xl:text-[120px]">{index + 1}</h1>
              </div>
            ))}
            <button onClick={() => scroll("right")} className={`absolute sm:right-1 right-2 xl:right-19 lg:right-10 2xl:right-30 top-1/2 -translate-y-1/2 bg-gray-300/15 h-1/3 rounded-full text-white z-10 transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <ChevronRight className="size-6.5 lg:size-7.5 xl:size-8.5 2xl:10.5" />
            </button>
          </div>
        </div>
        <Reasons />
        <Faq />
    </div>
    
  )
}

export default App