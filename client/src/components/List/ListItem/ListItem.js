import React, { useState } from "react";
import FavouriteButton from "../../Favourites/FavouriteButton/FavouriteButton";

const ListItem = ({ superhero, type }) => {
  const [more, setMore] = useState(false);
  const { name, image } = type === "featured" ? superhero.superhero : superhero;
  const { intelligence, strength, speed, durability, power, combat } =
    type === "featured" ? superhero.superhero.powerstats : superhero.powerstats;
  return (
    <div>
      <img
        style={{ background: "#ccc" }}
        src={image}
        height='200'
        width='200'
        alt={name}
      />
      <p> {name} </p>
      <FavouriteButton type={type} superhero={superhero} />
      <button onClick={() => setMore((prev) => !prev)}>
        {more ? "Less" : "More "}
      </button>
      {more && (
        <div>
          <h3>Powerstats</h3>
          <p>
            {" "}
            Intelligence: <span>{intelligence}</span>{" "}
          </p>
          <p>
            {" "}
            Strength: <span>{strength}</span>{" "}
          </p>
          <p>
            {" "}
            Speed: <span>{speed}</span>{" "}
          </p>
          <p>
            {" "}
            Durability: <span>{durability}</span>{" "}
          </p>
          <p>
            {" "}
            Power: <span>{power}</span>{" "}
          </p>
          <p>
            {" "}
            Combat: <span> {combat} </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ListItem;
