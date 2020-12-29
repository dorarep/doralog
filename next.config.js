const path = require('path');
const ssgConfig = require('./amdxg.config.js');

module.exports = {
  webpack(config) {
    config.resolve.extensions.push(".mdx");
    config.module.rules.push({
      test: /\.mdx?/,
      use: [
        {
          loader: path.resolve('script/custom-amdx-loader.js'),
          options: {
            amp: true,
          },
        },
      ],
    });
    return config;
  },
  amp: {
    canonicalBase: ssgConfig.host
  },
};
