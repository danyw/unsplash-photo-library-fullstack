const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
    name: String,
    userCollection: String,
    width: Number,
    height: Number,
    imageUrl: String,
    description: String,
  });

  const photoModel = mongoose.model("photo", photoSchema);

  module.exports = photoModel;