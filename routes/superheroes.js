const express = require("express");
const {
  searchSuperHeroByName,
  addSuperHero,
  updateSuperHero,
  fetchSuperHeroes,
  deleteSuperHero
} = require("../controllers/superheroes");
const router = new express.Router();

//routes to search super hero by name from superhero api
router.get("/api/superhero/:name", searchSuperHeroByName);

//api endpoint to fetch all featured superheroes
router.get("/api/superheroes", fetchSuperHeroes);

//api end point to add super hero to database (favourites) to view them later
router.post("/api/superhero", addSuperHero);

//api endpoint to allow users to update the powerstats of their saved/featured superheroes
router.put("/api/superhero/:id", updateSuperHero);

//api endpoint to allow users to remove superhero from featured superheroes
router.delete("/api/superhero/:id", deleteSuperHero);

module.exports = router;
