var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', middleware.checkToken, HandlerGenerator.index);

router.post( '/login', HandlerGenerator.login);

module.exports = router;