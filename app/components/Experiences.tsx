"use client"
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const companies={
    "SPRINKLR":"https://upload.wikimedia.org/wikipedia/commons/7/79/Sprinklr_Logo.png",
    "L&T":"https://static.brandirectory.com/logos/LARO001_larsen_toubro_logo_png.png",
    "BCT":"https://media.licdn.com/dms/image/C5616AQF46_2zdGP2nQ/profile-displaybackgroundimage-shrink_200_800/0/1657774640467?e=2147483647&v=beta&t=0SJCg1JGI2WLVc3aZefdGXWujRzlOvKh1W4OvMxmR8A",
    "Kissflow":"data:image/png;base64,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",
    "Lyearn":"https://cdn.lyearn.com/assets/images/lyearn-dev-logo.png",
    "SRM-Ehub":"https://d2lk14jtvqry1q.cloudfront.net/media/small_SRM_6efef0c655_51fd7359a7_d3601f4394_8c9af4c411.png",
}
export default function Experiences() {
  return (
    <>
    <div>
        <h1 className='font-bold italic py-10 text-4xl text-center'>EXPERIENCES</h1>
        <div className="relative w-full mt-6 px-20">
          <Slider
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
            dots={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {Object.entries(companies).map(([name, url], idx) => (
              <img
                key={idx}
                src={url}
                className="h-25 w-full px-2"
                alt={`logo-${name}`}
              />
            ))}
          </Slider>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3"></div>
        </div>

    </div>
    </>
  )
}
