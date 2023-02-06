// const { mutipleMongooseToObject } = require('../../util/mongoose');
// const Product = require('../models/Product');

class ValiController {
  validati(req, res, next) {

    
        res.render('validation')


    }

  show(req, res, next) {
    
            res.render('validation')
    }

 
}

module.exports = new ValiController();
    
  