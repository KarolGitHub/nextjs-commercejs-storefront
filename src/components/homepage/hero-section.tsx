import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Swiper, { SwiperInstance } from 'react-id-swiper';
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

const swiperParams = {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 1000,
  effect: 'fade',
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
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
  const swiperRef = useRef<SwiperInstance>(null);

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
                <ul className="swiper-content max-w-xs">
                  <li className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase">
                    <h3>{product.name}</h3>
                  </li>
                  <li className="text-lg sm:text-xl md:text-2xl font-semibold">
                    <h2>{product.description.replace(reg, '')}</h2>
                  </li>
                  <li className="text-base sm:text-lg md:text-xl font-bold">
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

  const scrollHandler = (entries: IntersectionObserverEntry[]) => {
    if (swiperRef) {
      const ratio = entries[entries.length - 1].intersectionRatio;
      const isSwiperAutoplay = swiperRef.current.autoplay.running;
      if (isSwiperAutoplay && ratio < 0.5) {
        swiperRef.current.autoplay.stop();
      } else if (!isSwiperAutoplay && ratio >= 0.5) {
        swiperRef.current.autoplay.start();
      }
    }
  };

  const initSwiperEventListeners = (swiperInstance: SwiperInstance) => {
    swiperRef.current = swiperInstance;
    swiperRef.current.on('slideChangeTransitionEnd', () =>
      setTransitionIn(true)
    );
    swiperRef.current.on('slideChange', () => setTransitionIn(false));
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(scrollHandler, {
      rootMargin: '0px 0px 0px -80px',
      threshold: 0.5,
    });
    if (swiperRef.current) {
      observer.observe(swiperRef.current.el);
    }
    return () => {
      observer.disconnect();
      swiperRef.current.off('slideChangeTransitionEnd', () =>
        setTransitionIn(true)
      );
      swiperRef.current.off('slideChange', () => setTransitionIn(false));
    };
  }, []);

  return (
    <div className="relative -top-14">
      <Swiper {...swiperParams} getSwiper={initSwiperEventListeners}>
        {swiperCollection()}
      </Swiper>
    </div>
  );
};
export default HeroSection;
