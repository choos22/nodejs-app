const newRouter = require('./new');
const productsRouter = require('./products');
const SiteRouter = require('./site');

function route(app) {
  app.use('/products', productsRouter);
  app.use('/new', newRouter);
  app.use('/', SiteRouter);
}

module.exports = route;
