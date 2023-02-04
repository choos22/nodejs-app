var express = require('express');
var router = express.Router();
const newController = require('../app/controllers/NewController');

router.get('/:slug', newController.index);

router.get('/', newController.index);

module.exports = router;
