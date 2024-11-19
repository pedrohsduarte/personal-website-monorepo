module.exports = {
  root: true,
  extends: ['eslint-config-custom/index.js'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
