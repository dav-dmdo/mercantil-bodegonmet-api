const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('¡Hola, mundo desde mi el GET de debito!');
});

module.exports = router;
