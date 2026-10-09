import React from 'react'

const Banner = ({TravelImage}) => {
  return (
    <div className=' dark:bg-gray-900 dark:text-white'>
      <div
      data-aos="slide-left"
      data-aos-duration="700"
      className='w-full'>
        <img src={TravelImage} alt="" 
        className='h-[350px] w-full object-contain md:object-cover mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] '
        />
      </div>
    </div>
  )
}

export default Banner
