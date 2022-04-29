// Copyright (c) 2022 CESNET
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const images = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      images({ include: ['**/*.png', '**/*.jpg', '**/*.svg'] }),
      ...config.plugins,
    ];
    return config;
  },
};
