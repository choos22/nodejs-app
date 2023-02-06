var express = require('express');
var router = express.Router();
const productController = require('../app/controllers/ValiController');


router.get('/', productController.validati);
router.get('/:slug', productController.show);



module.exports = router;
