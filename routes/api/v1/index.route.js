const express = require('express'),
    router = express.Router();

router.use('/movies', require('./movies.route'));

module.exports = router;