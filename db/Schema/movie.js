"use strict";
const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  viewerSchema = require('./viewer'),
  commentsSchema = require('./comment');

let movieSchema = new Schema(
  {
    title: { type: String },
    year: { type: Number },
    runtime: { type: Number },
    cast: [String],
    type: { type: String },
    directors: [String],
    imdb: {
      rating: { type: Number },
      votes: { type: Number },
      id: { type: Number }
    },
    countries: [String],
    genres: [String],
    tomatoes: {
      viewer: viewerSchema,
      fresh: { type: Number },
      critic: viewerSchema,
      rotten: { type: Number }
    },
    released: { type: Date },
    poster: { type: String },
    plot: { type: String },
    fullplot: { type: String },
    writers: [String],
    num_mflix_comments: { type: Number },
    comments: [commentsSchema],
    awards: { type: String },
    rated: { type: String },
    languages: [String]
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

module.exports = mongoose.model("Movie", movieSchema);
