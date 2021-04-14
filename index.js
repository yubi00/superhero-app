const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const router = require("./routes/superheroes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
