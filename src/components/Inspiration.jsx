import React from 'react';
import { data } from '../data.js';
import NftCard from './NftCard.jsx';

const Inspiration = () => {
  const miniData = data.slice(0, 8);
  return (
    <div className='mt-5 flex flex-col items-center justify-center py-2 lg:py-5'>
      <h2 className='mb-5 text-xl font-bold md:text-3xl lg:text-[46px]'>
        Inspiration for your next adventure
      </h2>
      <div className='mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {miniData.map((item) => (
          <NftCard image={item.img} id={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
