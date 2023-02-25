"use strict";

const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors
const photoModel = require("./libraries/models/photos");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");


const notFoundHandler = require('./libraries/notFound');
const unsplash = require('./libraries/unsplash');


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
app.get("/userCollections", userCollectionsHandler);
app.get("*", notFoundHandler);
app.post("/addPhoto", addPhotoHandler);

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
  const { name, userCollection, width, height, imageUrl, description } = req.body;

  let addPhoto = await photoModel.create({name, userCollection, width, height, imageUrl, description});
  let allPhotos = await photoModel.find({});
  res.send(allPhotos);
}

async function userCollectionsHandler(req, res) {
  let allPhotos = await photoModel.find({});
  res.send(allPhotos);
}




app.listen(PORT, () => console.log(`listening on ${PORT}`));
