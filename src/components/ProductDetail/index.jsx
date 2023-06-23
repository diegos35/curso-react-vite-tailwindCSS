import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

const ProducDetail = () => {
  const { isProductOpen, closeProductDetail, producToShow } =
    useContext(ShoppingCartContext);
  return (
    <aside
      className={` ${
        isProductOpen ? 'flex' : 'hidden'
      } flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)] bottom-4 top-68`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => closeProductDetail()}>
          <XMarkIcon className='h-6 w-6 text-black cursor-pointer'></XMarkIcon>
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={producToShow.images}
          alt={producToShow.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>{producToShow.price}</span>
        <span className='font-medium text-md'>{producToShow.title}</span>
      </p>
    </aside>
  );
};

export default ProducDetail;
