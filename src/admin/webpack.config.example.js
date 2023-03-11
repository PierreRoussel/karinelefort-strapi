'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  console.log("🚀 ~ config:", config)
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config
  config.resolve.alias = {...config.resolve.alias,'preset':'@babel/preset-env'}
  return config;
};
