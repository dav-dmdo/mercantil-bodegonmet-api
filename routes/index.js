const express = require('express');
const cors = require('cors');

const creditoRouter = require('./credito.router.js');
const debitoRouter = require('./debito.router.js');
const pagoMovilRouter = require('./pagoMovil.router.js');
const c2pRouter = require('./c2p.router.js');

function routerAPI(app) {
  const appRouter = express.Router();
  app.use('/api/v1', appRouter);
  appRouter.use('/credito', creditoRouter);
  appRouter.use('/debito', debitoRouter);
  appRouter.use('/pago-movil', pagoMovilRouter);
  appRouter.use('/c2p', c2pRouter);
}

module.exports = routerAPI;
