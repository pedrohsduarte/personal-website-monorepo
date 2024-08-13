import { Open_Sans } from 'next/font/google';

import './globals.css';

import Footer from '@/components/Footer';
import WithNavBar from '@/components/withNavBar';
import { ContentProvider } from '@/contexts/ContentContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const inter = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <ContentProvider>
          <body
            className={`${inter.className} flex min-h-full flex-col transition-colors duration-300`}
          >
            <WithNavBar />
            <main className='container mx-auto flex-grow px-4 py-8'>
              <div className='mx-auto max-w-4xl px-4'>{children}</div>
            </main>
            <Footer />
          </body>
        </ContentProvider>
      </ThemeProvider>
    </html>
  );
}
