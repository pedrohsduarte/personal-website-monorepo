import createMDX from '@next/mdx';
import path from 'path';

const __dirname = import.meta.dirname;

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    return config;
  },
};

export default withMDX(nextConfig);
