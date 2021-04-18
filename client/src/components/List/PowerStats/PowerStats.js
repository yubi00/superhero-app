import React from "react";

const PowerStats = ({
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat
}) => {
  return (
    <div className='d-flex flex-column justify-content-center text-white h4'>
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
  );
};

export default PowerStats;
