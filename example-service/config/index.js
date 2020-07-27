const process = require('process');
const fs = require('fs');
const path = require('path');

let config = require('./default');

const env = process.env['NODE_ENV'];

if (env && env !== 'default') {
  if (fs.existsSync(path.join(__dirname, `./${env}.js`))) {
    config = Object.assign(config, require(`./${env}`));
  }
}

config = Object.assign(config, process.env);

module.exports = config;
