import App from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../global/tailwind.css';
import 'swiper/css/swiper.css';
import 'tailwindcss/tailwind.css';

import commerce from '../lib/commerce';
import collections from '../lib/collections';
import { CategoriesProvider } from '../contexts/categories-context';
import { ProductsProvider } from '../contexts/products-context';

const ViewportMetaLink = () => (
  <meta
    name="viewport"
    content="minimum-scale=1, initial-scale=1, width=device-width"
    key="viewport-meta"
  />
);

const TitleLink = () => (
  <title key="title">Next.js Commerce.js Storefront</title>
);

const links = () => [ViewportMetaLink(), TitleLink()];
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const categoriesResponse = await commerce.categories.list();
    const categories = categoriesResponse.data.map((item: Category) => ({
      ...collections.find((data) => data.slug === item.slug),
      ...item,
    }));
    const { data: products } = await commerce.products.list();
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : { categories: categories, products: products }),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    const { categories, products, ...restProps } = pageProps;

    return (
      <>
        <Head>{links()}</Head>
        <CategoriesProvider categories={categories}>
          <ProductsProvider products={products}>
            <Component {...restProps} />
          </ProductsProvider>
        </CategoriesProvider>
      </>
    );
  }
}
export default MyApp;
