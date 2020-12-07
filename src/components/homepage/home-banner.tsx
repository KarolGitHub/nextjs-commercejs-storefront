import React from 'react';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div>
      <div>
        <Link href="/about">
          <a>
            <p>Find out more</p>
            <img src="/icon/arrow-long-right.svg" alt="about" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
