import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  zIndex: '-1',
  transition: `height ${duration}ms ease-in-out`,
  height: 0,
};

const transitionStyles: any = {
  entering: { height: '100vh' },
  entered: { height: '100vh' },
  exiting: { height: 0 },
  exited: { height: 0 },
};

const mobileMenuLinks = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/collection',
  },
  {
    name: 'About',
    link: '/about',
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>();

  const scrollHandler = (entries: IntersectionObserverEntry[]) => {
    if (headerRef && !entries[0].isIntersecting) {
      headerRef.current?.classList.add('bg-transition');
    } else {
      headerRef.current?.classList.remove('bg-transition');
    }
  };

  const toggleMobileMenuHandler = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(scrollHandler, {
      root: document.body,
      rootMargin: '0px 0px -100% 0px',
    });
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      ref={(el: HTMLElement) => (headerRef.current = el)}
      className="sticky top-0 left-0 right-0 font-semibold z-10 bg-transparent border-b border-solid border-transparent">
      <div className="flex justify-between px-6 py-2 sm:px-12 sm:py-3">
        <div className="logo-container">
          <img
            src={`/icon/${isMobileMenuOpen ? 'cross' : 'menu'}.svg`}
            onClick={toggleMobileMenuHandler}
            className="w-10 mr-1 d-block sm:hidden cursor-pointer"
            alt="Menu icon"
          />
          <Link href="/">
            <a>
              <img
                src="/images/commerce.svg"
                className="logo cursor-pointer"
                alt="Logo"
              />
            </a>
          </Link>
        </div>

        <div className="hidden sm:flex">
          <Link href="/">
            <a href="/" className="mr-4 link dark:text-white">
              Home
            </a>
          </Link>
          <Link href="/collection">
            <a href="/collection" className="mr-4 link dark:text-white">
              Shop
            </a>
          </Link>
          <Link href="/about">
            <a href="/about" className="link dark:text-white">
              About
            </a>
          </Link>
        </div>
      </div>

      <Transition in={isMobileMenuOpen} timeout={duration}>
        {(state) => (
          <div
            className="sm:hidden fixed top-0 left-0 right-0 overflow-hidden"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}>
            <div className="absolute top-0 left-0 right-0 h-screen py-28 px-6 bg-blue-700 flex flex-col justify-center">
              {mobileMenuLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="block mb-4 text-2xl text-black text-center">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </header>
  );
};

export default Header;
