'use client';

import Link from 'next/link';
import React, { FC, useState } from 'react';

import ThemeToggle from '../Common/ThemeToggle';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  personName: string;
  navItems: NavItem[];
  onThemeTogglerClick?: () => void;
};

const NavBar: FC<NavbarProps> = ({ personName, navItems, onThemeTogglerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-white p-4 text-gray-800 dark:bg-black dark:text-white'>
      <div className='mx-auto flex max-w-4xl items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          {personName}
        </Link>
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
          <ThemeToggle onClick={onThemeTogglerClick} />
        </div>
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
