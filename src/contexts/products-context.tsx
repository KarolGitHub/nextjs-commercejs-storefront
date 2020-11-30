import React, { useContext } from 'react';

export const ProductsContext = React.createContext<any>({ products: [] });

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ products, children }: any) => {
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
