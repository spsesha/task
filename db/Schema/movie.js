"use strict";
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

let movieSchema = new Schema(
  {
    title: { type: String },
    year: { type: Number }
  },
  {
    // createdAt,updatedAt fields are automatically added into records
    timestamps: true
  }
);

module.exports = mongoose.model("Movie", movieSchema);
