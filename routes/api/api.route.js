const express = require('express'),
    router = express.Router();

router.use('/v1', require('./v1/index.route'));

module.exports = router;