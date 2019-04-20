"use strict";
const express = require("express"),
  router = express.Router(),
  Movie = require("../db/Schema/movie");

/* GET home page. */
router.get("/", function(req, res, next) {
  Movie.findOne({}, (err, docs) => {
    if (err) {
      return next(err);
    }
    res.render("index", { title: docs });
  });
});

module.exports = router;
