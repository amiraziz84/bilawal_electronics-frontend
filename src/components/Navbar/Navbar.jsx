import { useState } from 'react'
import Logo from '../../assets/Logo.png'
import search from '../../assets/mingcute_search-line.svg'
import heart from '../../assets/mdi_heart-outline.svg'
import bag from '../../assets/lets-icons_bag.svg'
import user from '../../assets/ooui_user-avatar-outline.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="h-[88px] bg-white border border-black/25
      shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
      px-4 sm:px-6 lg:px-[98px] flex items-center"
    >
      {/* Inner Container */}
      <div className="w-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-[106px] h-[40px]"
          />
        </div>

        {/* Menu (Desktop only) */}
        <div className="hidden lg:flex items-center gap-[40px]">
          {[
            "Home",
            "Categories",
            "About us",
            "Contact Us",
            "Help & Support",
          ].map((item) => (
            <span
              key={item}
              className="font-sf font-normal text-[17px] leading-[24px]
              cursor-pointer hover:text-red-500
              hover:border-b-2 hover:border-red-500 transition-all duration-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-[12px]">
          <img src={search} alt="search" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
          <img src={heart} alt="heart" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
          <img src={bag} alt="bag" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />
          <img src={user} alt="user" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]" />

          {/* Hamburger (Mobile / Tablet) */}
          <button
            className="lg:hidden ml-2"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black mb-1"></div>
            <div className="w-6 h-[2px] bg-black"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[88px] left-0 w-full bg-white border-t lg:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            {[
              "Home",
              "Categories",
              "About us",
              "Contact Us",
              "Help & Support",
            ].map((item) => (
              <span
                key={item}
                className="font-sf text-[16px] cursor-pointer hover:text-red-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
