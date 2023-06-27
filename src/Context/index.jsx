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

  /* Checkout Side MEnu .Open/Close */
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  /* product Detail . show product */
  const [producToShow, setproducToShow] = useState({});

  /* Shopping Cart . Add products to cart */
  const [carProducts, setcarProducts] = useState([]);

  /*Shopping Cart . Order  */
  const [order, setOrder] = useState([]);

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
        carProducts,
        setcarProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
