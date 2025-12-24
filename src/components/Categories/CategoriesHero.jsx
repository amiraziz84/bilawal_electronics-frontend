import React from 'react'

const CategoriesHero = () => {
  return (
    <div className="w-full bg-[#f4f5f7]">
        <h1 className="text-[32px] lg:text-[40px] font-semibold text-[#222]">
          Categories
        </h1>
      <div className="max-w-[1440px] mx-auto h-[447px] px-4 lg:px-[68px] py-16 text-center"
      style={{
        backgroundImage:
          "url('/nathan-dumlao-1Ccl6SBgoQ4-unsplash%201.png')",
      }}
      >
        <div class="relative w-[505px] h-[196px] top-[141px] left-[120px] gap-[20px] opacity-100"> 
             
            <div className='w-[490px] h-[104px]'>
                  <p className="w-[490px] h-[104px] text-[40px] leading-[52px] font-medium tracking-[0] text-white">
                    Elevate Your Life with Smart Appliances
                  </p>
            </div>
            <div className='w-[490px] h-[104px]'>
                  <p className="w-[505px] h-[72px] text-[20px] leading-[24px] font-normal tracking-[0]  text-white">
                    Upgrade your living spaces with our range of innovative electronics, designed to bring efficiency, convenience, and style to every corner
                  </p>
            </div>
            
        </div>
        
        
      </div>
    </div>
  )
}

export default CategoriesHero
