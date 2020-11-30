import React from 'react';
import Head from 'next/head';
import Root from '../components/UI/Root/Root';
import Footer from '../components/UI/Footer/Footer';
import Collections from '../components/collections/collections';

const Home = () => (
  <Root>
    <Head>
      <title>Collection</title>
    </Head>
    <Collections />
    <Footer />
  </Root>
);

export default Home;
