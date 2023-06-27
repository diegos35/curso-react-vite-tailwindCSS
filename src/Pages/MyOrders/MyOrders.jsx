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
      <div className='flex items-center  relative w-80'>
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => {
        <Link key={index} to={`/my-orders/${order.id}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>;
      })}
    </Layout>
  );
}

export default MyOrders;
