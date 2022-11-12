import React from 'react';
import ImageA from '../assets/imageA.png';
import ImageB from '../assets/imageB.png';
import ImageC from '../assets/imageC.png';
import ImageD from '../assets/imageD.png';
import Mbtoken from '../assets/mb.png';
import Metamusk from '../assets/logo.svg';
import Opensea from '../assets/frame.svg';

const Cta = () => {
  return (
    <main>
      <div className=' my-8 mx-5 flex flex-col justify-between md:my-[4rem] md:mx-[4rem] md:flex-row md:items-center  '>
        <div className='flex flex-col gap-5 md:w-4/5 lg:w-1/2 lg:gap-[48px]'>
          <h1 className='text-2xl font-bold lg:text-[46px] lg:leading-[3rem]'>
            Rent a Place away from Home in the Metaverse
          </h1>
          <div className='mt-5 pl-5 md:mt-0 md:hidden '>
            <div className=' grid grid-cols-2 grid-rows-5 justify-items-center gap-4'>
              <div className='row-span-2 row-start-2'>
                <img src={ImageA} />
              </div>
              <div className='row-span-2 row-start-4'>
                <img src={ImageD} />
              </div>
              <div className='row-span-2'>
                <img src={ImageC} />
              </div>
              <div className='row-span-2'>
                <img src={ImageB} />
              </div>
            </div>
          </div>
          <p className=' text-sm md:text-lg lg:text-2xl'>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div>
            <input
              type='text'
              placeholder='Search for location'
              className='w-2/3 rounded-tl-lg rounded-bl-lg border-2 px-2 py-2 md:py-4'
            />
            <button className='w-1/3 rounded-tr-lg rounded-br-lg border-2 border-[#A02279] bg-[#A02279] py-2 px-2 text-white md:py-4 lg:w-[10rem]'>
              Search
            </button>
          </div>
        </div>
        <div className='mt-5 hidden pl-5 md:block lg:mt-0 '>
          <div className=' grid grid-cols-2 grid-rows-5 justify-items-center gap-4'>
            <div className='row-span-2 row-start-2'>
              <img src={ImageA} />
            </div>
            <div className='row-span-2 row-start-4'>
              <img src={ImageD} />
            </div>
            <div className='row-span-2'>
              <img src={ImageC} />
            </div>
            <div className='row-span-2'>
              <img src={ImageB} />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly bg-[#A02279]'>
        <img src={Mbtoken} className='w-[6rem] md:w-[150px] lg:w-[214.14px]' />
        <img src={Metamusk} className='w-[6rem] md:w-[150px] lg:w-[214.14px]' />
        <img src={Opensea} className='w-[6rem] md:w-[150px] lg:w-[214.14px]' />
      </div>
    </main>
  );
};

export default Cta;
