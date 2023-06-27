import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';
import { totalPrice } from '../../utils';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    carProducts,
    setcarProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filterProducts = carProducts.filter((product) => product.id !== id);
    setcarProducts(filterProducts);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4 top-68`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => closeCheckoutSideMenu()}>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
        </div>
      </div>
      <div className='px-6 overflow-y-scroll'>
        {carProducts.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product?.images}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className='px-6'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>
            ${totalPrice(carProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
