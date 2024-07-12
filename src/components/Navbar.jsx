import React from 'react';
import { RESUME_PATH } from '../assets/root.link';
const Navbar = () => {
  return (
    <nav className='my-0 space-x-4 md:space-x-10 text-white font-roboto flex flex-col md:flex-row justify-between items-center'>
       <a href="#"  rel='noreferrer' className='text-red-300 text-3xl my-8  p-2 hover:bg-gray focus:bg-gray rounded-lg'>
              @Omkar-107
            </a>
      <div>
        <ul className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 md:text-xl justify-center md:justify-end font-thin'>
          <li>
            <a href='#Experience' className='block md:inline py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg '>
              Experience
            </a>
          </li>
          <li>
            <a href='#Projects' className='block md:inline py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
              Projects
            </a>
          </li>
          <li>
            <a href='#Skill' className='block md:inline py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
              Skill
            </a>
          </li>
          <li>
            <a href='#contact' className='block md:inline py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
              Contact
            </a>
          </li>
          <li>
            <a href={RESUME_PATH} target='_blank' rel='noreferrer' className='block md:inline py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
