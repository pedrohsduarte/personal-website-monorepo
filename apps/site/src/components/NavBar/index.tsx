'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';

import ThemeToggle from '../Common/ThemeToggle';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
  onThemeTogglerClick?: () => void;
};

const NavBar: FC<NavbarProps> = ({ navItems, onThemeTogglerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='mx-auto w-full max-w-7xl bg-white p-4 text-gray-800 dark:bg-black dark:text-white'>
      <div className=' flex  items-center justify-between'>
        <div className='flex items-center'>
          {pathname !== '/' && (
            <Link href='/' className='flex items-center px-2'>
              <div className='relative h-10 w-10 overflow-hidden rounded-full'>
                <Image src='/images/profile-sm.jpg' alt='Home' layout='fill' objectFit='cover' />
              </div>
            </Link>
          )}
        </div>
        <div className='hidden items-center space-x-4 md:flex'>
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className='hover:text-gray-500 dark:hover:text-gray-300'
            >
              {item.label}
            </Link>
          ))}
        </div>
        <ThemeToggle onClick={onThemeTogglerClick} />
        <button
          className='rounded-md bg-gray-200 p-2 dark:bg-gray-700 md:hidden'
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
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className='block py-2'>
                {item.label}
              </Link>
            ))}
            <div className='py-2'>
              <ThemeToggle onClick={onThemeTogglerClick} />
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default NavBar;
