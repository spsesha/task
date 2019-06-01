const express = require('express'),
    router = express.Router();

const Movie = require('../../../db/Schema/movie');

let favorites = ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]

router.get('/', (req, res, next) => {
    console.log('This is the API for Movie GET')
    Movie.aggregate([
        { "$match": { "countries": { "$in": ["USA"] }, "tomatoes.viewer.rating": { "$gte": 3 } } },
        { "$project": { "title": 1, "cast": 1, "tomatoes.viewer.rating": 1, released: 1, favList: { "$setIntersection": [ "$cast", favorites]}}},
        { "$addFields": { "num_favs": { "$cond": { if: { "$isArray": "$favList" }, then: { $size: "$favList" }, else: 0 }}}},
        { "$sort": { "num_favs": -1, "tomatoes.viewer.rating": -1, "title": -1 }}
    ]).exec((err, movies) => {
        if(err) return next(err);
        res.json(movies);
    });
})

module.exports = router;