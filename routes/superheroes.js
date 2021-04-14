const express = require("express");
const {
  searchSuperHeroByName,
  addSuperHero
} = require("../controllers/superheroes");
const router = new express.Router();

//routes to search super hero by name from superhero api
router.get("/api/superhero/:name", searchSuperHeroByName);

//add super hero to database (favourites) to view them later
router.post("/api/superhero", addSuperHero);

module.exports = router;
