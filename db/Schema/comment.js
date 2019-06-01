const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

module.exports = new Schema({
    name: { type: String },
    email: { type: String },
    movie_id: Schema.Types.ObjectId,
    text: { type: String },
})