const { mutipleMongooseToObject } = require('../../util/mongoose');
const Product = require('../models/Product');

class SiteController {
  index(req, res, next) {

    Product.find({})
      .then(products =>{ 
        
        res.render('home', {
          products: mutipleMongooseToObject(products)})
      })
      .catch(products => next(err))

    // res.json({
    //   name: 'test'
    // })
  }

  new(req, res) {
    res.render('new');
  }

 
}

module.exports = new SiteController();
    
  