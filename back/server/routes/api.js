var express = require('express');
var router = express.Router();

var regVetRouter = require('./api/regVet');
var logVetRouter = require('./api/logVet');
var regClientesRouter = require('./api/clientes')
var mascotasRouter = require('./api/mascotas')

router.use('/regVet', regVetRouter);
router.use('/logvet', logVetRouter);
router.use('/clientes', regClientesRouter);
router.use('/mascotas', mascotasRouter)



module.exports = router;