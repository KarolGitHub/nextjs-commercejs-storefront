import React, { useContext } from 'react';

export const CategoriesContext = React.createContext<{
  categories: Category[];
}>({ categories: [] });

export const useCategories = () => useContext(CategoriesContext);

type Props = {
  categories: Category[];
  children: React.ReactNode;
};
export const CategoriesProvider = ({ categories, children }: Props) => {
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
