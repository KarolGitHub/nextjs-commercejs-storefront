import React, { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer>
      Site developed by Karol Gardyjas&copy;{' '}
      {new Date().getFullYear().toString()}{' '}
    </footer>
  );
};

export default Footer;
