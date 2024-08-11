import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

import Footer from './components/Footer';
import Nav from './components/Nav';
import {ThemeProvider} from './contexts/ThemeContext';

import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Your Name - Personal Website',
  description: 'Welcome to my personal website',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en' className='h-full'>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              function getInitialTheme() {
                const storedTheme = localStorage.getItem('theme')
                if (storedTheme === 'light' || storedTheme === 'dark') {
                  return storedTheme
                }
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              }
              document.documentElement.classList.add(getInitialTheme())
            })()
          `,
          }}
        />
      </head>
      <ThemeProvider>
        <body
          className={`${inter.className} flex min-h-full flex-col  transition-colors duration-300`}
        >
          <Nav />
          <main className='container mx-auto flex-grow px-4 py-8'>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
