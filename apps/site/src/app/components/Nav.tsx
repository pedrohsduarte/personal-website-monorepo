'use client';

import Link from 'next/link';
import {useState} from 'react';

import ThemeToggle from './ThemeToggle';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white p-4 text-gray-800 dark:bg-gray-800 dark:text-white'>
      <div className='mx-auto flex max-w-4xl items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          Your Name
        </Link>
        <div className='hidden items-center space-x-4 md:flex'>
          <Link href='/about' className='hover:text-gray-500 dark:hover:text-gray-300'>
            About
          </Link>
          <Link href='/articles' className='hover:text-gray-500 dark:hover:text-gray-300'>
            Articles
          </Link>
          <Link href='/projects' className='hover:text-gray-500 dark:hover:text-gray-300'>
            Projects
          </Link>
          <Link href='/resume' className='hover:text-gray-500 dark:hover:text-gray-300'>
            Resume
          </Link>
          <ThemeToggle />
        </div>
        <button
          className='rounded-md bg-gray-200 p-2 md:hidden dark:bg-gray-700'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Menu
        </button>
      </div>
      {isMenuOpen ? (
        <div className='flex flex-row-reverse'>
          <div className='mt-2 md:hidden'>
            <Link href='/' className='block py-2'>
              Home
            </Link>
            <Link href='/about' className='block py-2'>
              About
            </Link>
            <Link href='/articles' className='block py-2'>
              Articles
            </Link>
            <Link href='/projects' className='block py-2'>
              Projects
            </Link>
            <Link href='/resume' className='block py-2'>
              Resume
            </Link>
            <div className='py-2'>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Nav;
