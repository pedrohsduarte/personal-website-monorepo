import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import fs from 'node:fs';
import path from 'node:path';

const Counter = dynamic(() => import('../../../../components/Counter'), {
  ssr: false,
});

const components = {
  Counter,
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'articles'));

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function Article({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), 'articles', `${slug}.mdx`),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return (
    <div className='container mx-auto py-8'>
      <article className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto max-w-full break-words'>
        <h1 className='break-words'>{frontMatter.title}</h1>
        <p>
          By {frontMatter.author} on {frontMatter.date}
        </p>
        <div className='max-w-full overflow-hidden'>
          <MDXRemote source={content} components={components} />
        </div>
      </article>
    </div>
  );
}
