var express = require('express');
var router = express.Router();

var regVetRouter = require('./api/regVet');
var logVetRouter = require('./api/logVet');

router.use('/regVet', regVetRouter);
router.use('/logvet', logVetRouter)



module.exports = router;