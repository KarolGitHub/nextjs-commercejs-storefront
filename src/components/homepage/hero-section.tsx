import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

const params = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];
const HeroSection: FunctionComponent = () => {
  return (
    <div className="relative">
      <Swiper {...params}>
        {images.map((image) => (
          <div key={image}>
            <div
              className="bg-cover bg-center min-h-3/4"
              style={{
                backgroundImage: `url("${image}")`,
              }}>
              <Link href="/collection">
                <a></a>
              </Link>
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroSection;
