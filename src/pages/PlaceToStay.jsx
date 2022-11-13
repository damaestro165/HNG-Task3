import React from 'react';
import { data } from '../data';
import NftCard from '../components/NftCard';
import Setting from '../assets/setting.png';

const PlaceToStay = () => {
  return (
    <div className='mx-5 mt-[7rem] md:m-5'>
      <div className='flex items-center justify-center text-[#434343] md:justify-start md:px-[3rem]'>
        <div className='mr-3 md:hidden'>
          <select
            id='countries'
            className='flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2 '
          >
            <option className='text-xs' selected>
              Select Categories
            </option>
            <option className='text-xs'>Resturant</option>
            <option className='text-xs'>Cottage</option>
            <option className='text-xs'>Castle</option>
            <option className='text-xs'>fantast city</option>
            <option className='text-xs'>beach</option>
            <option className='text-xs'>Carbins</option>
            <option className='text-xs'>Off-grid</option>
            <option className='text-xs'>Farm</option>
          </select>
        </div>
        <div className=' hidden gap-5 md:grid md:grid-cols-4 lg:grid-cols-8'>
          <p>Resturant</p>
          <p>Cottage</p>
          <p>Castle</p>
          <p>fantast city</p>
          <p>beach</p>
          <p>Carbins</p>
          <p>Off-grid</p>
          <p>Farm</p>
        </div>
        <button className='flex w-[161px] justify-between rounded-lg border-2 border-[#B4B4B4] p-2 md:ml-[5rem] lg:ml-0'>
          Location
          <span>
            <img src={Setting} />
          </span>
        </button>
      </div>
      <div className='mt-2 grid gap-5 p-2 md:grid-cols-2 md:p-[3rem] lg:grid-cols-4 tall:grid-cols-3'>
        {data.map((item) => (
          <NftCard image={item.img} id={item.id} alt='Nfts' />
        ))}
      </div>
    </div>
  );
};

export default PlaceToStay;
