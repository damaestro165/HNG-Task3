import React from 'react';
import { data } from '../data.js';
import NftCard from './NftCard.jsx';

const Inspiration = () => {
  const miniData = data.slice(0, 8);
  return (
    <div className='mt-5 flex flex-col items-center justify-center py-[2.5rem] lg:px-[5rem]'>
      <h2 className='mb-[2rem] text-xl font-bold md:text-3xl lg:text-[46px]'>
        Inspiration for your next adventure
      </h2>
      <div className='mt-2 grid gap-4 md:grid-cols-2 lg:grid-cols-4 tall:grid-cols-3'>
        {miniData.map((item) => (
          <NftCard image={item.img} id={item.id} alt='Nfts' />
        ))}
      </div>
    </div>
  );
};

export default Inspiration;
