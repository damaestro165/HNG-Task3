import React from 'react';
import Star from '../assets/star.png';

const NftCard = ({ image, id }) => {
  return (
    <div
      key={id}
      className='flex h-[372px] w-[292px] flex-col items-center justify-evenly rounded-2xl border-2 border-[#D7D7D7]'
    >
      <img src={image} />
      <div className='flex w-[260px] flex-col gap-2  font-normal text-[#434343] '>
        <div className='flex justify-between text-sm'>
          <p>Desert king</p>
          <p className=' font-bold'>1MBT per night</p>
        </div>
        <div className='flex justify-between text-xs'>
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className='mb-2 flex gap-2'>
          <img src={Star} className='h-3 w-3' />
          <img src={Star} className='h-3 w-3' />
          <img src={Star} className='h-3 w-3' />
          <img src={Star} className='h-3 w-3' />
          <img src={Star} className='h-3 w-3' />
        </div>
      </div>
    </div>
  );
};

export default NftCard;
