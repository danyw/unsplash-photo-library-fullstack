const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  photoId: String,
  creatorsName: String,
  created_at: String,
  imageUrlRaw: String,
  imageURLFull: String,
  imageUrlSmall: String,
  description: String,
  width: Number,
  height: Number,
  blur_hash: String,
});

const photoModel = mongoose.model("photo", photoSchema);

module.exports = photoModel;
