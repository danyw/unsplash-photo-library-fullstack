"use strict";

const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors
const photoModel = require("./libraries/models/photos");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");

const notFoundHandler = require("./libraries/notFound");
const unsplash = require("./libraries/unsplash");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

mongoose.connect("mongodb://127.0.0.1:27017/photoLibraryUnsplash", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes/Endpoints
app.get("/", homeHandler);
app.get("/searchImage", unsplash.searchImageHandler);
app.get("/randomImage", unsplash.randomImageHandler);
// app.get("/userCollections", userCollectionsHandler);

app.post("/addPhoto", addPhotoHandler);
app.get("/userCollections", userCollectionsHandler);
app.delete('/deletePhoto/:photoId', deletePhotoHandler);
app.get("*", notFoundHandler);

// Routes Handlers
function homeHandler(request, response) {
  response.send("Hello world!");
}

// handling db
// async function getAPIProductsHandler(req, res) {
//   let productsapi = await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
//   res.status(200).send(productsapi.data);
//   console.log(productsapi.data);
// }

// async function getProductsHandler(req, res) {
//   let products = await productModel.find({});
//   res.send(products);
// }

async function addPhotoHandler(req, res) {
  const { photoId, creatorsName, created_at, imageUrlRaw, imageURLFull, imageUrlSmall, description, width, height, blur_hash } = req.body;

  let addPhoto = await photoModel.create({ photoId, creatorsName, created_at, imageUrlRaw, imageURLFull, imageUrlSmall, description, width, height, blur_hash });
  // let allPhotos = await photoModel.find({});
  // res.send(allPhotos);
}

async function deletePhotoHandler(req, res) {
  const photoId = req.params.photoId;
  try {
    const result = await photoModel.deleteOne({ photoId: photoId });
    if (result.deletedCount === 0) {
      return res.status(404).send("Not Found");
    }
    res.status(204).send("Deleted");
  } catch (err) {
    console.log("Error while deleting", err);
    res.status(500).send("Error while deleting");
    
  }
}

async function userCollectionsHandler(req, res) {
  let allPhotos = await photoModel.find({});
  res.send(allPhotos);
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
