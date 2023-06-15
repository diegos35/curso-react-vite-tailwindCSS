import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.escuelajs.co/api/v1';
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(`Oh no, ocurrió un error: ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {products?.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
