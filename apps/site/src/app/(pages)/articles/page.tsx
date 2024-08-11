import Link from 'next/link';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const ARTICLES_PER_PAGE = 5;

export default function Articles({params}: {params: {page: string}}) {
  const page = parseInt(params.page) || 1;
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames
    .map(fileName => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const {data} = matter(fileContents);
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = articles.slice(startIndex, endIndex);
  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>Articles</h1>
      <ul className='space-y-2'>
        {paginatedArticles.map(article => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`} className='text-blue-600 hover:underline'>
              {article.title}
            </Link>
            <span className='ml-2 text-gray-500'>{article.date}</span>
          </li>
        ))}
      </ul>
      <div className='flex justify-between'>
        {page > 1 && (
          <Link href={`/articles/${page - 1}`} className='text-blue-600 hover:underline'>
            Previous
          </Link>
        )}
        {page < totalPages && (
          <Link href={`/articles/${page + 1}`} className='text-blue-600 hover:underline'>
            Next
          </Link>
        )}
      </div>
    </div>
  );
}
