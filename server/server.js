"use strict";

const express = require("express"); // npm i express
const cors = require("cors"); // npm i cors
require("dotenv").config();

const notFoundHandler = require('./libraries/notFound');
const unsplash = require('./libraries/unsplash');


const app = express();

app.use(cors());

const PORT = process.env.PORT || 5001;

// Routes/Endpoints
app.get("/", homeHandler);
app.get("/searchImage", unsplash.searchImageHandler);
app.get("/randomImage", unsplash.randomImageHandler);
app.get("*", notFoundHandler);

// Routes Handlers
function homeHandler(request, response) {
  response.send("Hello world!");
}


app.listen(PORT, () => console.log(`listening on ${PORT}`));
