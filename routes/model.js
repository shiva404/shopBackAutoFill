var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.mongo.url);

var Schema = mongoose.Schema;

var Product = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true}
});
mongoose.model('Product', Product);
var Product = exports.Product = mongoose.model('Product');
