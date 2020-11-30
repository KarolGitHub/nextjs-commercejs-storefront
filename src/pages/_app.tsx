import App from 'next/app';
import React from 'react';
import '../global/tailwind.css';
import 'tailwindcss/tailwind.css';
import commerce from '../lib/commerce';
import collections from '../lib/collections';
import { CategoriesProvider } from '../contexts/categories-context';
import { ProductsProvider } from '../contexts/products-context';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const categoriesResponse = await commerce.categories.list();
    const categories = categoriesResponse.data.map((item: any) => ({
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
      <CategoriesProvider categories={categories}>
        <ProductsProvider products={products}>
          <Component {...restProps} />
        </ProductsProvider>
      </CategoriesProvider>
    );
  }
}
export default MyApp;
