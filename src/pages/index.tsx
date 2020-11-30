import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import HeroSection from '../components/homepage/hero-section';
import HomeBanner from '../components/homepage/home-banner';
import CategoryBanner from '../components/homepage/category-banner';
import ProductsBanner from '../components/homepage/products-banner';
import Root from '../components/UI/Root/Root';
import Footer from '../components/UI/Footer/Footer';

const Home: FunctionComponent = () => (
  <Root>
    <Head>
      <title>Home | commerce</title>
    </Head>
    <HeroSection />
    <HomeBanner />
    <CategoryBanner />
    <ProductsBanner />
    <Footer />
  </Root>
);

export default Home;
