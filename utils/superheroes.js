const axios = require("axios");

const BASE_URL = process.env.BASE_URL;

//Search superhero by name from superhero api
const searchSuperHero = async (name) => {
  try {
    const res = await axios.get(`${BASE_URL}/search/${name}`);
    return res.data;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  searchSuperHero
};
