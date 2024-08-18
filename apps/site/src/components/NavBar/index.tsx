'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

import ThemeToggle from '@/components/Common/ThemeToggle';

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  navItems: NavItem[];
  onThemeTogglerClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavBar: FC<NavbarProps> = ({ navItems, onThemeTogglerClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'visible'; // Restore scrolling when modal is closed
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='mx-auto max-w-5xl'>
        <div className='flex items-center justify-between gap-4'>
          <div className='flex items-center'>
            <div className='relative h-10 w-10 overflow-hidden rounded-full'>
              {pathname !== '/' ? (
                <Link href='/' className='flex items-center'>
                  <Image src='/images/profile-sm.jpg' alt='Home' layout='fill' objectFit='cover' />
                </Link>
              ) : (
                <div className='h-full w-full' />
              )}
            </div>
          </div>
          <div className='hidden items-center space-x-4 md:flex'>
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className='font-semibold hover:text-gray-500 dark:hover:text-gray-300'
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className='flex flex-1 justify-end sm:visible md:hidden'>
            <button
              className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'
              onClick={() => setIsMenuOpen(true)}
            >
              Menu{' '}
              <ChevronDown
                size={24}
                className='ml-3 h-auto w-3 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'
              />
            </button>
          </div>
          <ThemeToggle onClick={onThemeTogglerClick} />
        </div>
      </nav>

      {/* Modal */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
          <div ref={modalRef} className='w-full max-w-sm rounded-lg bg-white p-6 dark:bg-gray-800'>
            <div className='mb-4 flex items-center justify-between'>
              <h2 className='text-xl font-bold'>Navigation</h2>
              <button
                onClick={closeMenu}
                className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              >
                <X size={24} />
              </button>
            </div>
            <nav>
              <ul className='space-y-2'>
                {navItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className='block rounded px-4 py-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
