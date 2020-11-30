import React from 'react';
import Header from '../Header/Header';

const Root = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Root;
