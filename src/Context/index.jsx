import { createContext } from 'react';

const ShoppingCartContext = createContext();

//recibe hijos
export const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider>{children}</ShoppingCartContext.Provider>
  );
};
