import axios from "axios";

export const fetchSearchedResults = async (name) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/superhero/${name}`);
    return res.data.data;
  } catch (err) {
    return err.response.data.message;
  }
};
