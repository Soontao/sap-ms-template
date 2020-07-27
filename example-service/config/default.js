// ref: https://github.wdf.sap.corp/ct-server/ct-server#configuration
const package = require('../package.json');

const config = {};

config.server = {
  name: package.name,
  root: 'srv',
  bgWorkers: 1
};

module.exports = config;
