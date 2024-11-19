module.exports = {
  root: true,
  extends: ['eslint-config-custom/index.js'],
  parserOptions: {
    project: './tsconfig.json',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
