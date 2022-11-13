import React from 'react';
import HouseA from '../assets/houseA.png';
import HouseB from '../assets/houseB.png';
import HouseC from '../assets/houseC.png';

const Nfts = () => {
  return (
    <div className='mt-5 flex h-[40rem] flex-col gap-[2rem] bg-[#A02279] p-2 md:flex-row md:justify-center md:p-8 lg:h-[774px] lg:items-center lg:p-[5rem]'>
      <div className='mb-10 flex flex-col gap-7 p-5 text-center text-white md:mb-0 md:w-2/5 md:justify-center md:text-left lg:justify-between'>
        <h2 className='text-3xl font-bold md:text-2xl lg:text-5xl'>
          Metabnb NFTs
        </h2>
        <p className='text-sm leading-[2rem] md:text-xs lg:text-base lg:leading-[2rem]'>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className=' w-full rounded-lg bg-white p-4 text-base text-[#A02279] md:w-[156px]'>
          Learn more
        </button>
      </div>
      <div className=' w-4/5 md:mx-[2rem] md:w-3/5'>
        <div className='relative '>
          <img
            src={HouseA}
            alt='Nfts'
            className='absolute -right-6 -top-10 w-[10rem] rotate-[17.76deg] rounded-[10px] md:right-0 md:top-[8rem] md:w-[15rem] lg:-top-[14rem] lg:w-[350px]'
          />
          <img
            src={HouseB}
            alt='Nfts'
            className=' absolute right-[5rem] top-[3rem] w-[10rem] rotate-[-26.02deg] rounded-[10px] md:left-0 md:top-60 md:w-[15rem] lg:-top-10 lg:w-[350px]'
          />
          <img
            src={HouseC}
            alt='Nfts'
            className=' absolute -right-[3rem] top-[5rem] w-[10rem] rotate-[-8.76deg] rounded-[10px] md:right-0 md:top-80 md:w-[15rem]  lg:top-5 lg:-right-5 lg:w-[350px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Nfts;
