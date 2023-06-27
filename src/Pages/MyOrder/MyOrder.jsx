import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../components/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;
  console.log(order);
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'></ChevronLeftIcon>
        </Link>
        <h1>My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {order?.[index]?.products.map((product) => (
          <OrderCard
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product?.images}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
