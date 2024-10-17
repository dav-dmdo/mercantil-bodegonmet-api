const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler.js');

const logUrl = require('./middlewares/loggin.handler.js');
const isAdmin = require('./middlewares/auth.handler.js');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

app.use(logUrl);

app.use(isAdmin);

routerAPI(app);

app.use(logErrors);

app.use(boomErrorHandler);

app.use(errorHandler);

////////////////////////
// Rutas

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
