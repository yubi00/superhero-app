import axios from "axios";

export const fetchSearchedResults = async (name) => {
  try {
    const res = await axios.get(`/api/superhero/${name}`);
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const fetchFavourites = async () => {
  try {
    const res = await axios.get(`/api/superheroes`);
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const getFavourite = async (id) => {
  try {
    const res = await axios.get(`/api/featuredsuperhero/${id}`);
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};

export const addToFavourites = async (superhero) => {
  try {
    await axios.post(
      `/api/superhero`,
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
      `/api/superhero/${id}`,
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
    const res = await axios.delete(`/api/superhero/${id}`);
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};
