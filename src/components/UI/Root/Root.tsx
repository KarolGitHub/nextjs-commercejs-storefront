import React from 'react';
import Header from '../Header/Header';

type Props = {
  children: React.ReactNode;
};

const Root: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Root;
