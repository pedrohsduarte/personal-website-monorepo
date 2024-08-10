"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Your Name
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/about"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            About
          </Link>
          <Link
            href="/articles"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            Articles
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="hover:text-gray-500 dark:hover:text-gray-300"
          >
            Resume
          </Link>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-2 md:hidden">
          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/articles" className="block py-2">
            Articles
          </Link>
          <Link href="/projects" className="block py-2">
            Projects
          </Link>
          <Link href="/resume" className="block py-2">
            Resume
          </Link>
          <div className="py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
