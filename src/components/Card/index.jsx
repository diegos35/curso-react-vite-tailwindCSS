import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';

const Card = ({ category: { name }, ...props }) => {
  const {
    count,
    setCount,
    openProductDetail,
    setproducToShow,
    setcarProducts,
    carProducts,
    openCheckoutSideMenu,
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    //closeProductDetail,
  } = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    openProductDetail();
    setproducToShow(productDetail);
    console.log('other');
    //closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCount(count + 1);
    setcarProducts([...carProducts, { ...productData }]);
    openCheckoutSideMenu();
    console.log('entra', isCheckoutSideMenuOpen);
    //closeProductDetail();
    //openCheckoutSideMenu();
  };

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct({ ...props })}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {name}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={props.images}
          alt={props.title}
        />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          <PlusIcon
            onClick={(event) => {
              addProductsToCart(event, { ...props });
            }}
          ></PlusIcon>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{props.title}</span>
        <span className='text-lg font-medium'>${props.price}</span>
      </p>
    </div>
  );
};

export default Card;