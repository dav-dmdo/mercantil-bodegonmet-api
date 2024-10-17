const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler.js');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(cors());

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
