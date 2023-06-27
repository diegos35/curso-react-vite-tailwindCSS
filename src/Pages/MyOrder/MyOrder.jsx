import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  console.log(order?.slice(-1)[0]);
  return (
    <Layout>
      MyOrder
      <div className='flex flex-col w-80'>
        {order?.slice(-1)[0].products.map((product) => (
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
