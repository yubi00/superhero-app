const { searchSuperHero } = require("../utils/superheroes");

//Search superhero by name
const searchSuperHeroByName = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await searchSuperHero(name);
    if (data.response === "error") throw new Error(data.error);
    res.status(200).send({
      success: true,
      data: {
        id: data.results[0].id,
        name: data.results[0].name,
        powerstats: data.results[0].powerstats,
        image: data.results[0].image
      }
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message
    });
  }
};

module.exports = {
  searchSuperHeroByName
};
