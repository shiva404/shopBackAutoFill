var express = require('express');
var router = express.Router();


var models = require('./model');
var Product = models.Product;

/* GET users listing. */
router.post('/', function(req, res) {
    var reqBody = req.body;
    var product = new Product({name: reqBody.name, category: reqBody.category});
    product.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', userObj);
        }
    });
    res.send(req.body)
});

module.exports = router;
