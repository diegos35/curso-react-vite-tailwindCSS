import React, { useContext } from 'react';
import OrdersCard from '../../OrdersCard';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {order.map((orderItem, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={orderItem.totalPrice}
            totalProducts={orderItem.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
