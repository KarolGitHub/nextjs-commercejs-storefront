import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Swiper from 'react-id-swiper';
import { Transition } from 'react-transition-group';
import { useCategories } from '../../contexts/categories-context';
import { useProducts } from '../../contexts/products-context';

const duration = 1;

const defaultStyle = {
  transition: `all 500ms ease-in-out`,
  transform: 'translateY(0)',
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 0, transform: 'translateY(0)' },
  entered: {
    opacity: 1,
    transform: 'translateY(-90%)',
    transition: `all 500ms ease-in-out`,
  },
  exiting: { opacity: 1, transform: 'translateY(-90%)' },
  exited: {
    opacity: 0,
    transform: 'translateY(0)',
  },
};

const params = {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
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

const HeroSection: React.FC = () => {
  const { categories } = useCategories();
  const { products } = useProducts();

  const [transitionIn, setTransitionIn] = useState<boolean>(true);
  const swiperRef = useRef<any>(null);

  const filterFeaturedProducts = () => {
    const featured = categories?.find(
      (category: Category) => category.slug === 'featured-products'
    );
    if (!featured) {
      return [];
    }
    return products?.filter((product: Product) =>
      product.categories.find(
        (productCategory: Category) => productCategory.id === featured.id
      )
    );
  };

  const swiperCollection = () => {
    const reg = /(<([^>]+)>)/gi;
    return filterFeaturedProducts().map((product: Product) => (
      <div key={product.id}>
        <div
          className="relative bg-cover bg-center min-h-3/4 flex flex-col py-5"
          style={{
            backgroundImage: `url("${product.media.source}")`,
          }}>
          <Transition in={transitionIn} timeout={duration}>
            {(state) => (
              <div
                className="flex flex-col absolute px-8 top-3/4 left-5"
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}>
                <ul className="swiper-content">
                  <li className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase">
                    <h3>{product.name}</h3>
                  </li>
                  <li className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    <h2>{product.description.replace(reg, '')}</h2>
                  </li>
                  <li className="text-lg sm:text-xl md:text-2x1 font-bold">
                    <h1>{product.price.formatted_with_symbol}</h1>
                  </li>
                </ul>
                <div className="md:mt-3 py-3">
                  <Link
                    href="/product/[permalink]"
                    as={`/product/${product.permalink}`}>
                    <a className="button">SHOP NOW</a>
                  </Link>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    ));
  };

  const initSwiperEventListeners = (swiperInstance: any) => {
    swiperRef.current = swiperInstance;
    swiperRef.current.on('slideChangeTransitionEnd', () =>
      setTransitionIn(true)
    );
    swiperRef.current.on('slideChange', () => setTransitionIn(false));
  };

  useEffect(
    () => () => {
      swiperRef.current.off('slideChangeTransitionEnd', () =>
        setTransitionIn(true)
      );
      swiperRef.current.off('slideChange', () => setTransitionIn(false));
    },
    []
  );

  return (
    <div className="relative -top-20">
      <Swiper {...params} getSwiper={initSwiperEventListeners}>
        {swiperCollection()}
      </Swiper>
    </div>
  );
};
export default HeroSection;
