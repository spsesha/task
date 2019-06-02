const express = require('express'),
    router = express.Router();

const Movie = require('../../../db/Schema/movie');

let favorites = ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]

router.get('/', (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    Movie.aggregate([
        { "$match": { "countries": ["USA"], "tomatoes.viewer.rating": { "$gte": 3 } } },
        { "$project": { "title": 1, "cast": 1, "tomatoes.viewer.rating": 1, released: 1, favList: { "$setIntersection": [ "$cast", favorites]}}},
        { "$addFields": { "num_favs": { "$cond": { if: { "$isArray": "$favList" }, then: { $size: "$favList" }, else: 0 }}}},
        { "$sort": { "num_favs": -1, "tomatoes.viewer.rating": -1, "title": -1 }},
        { "$facet" : {
            "metadata": [{ "$count": "total"}],
            "data": [{$skip: ((page - 1)*10)}, {$limit: 10}]
        }}
    ]).exec((err, movies) => {
        if(err) return next(err);
        res.setHeader('Last-Modified', (new Date()).toUTCString());
        res.json(movies);
    });
})

module.exports = router;