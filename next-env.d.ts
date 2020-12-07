/// <reference types="next" />
/// <reference types="next/types/global" />
declare module 'tailwindcss-debug-screens';
declare interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
  image: string;
  link: string;
}
declare interface Product {
  id: string;
  permalink: string;
  media: { source: string };
  name: string;
  price: { formatted_with_symbol: string };
  description: string;
  categories: Category[];
}
