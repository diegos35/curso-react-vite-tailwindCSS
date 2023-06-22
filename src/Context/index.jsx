import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

//recibe hijos
export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);
  //console.log(count);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductOpen,
        openProductDetail,
        closeProductDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
