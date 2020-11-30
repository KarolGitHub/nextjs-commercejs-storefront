import React, { useContext } from 'react';

export const CategoriesContext = React.createContext<any>({ categories: [] });

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ categories, children }: any) => {
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
