import Link from 'next/link';
import { FC } from 'react';
import { Mail } from 'lucide-react';

import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import XIcon from '@/assets/icons/x.svg';
import Divider from '@/components/Common/Divider';
import Icon, { IconType } from '@/components/Common/Icon';
import Container from '@/components/Layouts/Container';
import { NavItem } from '@/contexts/ContentContext';

type SocialLinks = {
  href: string;
  icon: IconType;
};

type FooterProps = {
  personName: string;
  navItems: NavItem[];
  xUrl?: string;
  githubUrl?: string;
  linkedInUrl?: string;
  email?: string;
};

const Footer: FC<FooterProps> = ({
  personName,
  navItems = [],
  xUrl,
  githubUrl,
  linkedInUrl,
  email,
}) => {
  const socialLinks: SocialLinks[] = [
    xUrl ? { href: xUrl, icon: XIcon } : null,
    githubUrl ? { href: githubUrl, icon: GithubIcon } : null,
    linkedInUrl ? { href: linkedInUrl, icon: LinkedinIcon } : null,
    email ? { href: `mailto:${email}`, icon: Mail } : null,
  ].filter(link => link != null);

  return (
    <footer className='p-4 lg:px-8'>
      <Container className='py-6'>
        <Divider />
        <div className='mx-auto max-w-5xl'>
          <div className='md:items-left container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0'>
            <div className='flex gap-4'>
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
            <div className='text-sm font-normal text-zinc-400 dark:text-zinc-500'>
              <p>
                &copy; {new Date().getFullYear()} {personName}
              </p>
            </div>
            {socialLinks.length > 0 && (
              <div className='flex gap-4'>
                {socialLinks.map(link => (
                  <Link
                    key={link.icon.toString()}
                    href={link.href}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-200'
                  >
                    <Icon icon={link.icon} size={18} color='#71717a' />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
