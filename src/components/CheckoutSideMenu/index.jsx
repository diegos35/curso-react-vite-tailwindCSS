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
    setOrder,
    order,
    setCount,
    count,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filterProducts = carProducts.filter((product) => product.id !== id);
    setcarProducts(filterProducts);
    //setCount(count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: '05.26.23',
      products: carProducts,
      totalProducts: carProducts.length,
      totalPrice: totalPrice(carProducts),
    };
    setOrder([...order, orderToAdd]);
    setcarProducts([]);
    setCount();
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
      <div className='px-6 overflow-y-scroll flex-1'>
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
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total: </span>
          <span className='font-medium text-2xl'>
            ${totalPrice(carProducts)}
          </span>
        </p>
        <button
          className='bg-black py-3 text-white w-full rounded'
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
