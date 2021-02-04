import React from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';

const swiperParams = {
  effect: 'coverflow',
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 10,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const quotes = [
  'Games motivate us to participate more fully in whatever we’re doing',
  'Games eliminate our fear of failure and improve our chances for success',
  'Games challenge us with voluntary obstacles and help us put our personal strengths to better use',
  'Games help us feel more rewarded for making our best effort',
  'Games make it easier to take good advice and try out happier habits',
  'Games help us band together and create powerful communities from scratch',
  'The gratifications we get from playing games are an infinitely renewable resource',
  'Games help us define awe-inspiring goals and tackle seemingly impossible social missions together',
  'Games help us make a more concerted effort and over time, they give us collaboration superpowers',
  'Games help us imagine and invent the future together',
];

const HomeBanner: React.FC = () => {
  return (
    <div className="p-5">
      <Swiper {...swiperParams}>
        {quotes.map((quote: string, index: number) => (
          <div key={`quote${index}`} className="mx-auto max-w-4xl text-center">
            <p className="text-xl sm:text-2xl md:text-3xl uppercase mb-2">
              {quote}
            </p>
            <cite className="text-blue-500">Jane McGonigal</cite>
            <div className="text-gray-500 pb-6">Game designer</div>
          </div>
        ))}
      </Swiper>
      <div className="flex items-center justify-center my-4">
        <Link href="/about">
          <a className="flex py-3 items-center text-black border-black border-b border-solid">
            <p className="mr-3">Find out more</p>
            <img src="/icon/arrow-long-right.svg" alt="about" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
