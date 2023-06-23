import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

//recibe hijos
export const ShoppingCartProvider = ({ children }) => {
  /* Shopping cart . increment quantity */
  const [count, setCount] = useState(0);

  //product Detail Open/Close
  const [isProductOpen, setIsProductOpen] = useState(false);
  const openProductDetail = () => setIsProductOpen(true);
  const closeProductDetail = () => setIsProductOpen(false);

  /* product Detail . show product */
  const [producToShow, setproducToShow] = useState({});
  //console.log(count);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        producToShow,
        setproducToShow,
        isProductOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
