import React, { useState } from 'react';
import Logo from '../assets/Group.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, Setnav] = useState(false);
  const handleClick = () => Setnav(!nav);
  return (
    <div className='m-2'>
      <div className='flex items-center justify-between md:hidden'>
        <div className=' w-2/4'>
          <img className='m-2 h-5 w-[5rem]' src={Logo} alt='logo' />
        </div>
        <button className='m-2 rounded-[10px] bg-[#A02279] p-2 text-xs text-white'>
          Connect Wallet
        </button>
        <div className=' z-10' onClick={handleClick}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div
          className={
            !nav
              ? 'hidden'
              : ' absolute top-0 right-0 flex h-screen w-3/5 flex-col items-center justify-center bg-slate-100'
          }
        >
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/placeToStay'>Place to stay</NavLink>
          <NavLink to='/#'>NFTs</NavLink>
          <NavLink to='/#'>Community</NavLink>
        </div>
      </div>

      <div className=' mx-5 hidden items-center justify-between py-5 px-10 md:flex'>
        <div>
          <img src={Logo} alt='logo' className='md:w-[180px] lg:w-[233px]' />
        </div>
        <div className='flex md:gap-5 md:text-sm lg:gap-8 lg:text-xl '>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/placeToStay'>Place to stay</NavLink>
          <NavLink to='/#'>NFTs</NavLink>
          <NavLink to='/#'>Community</NavLink>
        </div>
        <div>
          <button className='rounded-[10px] bg-[#A02279] py-2 px-4 text-xs text-white'>
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
