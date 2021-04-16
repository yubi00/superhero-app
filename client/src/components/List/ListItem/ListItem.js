import React, { useState } from "react";

const ListItem = ({ superhero, type }) => {
  const [more, setMore] = useState(false);

  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  } = superhero.powerstats;
  return (
    <div>
      <img
        style={{ background: "#ccc" }}
        src={superhero.image}
        height='200'
        width='200'
        alt={superhero.name}
      />
      <p> {superhero.name} </p>
      <button>
        {type === "featured" ? "Remove from fav" : "Add to favourties"}
      </button>
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
