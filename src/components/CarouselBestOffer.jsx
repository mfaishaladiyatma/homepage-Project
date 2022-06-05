import React from 'react'

import promo from '../images/promoBuy1Get1.svg'
import gelasKacaBiru from '../images/gelasKacaBeningBiru.svg'
import arrowRight from '../images/arrow-right-white.svg'
import arrowLeft from '../images/arrow-left-white.svg'
import { AiFillStar } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './CarouselBestOffer.css'

import { Navigation, Autoplay } from "swiper";

export default function CarouselBestOffer() {
  return (
    <>
      <div className='font-Inter border-2 border-green-500 h-[600px] flex  justify-center '>
        <section className='mt-10 container px-5 flex flex-col gap-y-10'>
          <h2 className='font-[500] text-[40px]'>Best Offer buy 1 get 1</h2>
          <div className='flex container border-2 h-full border-red-500 relative'>
            <img className='h-full' src={promo} alt="" />
            <div className='container h-[400px] w-[85%] left-[15%] top-[50%] translate-y-[-50%] absolute border-2 border-blue-300'>
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                // loop={true}
                navigation={{
                  nextEl: ".button-next",
                  prevEl: ".button-prev",
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]}
                speed={700}
                // centeredSlides={true}
                className="carouselPromo"
              >
                <SwiperSlide>
                  <div className='h-full flex border-2 border-slate-400 bg-white rounded-[10px] container'>
                    <div className='flex flex-col container h-full p-3'>
                      <img className='h-[60%]' src={gelasKacaBiru} alt="" />
                      <div className='flex container flex-col gap-y-5'>
                        <h4 className='font-bold'>Gelas kaca bening biru</h4>
                        <div className='flex flex-col gap-y-3'>
                          <h3 className='font-bold text-[24px]'>Rp 23.000</h3>
                          <div className='flex gap-x-3'>
                            <div className='flex items-center gap-x-2'>
                              <div className='text-yellow-400'><AiFillStar /></div>
                              <p>4.8</p>
                            </div>
                            <div>
                              |
                            </div>
                            <div>
                              <p>Terjual 100</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>
                    slide 2
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='h-full border-2 border-black container '>

                  </div>
                </SwiperSlide>


                <div className='swiper-button-next button-next'>
                  <img src={arrowRight} alt="" />
                </div>
                <div className='swiper-button-prev button-prev'>
                  <img src={arrowLeft} alt="" />
                </div>
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}