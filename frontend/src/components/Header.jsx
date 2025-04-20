import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Your Smart Health Companion
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Simply browse through our extensive list of trusted doctors,  <br className='hidden sm:block' /> Tell us how you feel — we’ll guide you with symptom analysis and personalized medicine recommendations, instantly.</p>
                </div>




                {/* Disease Prediction */}
                <a href='http://localhost:5000' target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-3 bg-gradient-to-r from-[#00F5A0] to-[#00D9F5] text-white px-8 py-4 rounded-full shadow-md text-base font-semibold m-auto md:m-0 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <span>🧠 Personalised Health Center</span>
                    <img className='w-4 opacity-80' src={assets.arrow_icon} alt="arrow" />
                </a>

                {/* Medicine Recommendation */}
                <a href='http://localhost:5001' target="_blank" rel="noopener noreferrer"
                    className='flex items-center gap-3 bg-gradient-to-r from-[#FF6CAB] to-[#7366FF] text-white px-8 py-4 rounded-full shadow-md text-base font-semibold m-auto md:m-0 hover:shadow-lg hover:scale-105 transition-all duration-300'>
                    <span>💊 Medicine Recommendation</span>
                    <img className='w-4 opacity-80' src={assets.arrow_icon} alt="arrow" />
                </a>


            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header