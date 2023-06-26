import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, carProducts } =
    useContext(ShoppingCartContext);

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
      <div className='px-6'>
        {carProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product?.images}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
