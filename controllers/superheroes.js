const { checkPattern } = require("../utils/pattern");
const { searchSuperHero } = require("../utils/superheroes");
const pool = require("../db/db");

//Search superhero by name
const searchSuperHeroByName = async (req, res) => {
  try {
    const name = req.params.name.toLowerCase();

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

//fetch all featured superheroes from db
const fetchSuperHeroes = async (req, res) => {
  try {
    const superheroes = await pool.query("SELECT * FROM superheroes");
    res.status(200).send({
      success: true,
      data: superheroes.rows
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

// add superhero to database (favourties) to view them later
const addSuperHero = async (req, res) => {
  const { superhero } = req.body;

  try {
    //add it to the db only if it doesnot already exist in the db
    //throw error saying superhero already exist
    //find the superhero with the id superhero.id
    const exist = await pool.query(
      `SELECT * FROM superheroes WHERE superhero ->> 'id' = '${superhero.id}'`
    );
    if (exist.rows.length !== 0) throw new Error("superhero already featured");
    //Insert into superheroes table
    const newSuperHero = await pool.query(
      "INSERT INTO superheroes(superhero) VALUES ($1) RETURNING *",
      [JSON.stringify(superhero)]
    );
    res.status(201).send({
      success: true,
      data: newSuperHero.rows[0]
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

//can only update featured/saved superheroes
const updateSuperHero = async (req, res) => {
  const { id } = req.params;

  try {
    //check if superhero with the params id exist in the db
    const superhero = await pool.query(
      `SELECT * FROM superheroes WHERE  id = '${id}'`
    );

    if (superhero.rows.length === 0)
      throw new Error(`superhero with the featured id ${id} doesnot exist`);

    //if id exist, then update the powerstats
    const updatedPowerStats = {
      ...superhero.rows[0].superhero.powerstats,
      ...req.body.powerstats
    };

    const updatedSuperHero = {
      ...superhero.rows[0],
      superhero: {
        ...superhero.rows[0].superhero,
        powerstats: updatedPowerStats
      }
    };

    // //query to update the powerstats data
    await pool.query("UPDATE superheroes SET superhero = $1 WHERE id = $2 ", [
      JSON.stringify(updatedSuperHero.superhero),
      id
    ]);

    //get the updated superhero
    const updated = await pool.query(
      `SELECT * FROM superheroes WHERE  id = '${id}'`
    );

    res.status(200).send({
      success: true,
      data: updated.rows[0]
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message
    });
  }
};

const deleteSuperHero = async (req, res) => {
  const { id } = req.params;

  try {
    //check if the superhero with the params id exist
    const superhero = await pool.query(
      `SELECT * FROM superheroes WHERE  id = '${id}'`
    );

    if (superhero.rowCount === 0)
      throw new Error(`superhero with the id ${id} doesnot exist`);

    //if exist, delete it from db, making it unfeatured again
    await pool.query("DELETE FROM superheroes WHERE id = $1", [id]);

    //fetch all remaining featured superheroes
    const superheroes = await pool.query("SELECT * FROM superheroes");
    res.status(200).send({
      success: true,
      data: superheroes.rows
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
  fetchSuperHeroes,
  addSuperHero,
  updateSuperHero,
  deleteSuperHero
};
