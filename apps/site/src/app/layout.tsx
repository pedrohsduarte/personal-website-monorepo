import { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import './globals.css';

import Container from '@/components/Container';
import { CookieConsentBanner } from '@/components/CookiConsentBanner';
import { GoogleTagManager } from '@/components/GoogleTagManager';
import WithFooter from '@/components/withFooter';
import WithNavBar from '@/components/withNavBar';
import { ContentProvider } from '@/contexts/ContentContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { applyCustomStyle } from '@/utils/styles';

export const metadata: Metadata = {
  title: {
    default: `Pedro Duarte - Software engineer, tech enthusiast, and user experience advocate`,
    template: '%s - Pedro Duarte',
  },
};

const inter = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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
          <body className={`${inter.className} flex min-h-full flex-col bg-zinc-50 dark:bg-black`}>
            <div className='fixed inset-0 flex justify-center sm:px-8'>
              <div className='flex w-full max-w-7xl lg:px-8'>
                <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'></div>
              </div>
            </div>
            <div className='z-50 flex min-h-screen flex-col'>
              <header
                className='relative z-50 flex flex-none flex-col'
                style={{ height: 'var(--header-height)', marginBottom: 'var(--header-mb)' }}
              >
                <div
                  className='top-0 z-10 h-16 pt-6'
                  style={applyCustomStyle({
                    position: 'var(--header-position)',
                  })}
                >
                  <div
                    className='top-[var(--header-top,theme(spacing.6))] w-full sm:px-8'
                    style={applyCustomStyle({
                      position: 'var(--header-inner-position)',
                    })}
                  >
                    <div className='mx-auto w-full max-w-7xl lg:px-8'>
                      <div className='relative px-4 sm:px-8 lg:px-12'>
                        <WithNavBar />
                      </div>
                    </div>
                  </div>
                </div>
              </header>
              <main className='flex-auto'>
                <Container>{children}</Container>
                {GTM_ID && (
                  <>
                    <CookieConsentBanner />
                    <GoogleTagManager GTM_ID={GTM_ID} />
                  </>
                )}
              </main>
              <WithFooter />
            </div>
          </body>
        </ContentProvider>
      </ThemeProvider>
    </html>
  );
}
