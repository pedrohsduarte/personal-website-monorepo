import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { ChevronRight } from 'lucide-react';
import fs from 'node:fs';
import path from 'node:path';

const BLOG_POSTS_PER_PAGE = 5;

export const metadata: Metadata = {
  title: 'Blog',
};

interface Blog {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author: string;
  tags?: string[];
}

export default function BlogPosts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = parseInt(searchParams.page?.toString() || '1');
  const blogPostsDirectory = path.join(process.cwd(), 'blog');
  const fileNames = fs.readdirSync(blogPostsDirectory);

  const blogPosts: Blog[] = fileNames
    .map(fileName => {
      const fullPath = path.join(blogPostsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        description: data.description || 'No description available',
        image: data.image || '/images/blog/default-thumbnail.jpg',
        author: data.author,
        tags: data.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const startIndex = (page - 1) * BLOG_POSTS_PER_PAGE;
  const endIndex = startIndex + BLOG_POSTS_PER_PAGE;
  const paginatedBlogPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / BLOG_POSTS_PER_PAGE);

  return (
    <div className='space-y-20'>
      <h1 className='text-5xl font-bold'>Blog</h1>
      <ul className='space-y-6'>
        {paginatedBlogPosts.map((article, index) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`} className='group flex items-center space-x-4'>
              <div className='relative h-24 w-24 flex-shrink-0'>
                <Image
                  src={article.image}
                  alt={article.title}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
              <div className='flex-grow'>
                <p className='text-sm text-gray-500'>{article.date}</p>
                <h2 className='text-xl font-semibold transition-colors group-hover:text-blue-600'>
                  {article.title}
                </h2>
                <p className='line-clamp-2 text-gray-600'>{article.description}</p>
              </div>
              <ChevronRight className='h-6 w-6 flex-shrink-0 text-gray-400 transition-colors group-hover:text-blue-600' />
            </Link>
            {index < paginatedBlogPosts.length - 1 && (
              <hr className='my-6 border-t border-gray-200' />
            )}
          </li>
        ))}
      </ul>
      <div className='flex justify-center space-x-4'>
        <Link
          href={`/blog?page=1`}
          className={`px-4 py-2 ${
            page === 1 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600 hover:underline'
          }`}
        >
          First
        </Link>
        <Link
          href={`/blog?page=${Math.max(1, page - 1)}`}
          className={`px-4 py-2 ${
            page === 1 ? 'cursor-not-allowed text-gray-400' : 'text-blue-600 hover:underline'
          }`}
        >
          Previous
        </Link>
        <Link
          href={`/blog?page=${Math.min(totalPages, page + 1)}`}
          className={`px-4 py-2 ${
            page === totalPages
              ? 'cursor-not-allowed text-gray-400'
              : 'text-blue-600 hover:underline'
          }`}
        >
          Next
        </Link>
        <Link
          href={`/blog?page=${totalPages}`}
          className={`px-4 py-2 ${
            page === totalPages
              ? 'cursor-not-allowed text-gray-400'
              : 'text-blue-600 hover:underline'
          }`}
        >
          Last
        </Link>
      </div>
    </div>
  );
}
