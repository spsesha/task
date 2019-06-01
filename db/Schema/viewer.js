const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

module.exports = new Schema({
    rating: { type: Number },
    numReviews: { type: Number },
    meter: { type: Number }
})