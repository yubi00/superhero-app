const { checkPattern } = require("../utils/pattern");
const { searchSuperHero } = require("../utils/superheroes");
const pool = require("../db/db");

//Search superhero by name
const searchSuperHeroByName = async (req, res) => {
  try {
    const name = req.params.name === "" ? "" : req.params.name.toLowerCase();

    const data = await searchSuperHero(name);
    if (data.response === "error") throw new Error(data.error);

    res.status(200).send({
      success: true,
      data: data.results
        .filter((superhero) => checkPattern(superhero.name, name))
        .map((superhero) => {
          return {
            id: superhero.id,
            name: superhero.name,
            powerstats: superhero.powerstats,
            image: superhero.image.url
          };
        })
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message
    });
  }
};

// add superhero to database (favourties) to view them later
const addSuperHero = async (req, res) => {
  const { superhero } = req.body;

  try {
    //Insert into superheroes table
    const newSuperHero = await pool.query(
      "INSERT INTO superheroes(superhero) VALUES ($1) RETURNING *",
      [JSON.stringify(superhero)]
    );
    res.status(200).send({
      success: true,
      superhero: newSuperHero.rows[0]
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  searchSuperHeroByName,
  addSuperHero
};
