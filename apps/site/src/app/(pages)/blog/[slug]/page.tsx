import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { ChevronLeft } from 'lucide-react';
import fs from 'node:fs';
import path from 'node:path';

import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import XIcon from '@/assets/icons/x.svg';
import CopyLinkButton from '@/components/Common/CopyLinkButton';
import Icon from '@/components/Common/Icon';
import ShareButton from '@/components/Common/ShareButton';
import Counter from '@/components/Content/Blog/Counter';

const CodeBlock = dynamic(() => import('@/components/Common/CodeBlock'), { ssr: false });

const components = {
  // disable eslint for the next line because it's a valid use case
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 className='my-4 text-4xl font-bold' {...props} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className='my-3 text-3xl font-semibold' {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className='my-2 text-2xl font-semibold' {...props} />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => <p className='my-2' {...props} />,
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className='my-2 list-inside list-disc' {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => <li className='my-1' {...props} />,
  a: (props: React.HTMLProps<HTMLAnchorElement>) => (
    <a className='text-blue-600 hover:underline' {...props} />
  ),
  pre({ ...props }) {
    return <>{props.children}</>;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: ({ className, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const language = match ? match[1] : 'text';
    return <CodeBlock language={language} {...props} />;
  },
  Counter,
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'blog'));

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const markdownFile = fs.readFileSync(path.join(process.cwd(), 'blog', `${slug}.mdx`), 'utf-8');

  const { data: frontMatter } = matter(markdownFile);

  return {
    title: `${frontMatter.title}`,
    description: frontMatter.description || 'An article on my blog',
    authors: [{ name: frontMatter.author }],
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.description || 'An article on my blog',
      type: 'article',
      publishedTime: frontMatter.date,
      authors: [frontMatter.author],
    },
  };
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function estimateReadTime(content: string) {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} MIN READ`;
}

export default async function Article({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const markdownFile = fs.readFileSync(path.join(process.cwd(), 'blog', `${slug}.mdx`), 'utf-8');

  const { data: frontMatter, content } = matter(markdownFile);
  const formattedDate = formatDate(frontMatter.date);
  const readTime = estimateReadTime(content);
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const currentUrl = `${protocol}://${domain}/blog/${slug}`;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-8'>
        <Link
          href='/blog'
          className='inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-100'
        >
          <ChevronLeft size={16} strokeWidth={3} />
        </Link>
      </div>

      <div className='mb-6 flex items-center justify-between'>
        <div className='text-gray-600'>
          {formattedDate} - {readTime}
        </div>
        <div className='flex items-center gap-4'>
          <ShareButton
            icon={<Icon icon={LinkedinIcon} size={18} color='#71717a' />}
            url={currentUrl}
            network='linkedin'
          />
          <ShareButton
            icon={<Icon icon={XIcon} size={18} color='#71717a' />}
            url={currentUrl}
            network='twitter'
          />
          <ShareButton
            icon={<Icon icon={FacebookIcon} size={18} color='#71717a' />}
            url={currentUrl}
            network='facebook'
          />
          <CopyLinkButton url={currentUrl} />
        </div>
      </div>

      <h1 className='mb-4 text-4xl font-bold'>{frontMatter.title}</h1>
      <p className='mb-8 text-xl text-gray-600'>{frontMatter.description}</p>

      {frontMatter.image && (
        <div className='relative mb-8 h-[390px] w-full'>
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            layout='fill'
            objectFit='cover'
            className='rounded-lg'
          />
        </div>
      )}

      <article className='prose prose-lg max-w-none dark:prose-invert'>
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
