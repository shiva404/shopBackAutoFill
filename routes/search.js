var express = require('express');
var router = express.Router();


var models = require('./model');
var Product = models.Product;

/* GET users listing. */
router.get('/', function(req, res, next) {
    var query = req.query.q;
    var limit = req.query.limit
    if(!limit) limit = 7
    var q = Product.find({name:{$regex: '^' + query , $options: 'is' }}).limit(limit).exec(function (err, products){
        if(err != null)
            res.err.send("");
        else {
            products.forEach(function(product){
                console.log(product)
            });
            res.send(products)
        }
    })
});

module.exports = router;