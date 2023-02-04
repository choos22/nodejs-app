const Product = require('../models/Product');
const { mongooseToObject } = require('../../util/mongoose');


class ProductController {
  show(req, res, next) {
    Product.findOne({slug: req.params.slug})
        .then(product => 
            res.render('products/show', {product:mongooseToObject(product)})
        )
        .catch(next)
  }

  create(req, res, next) {
        res.render('product/create');
  }


}

module.exports = new ProductController();
    
  