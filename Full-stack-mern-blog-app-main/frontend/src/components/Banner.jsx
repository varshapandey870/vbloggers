import React from 'react'
import {banners} from '../assets/assets';
import { useState,useEffect } from 'react';


const Banner = () => {

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % banners.length);
  const prevSlide = () => setIndex((index - 1 + banners.length) % banners.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>

      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg z-10"> 
      <img
        src={banners[index]}
        alt={`Slide ${index}`}
        className="w-full h-120 object-cover transition-all duration-500"
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className=" cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        &#8592;
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className=" cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-white" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
     </div>
  )
}

export default Banner