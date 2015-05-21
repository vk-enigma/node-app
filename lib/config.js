var nconf   = require('nconf');
var path    = require('path');

nconf
    .argv()
    .env()
    .file({
        file: path.join(__dirname, '..', 'config.hjson'),
        format: require('hjson').rt
    });

module.exports = nconf;