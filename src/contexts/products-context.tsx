import React, { useContext } from 'react';

export const ProductsContext = React.createContext<{ products: Product[] }>({
  products: [],
});

export const useProducts = () => useContext(ProductsContext);

type Props = {
  products: Product[];
  children: React.ReactNode;
};

export const ProductsProvider = ({ products, children }: Props) => {
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
