import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];
const HeroSection: FunctionComponent = () => {
  return (
    <div>
      {images.map((image) => (
        <div key={image}>
          <div
            className="bg-cover"
            style={{
              backgroundImage: `url("${image}")`,
            }}>
            <Link href="/collection">
              <a></a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HeroSection;
