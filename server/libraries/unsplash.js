"use strict";

const axios = require("axios"); // npm i axios
const superagent = require("superagent"); // npm i superagent


// http://localhost:3000/searchImage?title=cat
function searchImageHandler(request, response) {
  const title = request.query.title;
  const key = process.env.UNSPLASH_API_KEY;
  const url = `https://api.unsplash.com/search/photos?query=${title}&client_id=${key}`;
  axios
    .get(url)
    .then((imgData) => {
      const images = imgData.data.results.map((data) => new Photo(data));   
      response.status(200).send(images);
    })
    .catch((err) => {
      response.status(500).send("something went wrong", err);
    });
}


// http://localhost:3000/randomImage
async function randomImageHandler(request, response) {
  
  const url = `https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_API_KEY}`;
  try {
    let imgData = await superagent.get(url);
    console.log(imgData);
    let randomImg = await new Photo(imgData.body)
    response.status(200).send(randomImg);
  } catch {
    response.status(500).send("something went wrong");
  }
}

class Photo {
  constructor(data) {
    this.photoId = data.id;
    this.creatorsName = data.user.name;
    this.created_at = data.created_at;
    this.imageUrlRaw = data.urls.raw;
    this.imageURLFull = data.urls.full;
    this.imageUrlSmall = data.urls.small;
    this.description = data.alt_description;
    this.width = data.width;
    this.height = data.height;
    this.blur_hash = data.blur_hash;
  }
}

module.exports = { searchImageHandler, randomImageHandler };
