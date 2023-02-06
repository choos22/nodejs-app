const newRouter = require('./new');
const productsRouter = require('./products');
const SiteRouter = require('./site');
const valiRouter = (require('./validation'))

function route(app) {
  app.use('/validation', valiRouter)
  app.use('/products', productsRouter);
  app.use('/new', newRouter);
  app.use('/', SiteRouter);
}

module.exports = route;
