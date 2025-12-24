import React from 'react'
import grop from '../../assets/Group 59.png'
import image from '../../assets/image 967.png'
import preview__1 from '../../assets/01-600x600-removebg-preview__1_-removebg-preview 2.png'
import dawlance_micro from '../../assets/3-22-300x300-removebg-preview 1.png'
import dawlance_micro1 from '../../assets/6-17-300x300-removebg-preview 1.png'
import dawlance_micro2 from '../../assets/2-20-300x300-removebg-preview 1.png'
import washing_machine  from '../../assets/image 954.png'
import air_conditioner from '../../assets/image 955.png'
import cooling_Refrigerator from '../../assets/image 956.png'
import Dual_cooling_Refrigerator from '../../assets/image 957.png'
import LED_TV from '../../assets/image 958.png'
import image_959 from '../../assets/image 959.png'
import image_960 from '../../assets/image 960.png'
import image_961 from '../../assets/image 961.png'
import image_962 from '../../assets/image 962.png'
import image_964 from '../../assets/image 964.png'
import Group1 from '../../assets/Group.svg'
import Rectangle_17 from '../../assets/Rectangle 17.png'
import Rectangle_17_1 from '../../assets/Rectangle 17 (1).png'
import Rectangle_18 from '../../assets/Rectangle 18.png' 
import Rectangle_18_1 from '../../assets/Rectangle 18 (1).png'
import Haier_logo from '../../assets/Haier_logo.svg-removebg-preview 1.png'
import Mask_group from '../../assets/Mask group.png'
import medium01 from '../../assets/medium01.jpg-removebg-preview 1.png'
import Ellipse from '../../assets/Ellipse 43.png'
import pngegg_1 from '../../assets/pngegg (1) 1.png'
import pngegg_2 from '../../assets/pngegg 1.png'
import download_1 from '../../assets/download-removebg-preview 1.png'
import Group_49 from '../../assets/Group 49.png'
import removebg_preview from '../../assets/01-6-600x600-removebg-preview (2) 1.png'
import Group_94 from '../../assets/Group 94.png'
import Group_95 from '../../assets/Group 95.png'
import Group_96 from '../../assets/Group 96.png'
import Rectangle_10397_1 from '../../assets/Rectangle 10397 (1).png'
import Rectangle_10397 from '../../assets/Rectangle 10397.png'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const Home = () => {
  return (
    <div className=' bg-[rgba(255, 255, 255, 1)]'>
        <div className="relative w-full">
  

  {/* ===== Swiper ===== */}
  <Swiper
    modules={[Navigation]}
    navigation={{
      prevEl: ".custom-prev",
      nextEl: ".custom-next",
    }}
    className="mySwiper relative w-full min-h-[300px] sm:min-h-[420px] lg:min-h-[600px]"
  >
    {/* ===== Slide 1 ===== */}
    <SwiperSlide className="relative">
      <img
        src={grop}
        alt="grop"
        className="w-full h-full object-cover"
      />

      {/* Overlay 1 — Border box */}
      <div
        className="
          absolute
          top-[60px] sm:top-[92px]
          left-4 sm:left-[80px] lg:left-[188px]
          w-[90%] sm:w-[420px] lg:w-[517px]
          h-[220px] sm:h-[280px] lg:h-[335px]
          border-t-2 border-l-2 border-white
        "
      />

      {/* Overlay 2 — Content */}
      <div
        className="
          absolute
          top-[60px] sm:top-[82px]
          right-4 sm:right-8 lg:right-[80px]
          w-[90%] sm:w-[640px]
          text-right
        "
      >
        <h2 className="text-[22px] sm:text-[28px] lg:text-[40px] leading-tight lg:leading-[52px] text-white">
          Keep Your Home Cool With{" "}
          <span className="text-[rgba(213,21,43,1)]">Bilawal</span>
          <br />
          <span className="text-[rgba(213,21,43,1)]">Electronics</span>{" "}
          Top Brand
        </h2>
      </div>
    </SwiperSlide>

    {/* ===== Slide 2 ===== */}
    <SwiperSlide>
      <img
        src={image}
        alt="image"
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  </Swiper>
  {/* ===== Custom Navigation Buttons ===== */}
<div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-between px-[60px]">
  
  {/* Left Button */}
  <button className="custom-prev pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#34c6cf] text-white text-[40px] pb-3  transition hover:scale-105">
    ‹
  </button>

  {/* Right Button */}
  <button className="custom-next pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#34c6cf] text-white text-[40px] pb-3 transition hover:scale-105">
    ›
  </button>

</div>
</div>



        {/* Top Products */}
<div className="bg-[rgba(255,255,255,1)] flex justify-center py-10">
  <div className="w-full max-w-[1200px] px-4 lg:px-0">

    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-xl sm:text-2xl font-semibold">
        Top Products
      </h1>
      <span className="text-sm cursor-pointer hover:underline font-semibold text-[rgba(0,87,200,1)]">
        See All
      </span>
    </div>

    {/* Cards */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        lg:gap-10
      "
    >
      {/* CARD 1 */}
      <div className="relative bg-[#f4f5f7] w-full max-w-[228px] mx-auto rounded-md overflow-hidden">
        <div className="absolute -top-[35px] -left-[35px] text-white text-[5px] pt-[58px] pl-3 w-[68px] h-[68px] bg-[#d5152b] rotate-[-45deg]">
          Discount Offer 25%
        </div>

        <div className="w-full h-[180px] flex items-center justify-center">
          <img src={preview__1} alt="preview__1" className="w-[220px] h-[126px]" />
        </div>

        <div className="px-4 pb-6 text-center">
          <div className="text-[rgba(0,0,0,0.4)]">LG Electronics</div>
          <div className="text-sm font-bold mt-1">
            Sensor cooking Microwave Oven
          </div>

          <div className="mt-2">
            <div className="text-lg text-[rgba(213,21,43,1)]">
              Rs 37,400
            </div>
            <div className="line-through text-[15px] text-[rgba(0,0,0,0.4)]">
              Rs 39,400
            </div>

            <div className="w-[120px] mx-auto mt-3 bg-[rgba(213,21,43,1)] rounded-md">
              <button className="text-white py-1 w-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative bg-[#f4f5f7] w-full max-w-[228px] mx-auto rounded-md overflow-hidden">
        <div className="w-full h-[180px] flex items-center justify-center">
          <img src={dawlance_micro} alt="dawlance_micro" className="w-[220px] h-[126px]" />
        </div>

        <div className="px-4 pb-6 text-center">
          <div className="text-[rgba(0,0,0,0.4)]">Dawlance Micro</div>
          <div className="text-sm font-bold mt-1">
            Sensor cooking Microwave Oven
          </div>

          <div className="mt-2">
            <div className="text-lg text-[rgba(213,21,43,1)]">
              Rs 37,400
            </div>
            <div className="line-through text-[15px] text-[rgba(0,0,0,0.4)]">
              Rs 39,400
            </div>

            <div className="w-[120px] mx-auto mt-3 bg-[rgba(213,21,43,1)] rounded-md">
              <button className="text-white py-1 w-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative bg-[#f4f5f7] w-full max-w-[228px] mx-auto rounded-md overflow-hidden">
        <div className="w-full h-[180px] flex items-center justify-center">
          <img src={dawlance_micro1} alt="dawlance_micro1" className="w-[220px] h-[126px]" />
        </div>

        <div className="px-4 pb-6 text-center">
          <div className="text-[rgba(0,0,0,0.4)]">Dawlance Micro</div>
          <div className="text-sm font-bold mt-1">
            Sensor cooking Microwave Oven
          </div>

          <div className="mt-2">
            <div className="text-lg text-[rgba(213,21,43,1)]">
              Rs 37,400
            </div>
            <div className="line-through text-[15px] text-[rgba(0,0,0,0.4)]">
              Rs 39,400
            </div>

            <div className="w-[120px] mx-auto mt-3 bg-[rgba(213,21,43,1)] rounded-md">
              <button className="text-white py-1 w-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="relative bg-[#f4f5f7] w-full max-w-[228px] mx-auto rounded-md overflow-hidden">
        <div className="w-full h-[180px] flex items-center justify-center">
          <img src={dawlance_micro2} alt="dawlance_micro2" className="w-[220px] h-[126px]" />
        </div>

        <div className="px-4 pb-6 text-center">
          <div className="text-[rgba(0,0,0,0.4)]">Dawlance Micro</div>
          <div className="text-sm font-bold mt-1">
            Sensor cooking Microwave Oven
          </div>

          <div className="mt-2">
            <div className="text-lg text-[rgba(213,21,43,1)]">
              Rs 37,400
            </div>
            <div className="line-through text-[15px] text-[rgba(0,0,0,0.4)]">
              Rs 39,400
            </div>

            <div className="w-[120px] mx-auto mt-3 bg-[rgba(213,21,43,1)] rounded-md">
              <button className="text-white py-1 w-full">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

           {/* New collection */}
<div className="bg-white py-12 flex justify-center">
  <div className="relative w-full max-w-[1440px] px-4 lg:px-[68px]">

    {/* Heading */}
    <h1 className="mb-10 text-[24px] sm:text-[28px] lg:text-[30px] font-medium text-[rgba(34,34,34,1)]">
      New Collection
    </h1>

    {/* ===== Swiper ===== */}
    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".custom-prev",
        nextEl: ".custom-next",
      }}
      className="mySwiper"
    >
      {[1, 2].map((_, index) => (
        <SwiperSlide key={index}>
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-5
              gap-6
              justify-items-center
              pb-12
            "
          >
            {[
              {
                img: washing_machine,
                text: "High efficiency Washing Machine",
                discount: true,
                imgClass: "h-[170px]",
              },
              {
                img: air_conditioner,
                text: "Remote-controlled air conditioner with 2-ton capacity",
                imgClass: "h-[65px]",
              },
              {
                img: cooling_Refrigerator,
                text: "Dual cooling Refrigerator",
                imgClass: "h-[116px]",
              },
              {
                img: Dual_cooling_Refrigerator,
                text: "Dual cooling Refrigerator",
                imgClass: "h-[172px]",
              },
              {
                img: LED_TV,
                text: "55-inch LED TV Stunning visuals with ultra-clear 4K picture",
                imgClass: "h-[84px]",
              },
              {
                img: image_959,
                text: "Sensor cooking Microwave Oven",
                imgClass: "h-[111px]",
              },
              {
                img: image_960,
                text: "Induction Cooktop 1800W power, with touch controls",
                imgClass: "h-[172px]",
              },
              {
                img: image_961,
                text: "Electric Kettle Rapid boiling with auto shut-off",
                imgClass: "h-[149px]",
              },
              {
                img: image_962,
                text: "Coffee Maker with programmable thermal carafe",
                imgClass: "h-[169px]",
              },
              {
                img: image_964,
                text: "55-inch LED TV Stunning visuals with ultra-clear 4K picture",
                imgClass: "h-[117px]",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="
                  relative
                  w-full
                  max-w-[204px]
                  bg-white
                  rounded-xl
                  border
                  border-[#eee]
                  px-4
                  pt-12
                  pb-4
                  text-center
                "
              >
                {/* Discount Ribbon */}
                {card.discount && (
                  <div className="absolute top-0 right-0 w-[90px] h-[90px] ">
                    <div
                    className="
                        absolute -right-[53px] w-[140px]  ">
                        <img src={Rectangle_10397_1} alt="Rectangle_10397_1" />
                      </div>
                    
                    <div
                      className=" absolute -right-[30px] w-[140px] text-white text-[8px] text-center py-[8px] ">
                      40% Off  
                      </div>  
                  </div>      
                )}        
                        
                {/* Image */}
                <div className="flex justify-center items-center h-[170px]">
                  <img src={card.img} alt="" className={card.imgClass} />
                </div>

                {/* Text */}
                <p className="mt-3 text-sm font-semibold text-[rgba(34,34,34,1)]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </SwiperSlide>
        
      ))}
      

      
    </Swiper>

    {/* ===== Custom Navigation Buttons (CENTER LEFT & RIGHT) ===== */}
    <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-between ">
      <button className="custom-prev pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f7d0d5] text-[#d5152b] text-[40px] pb-3 transition hover:scale-105">
        ‹
      </button>

      <button className="custom-next pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#f7d0d5] text-[#d5152b] text-[40px] pb-3 transition hover:scale-105">
        ›
      </button>
    </div>

  </div>
</div>




{/* Buy more, save more */}
<div className="bg-white py-14 flex justify-center">
  <div className="w-full max-w-[1440px] px-4 lg:px-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <h1 className="text-[22px] sm:text-[26px] font-semibold">
        Buy More, Save More
      </h1>

      <div className="bg-[rgba(213,21,43,1)] rounded-full px-4 py-2">
        <button className="flex items-center gap-2 text-white text-sm font-medium">
          View All Offers
          <img
            src={Group1}
            alt="arrow"
            className="w-[17px] h-[21px]"
          />
        </button>
      </div>
    </div>

    {/* Cards */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        justify-items-center
      "
    >

      {/* CARD 1 */}
      <div className="relative w-full max-w-[283px] h-[336px] bg-[#f4f5f7] rounded-md shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 w-[90px] h-[90px]">
  
  {/* Image */}
  <div className="absolute -left-[0px] w-[140px]">
    <img src={Rectangle_10397} alt="Rectangle_10397" />
  </div>

  {/* Text */}
  <div className="absolute -left-[30px] w-[140px] text-white text-[8px] text-center py-[8px]">
    40% Off
  </div>

</div>

        <img
          src={Rectangle_17}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3">
          <div className="font-bold text-sm">55-inches LED TV</div>
          <div className="text-[rgba(0,0,0,0.4)] text-sm">
            ultra-clear 4K picture
          </div>

          <div className="flex gap-3 mt-1 text-sm">
            <span className="text-[rgba(213,21,43,1)] font-semibold">
              Rs.44,999.00
            </span>
            <span className="line-through text-[rgba(0,0,0,0.4)]">
              Rs.49,999.00
            </span>
          </div>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative w-full max-w-[283px] h-[336px] bg-[#f4f5f7] rounded-md shadow-md overflow-hidden">
        <img
          src={Rectangle_18}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3">
          <div className="font-bold text-sm">55-inches LED TV</div>
          <div className="text-[rgba(0,0,0,0.4)] text-sm">
            ultra-clear 4K picture
          </div>

          <div className="flex gap-3 mt-1 text-sm">
            <span className="text-[rgba(213,21,43,1)] font-semibold">
              Rs.44,999.00
            </span>
            <span className="line-through text-[rgba(0,0,0,0.4)]">
              Rs.49,999.00
            </span>
          </div>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative w-full max-w-[283px] h-[336px] bg-[#f4f5f7] rounded-md shadow-md overflow-hidden">
        <img
          src={Rectangle_18_1}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3">
          <div className="font-bold text-sm">55-inches LED TV</div>
          <div className="text-[rgba(0,0,0,0.4)] text-sm">
            ultra-clear 4K picture
          </div>

          <div className="flex gap-3 mt-1 text-sm">
            <span className="text-[rgba(213,21,43,1)] font-semibold">
              Rs.44,999.00
            </span>
            <span className="line-through text-[rgba(0,0,0,0.4)]">
              Rs.49,999.00
            </span>
          </div>
        </div>
      </div>

      {/* CARD 4 */}
      <div className="relative w-full max-w-[283px] h-[336px] bg-[#f4f5f7] rounded-md shadow-md overflow-hidden">
        <img
          src={Rectangle_17_1}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 w-full bg-white px-4 py-3">
          <div className="font-bold text-sm">55-inches LED TV</div>
          <div className="text-[rgba(0,0,0,0.4)] text-sm">
            ultra-clear 4K picture
          </div>

          <div className="flex gap-3 mt-1 text-sm">
            <span className="text-[rgba(213,21,43,1)] font-semibold">
              Rs.44,999.00
            </span>
            <span className="line-through text-[rgba(0,0,0,0.4)]">
              Rs.49,999.00
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>



{/* Brand we Offer */}
<div className="bg-white py-14 flex justify-center">
  <div className="w-full max-w-[1440px] px-4 lg:px-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
      <h1 className="text-[22px] sm:text-[26px] font-semibold">
        Brand we Offer
      </h1>

      <div className="bg-[rgba(213,21,43,1)] rounded-full px-5 py-2">
        <button className="flex items-center gap-2 text-white text-sm font-medium">
          Shop Now
          <img
            src={Group1}
            alt="arrow"
            className="w-[17px] h-[19px]"
          />
        </button>
      </div>
    </div>

    {/* Cards */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        justify-items-center
      "
    >

      {/* CARD 1 */}
      <div className="relative w-full max-w-[468px] h-[250px] bg-[rgba(49,49,49,1)] rounded-md shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-white text-xl font-medium">
            UP to 12% OFF
          </div>

          <div className="mt-4">
            <img src={Haier_logo} alt="Haier" />
          </div>

          <div className="mt-4 text-sm font-bold tracking-widest">
            <div className="text-white">Rs.44,999.00</div>
            <div className="text-white line-through opacity-70">
              Rs.52,599.00
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="absolute top-0 right-0 w-[260px] h-full">
          <img src={Mask_group} alt="" className="absolute top-0 right-0" />
          <img
            src={medium01}
            alt=""
            className="absolute bottom-4 right-8 w-[100px]"
          />
        </div>
      </div>

      {/* CARD 2 */}
      <div className="relative w-full max-w-[468px] h-[250px] bg-[rgba(255,243,204,1)] rounded-md shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-[rgba(34,34,34,1)] text-xl font-medium">
            UP to 25% OFF
          </div>

          <div className="mt-4">
            <img src={pngegg_2} alt="brand" />
          </div>

          <div className="mt-4 text-sm font-bold tracking-widest">
            <div className="text-[rgba(213,21,43,1)]">
              Rs.44,999.00
            </div>
            <div className="line-through text-[rgba(34,34,34,1)]">
              Rs.52,599.00
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0">
          <img src={Ellipse} alt="" className="absolute bottom-0 right-0" />
          <img
            src={pngegg_1}
            alt=""
            className="relative w-[150px] mr-6 mb-4"
          />
        </div>
      </div>

      {/* CARD 3 */}
      <div className="relative w-full max-w-[468px] h-[250px] bg-[rgb(255,236,223)] rounded-md shadow-md overflow-hidden">
        <div className="p-6">
          <div className="text-[rgba(34,34,34,1)] text-xl font-medium">
            UP to 15% OFF
          </div>

          <div className="mt-4">
            <img src={download_1} alt="brand" />
          </div>

          <div className="mt-4 text-sm font-bold tracking-widest">
            <div className="text-[rgba(213,21,43,1)]">
              Rs.44,999.00
            </div>
            <div className="line-through text-[rgba(185,163,163,0.6)]">
              Rs.52,599.00
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[260px] h-full">
          <img src={Group_49} alt="" className="absolute top-0 right-0" />
          <img
            src={removebg_preview}
            alt=""
            className="absolute bottom-6 right-4 w-[200px]"
          />
        </div>
      </div>

    </div>
  </div>
</div>

{/* Similar items */}
<div className="bg-[#f4f5f7] py-16">
  <div className="max-w-[1440px] mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {/* Card */}
      {[ 
        { img: Group_94, title: "Easy to Shop", text: "We provide amazing offers & discounts on our products" },
        { img: Group_95, title: "Free Shipping", text: "We ship all over the country FREE" },
        { img: Group_96, title: "Exciting Offers", text: "We provide amazing offers & discounts on our products" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[rgba(0,0,0,0.2)] rounded-[8px] px-6 py-6 text-center"
        >
          <img src={item.img} alt="" className="w-[32px] h-[32px] mx-auto mb-4" />
          <h3 className="text-[16px] mb-2">{item.title}</h3>
          <p className="text-[14.5px] text-[rgba(0,0,0,0.4)]">{item.text}</p>
        </div>
      ))}

    </div>
  </div>
</div>



    
    </div>
  )
}

export default Home