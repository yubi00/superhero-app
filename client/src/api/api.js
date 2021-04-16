import axios from "axios";

export const fetchSearchedResults = async (name) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/superhero/${name}`
    );
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const fetchFavourites = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/superheroes`
    );
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};
