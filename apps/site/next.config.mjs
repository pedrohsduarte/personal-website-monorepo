import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
