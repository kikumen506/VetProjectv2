var express = require('express');
var router = express.Router();

var regVetRouter = require('./api/regVet')

router.use('/regVet', regVetRouter)



module.exports = router;