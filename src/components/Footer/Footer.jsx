import React from 'react'
import mdi_email from '../../assets/mdi_email-outline.png'
import Call from '../../assets/Call.png'
import system_uicons from '../../assets/system-uicons_document.png'
import Facebook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import LinkedIn from '../../assets/LinkedIn.png'


const Footer = () => {
  return (
    <div className="bg-[rgba(51,51,51,1)] text-white">
  <div className="max-w-[1440px] mx-auto px-6 py-12">

    {/* Top Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

      {/* 1. Contact Us */}
      <div className="space-y-6">
        <div className="underline underline-offset-8 text-center md:text-left font-medium text-[14px]">
          Contact Us
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-3">
            <img src={mdi_email} alt="email" className="w-[24px] h-[24px]" />
            <span>Email</span>
          </div>
          <div className="pl-[35px] text-[16px] break-all">
            Gadgetgalaxy123@gmail.com
          </div>
        </div>

        {/* Call */}
        <div>
          <div className="flex items-center gap-3 mt-4">
            <img src={Call} alt="call" className="w-[24px] h-[24px]" />
            <span>Call Us</span>
          </div>
          <div className="pl-[35px] text-[16px]">
            +1 202-918-2132
          </div>
        </div>
      </div>

      {/* 2. Most Popular Categories */}
      <div className="space-y-6">
        <div className="underline underline-offset-8 text-center md:text-left font-medium text-[14px] whitespace-nowrap">
          Most Popular Categories
        </div>

        <div className="space-y-2">
          {["Staples", "Beverages", "Personal Care", "Home Care"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <img src={system_uicons} alt="" className="w-[13px] h-[13px]" />
              <span className="text-[16px] whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Customer Services */}
      <div className="space-y-6">
        <div className="underline underline-offset-8 text-center md:text-left font-medium text-[14px] whitespace-nowrap">
          Customer Services
        </div>

        <div className="space-y-2">
          {["About Us", "Terms & Conditions", "FAQ", "Privacy Policy"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <img src={system_uicons} alt="" className="w-[13px] h-[13px]" />
              <span className="text-[16px] whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Social Icons + Copyright */}
    <div className="flex flex-col items-center mt-14 gap-4">
      <div className="flex gap-4">
        <img src={Facebook} alt="Facebook" className="w-[58px] h-[58px]" />
        <img src={Twitter} alt="Twitter" className="w-[58px] h-[58px]" />
        <img src={Instagram} alt="Instagram" className="w-[58px] h-[58px]" />
        <img src={LinkedIn} alt="LinkedIn" className="w-[58px] h-[58px]" />
      </div>

      <div className="text-[15px] text-center">
        Bilawal Electronics. All Rights Reserved.
      </div>
    </div>

  </div>
</div>

  )
}

export default Footer