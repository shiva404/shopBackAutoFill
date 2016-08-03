ShopBack AutoFill

###PreRequisites 
1. MongoDB - 3.2.3
2. NodeJs - latest

##Steps to run:

Make sure mongoDB is running in local on port 27017

$ git clone https://github.com/shiva404/shopBackAutoFill

$ cd shopBackAutoFill

$ npm install

$ node bin/www

###Testing
Hit http://localhost:3000 in browser 
Page should comeup

###Populating data
$ curl -X POST -H "Content-Type: application/json" -d '{ "name": "Apple iPod 8Gb", "category": "Electronics" }' "http://localhost:3000/product"
