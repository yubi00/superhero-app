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

export const addToFavourites = async (superhero) => {
  try {
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/superhero`,
      {
        superhero
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return true;
  } catch (err) {
    return err.response.data.message;
  }
};

export const updatePowerStats = async ({ id, powerstats }) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/superhero/${id}`,
      {
        powerstats
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const removeFromFavourites = async (id) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/superhero/${id}`);
    return true;
  } catch (err) {
    return err.response.data.message;
  }
};
