var Bookshelf = require('bookshelf');
var Config = require('./config.js');

var DB = Bookshelf.initialize(Config.database);
