const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],

  addons: ['@storybook/addon-actions', '@storybook/addon-knobs/register'],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.resolve(__dirname, '..', 'src'),
    };

    return config;
  },
};
