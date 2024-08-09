import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import dynamic from "next/dynamic";

// Dynamically import the Counter component
const Counter = dynamic(() => import("../../../components/Counter"), {
  ssr: false,
});

// Define the components that can be used in MDX files
const components = {
  Counter,
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "articles"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function Article({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const markdownFile = fs.readFileSync(
    path.join(process.cwd(), "articles", slug + ".mdx"),
    "utf-8",
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return (
    <article className="prose lg:prose-xl">
      <h1>{frontMatter.title}</h1>
      <p>
        By {frontMatter.author} on {frontMatter.date}
      </p>
      <MDXRemote source={content} components={components} />
    </article>
  );
}
