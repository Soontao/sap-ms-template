const path = require('path');
const {Server} = require('@sap/ct-server');

module.exports = new Server(__dirname, path.resolve(__dirname, 'config'));
