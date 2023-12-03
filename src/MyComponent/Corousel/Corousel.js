/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../Card/Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Corousel.css'

function Corousel({data}) {
  return (
    <div className='corousel-container'>
    <Swiper
    modules={[Virtual, Navigation, Pagination]}
    // onSwiper={setSwiperRef}
    slidesPerView={8}
    // centeredSlides={true}
    spaceBetween={-400}
    // navigation={true}
    navigation = {{nextEl : ".arrow-left" ,prevEl : ".arrow-right"}}
    virtual
  >
     {data.map(cardData =>   <SwiperSlide key={cardData.id}><Card
       
         imgSrc={cardData.image}
         followersCount={cardData.follows}
         label={cardData.title}
         /></SwiperSlide>)}
         </Swiper>
         <div className='arrow-left arrow'><img src='left.png'/></div>
         <div className='arrow-right arrow'><img  src='right.png'/></div>
</div>
  
  
  )
}

export default Corousel
