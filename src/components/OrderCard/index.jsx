import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const OrderCard = (props) => {
  const { id, title, image, price, handleDelete } = props;
  //const categoryImage = category && category.image ? category.image : null;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className='h-6 w-6 text-black cursor-pointer'
        onClick={() => handleDelete(id)}
      ></XMarkIcon>
    );
  }
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={image}
            alt={title}
          />
        </figure>
        <p className='text-sm font-ligt'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'> {price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
