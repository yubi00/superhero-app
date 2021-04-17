import React, { useState } from "react";
import FavouriteButton from "../../Favourites/FavouriteButton/FavouriteButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import EditIcon from "@material-ui/icons/Edit";
import UpdateForm from "../../UpdateForm/UpdateForm";

const ListItem = ({ superhero, type }) => {
  const [more, setMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { name, image } = type === "featured" ? superhero.superhero : superhero;
  const { intelligence, strength, speed, durability, power, combat } =
    type === "featured" ? superhero.superhero.powerstats : superhero.powerstats;

  const toggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='m-2 text-align-center rounded border border-white p-2'>
      <img
        style={{ background: "#ccc" }}
        src={image}
        height='200'
        width='200'
        alt={name}
      />
      <div className='d-flex flex-column justify-content-center align-items-center mt-1'>
        <p className='h2'> {name} </p>
        <div className='d-flex justify-content-between text-white'>
          <FavouriteButton type={type} superhero={superhero} />
          {!more ? (
            <ExpandMoreIcon onClick={() => setMore((prev) => !prev)} />
          ) : (
            <ExpandLessIcon onClick={() => setMore((prev) => !prev)} />
          )}
        </div>
      </div>
      {more && (
        <div>
          <div className='d-flex m-3 align-items-center'>
            <h3 className='mx-2'>Powerstats</h3>
            {type === "featured" && (
              <EditIcon
                onClick={toggle}
                className='text-white bg-dark h3 rounded'
              >
                edit
              </EditIcon>
            )}
          </div>
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
        </div>
      )}
      {showModal && (
        <UpdateForm
          setMore={setMore}
          showModal={showModal}
          superhero={superhero}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default ListItem;
