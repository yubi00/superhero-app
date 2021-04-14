const express = require("express");
const { searchSuperHeroByName } = require("../controllers/superheroes");
const router = new express.Router();
const pool = require("../db/db");

//routes to search super hero by name from superhero api
router.get("/superhero/:name", searchSuperHeroByName);

//add super hero to database to view them later

module.exports = router;
