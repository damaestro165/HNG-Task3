import React from 'react';
import FooterLogo from '../assets/Group.svg';
import Twitter from '../assets/twitter.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import CopyRight from '../assets/copyright.png';

const Footer = () => {
  return (
    <footer className='grid gap-10 bg-[#1D1D1E] p-5 text-white md:grid-cols-2 md:p-[4rem] lg:grid-cols-4 lg:flex-row '>
      <div className='flex flex-col gap-10'>
        <img src={FooterLogo} className='w-[233px]' />
        <div className='mt-10 flex flex-col gap-10'>
          <div className='flex gap-10'>
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Twitter} />
          </div>
          <div className='flex gap-2'>
            <img src={CopyRight} className='h-4 w-4' />
            <p className='text-sm'>2022 Metabnb</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className='mb-6 font-bold'>Community</h4>
        <ul>
          <li className='my-2 text-sm'>NFT</li>
          <li className='my-2 text-sm'>Tokens</li>
          <li className='my-2 text-sm'>Landlords</li>
          <li className='my-2 text-sm'>Discord</li>
        </ul>
      </div>
      <div>
        <h4 className='mb-6 font-bold'>Places</h4>
        <ul>
          <li className='my-2 text-sm'>Castle</li>
          <li className='my-2 text-sm'>Farms</li>
          <li className='my-2 text-sm'>Beach</li>
          <li className='my-2 text-sm'>Learn more</li>
        </ul>
      </div>
      <div>
        <h4 className='mb-6 font-bold'>About us</h4>
        <ul>
          <li className='my-2 text-sm'>Road map</li>
          <li className='my-2 text-sm'>Creators</li>
          <li className='my-2 text-sm'>Career</li>
          <li className='my-2 text-sm'>Contact us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
