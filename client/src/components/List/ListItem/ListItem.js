import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addToFavourites, removeFromFavourites } from "../../../api/api";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import EditIcon from "@material-ui/icons/Edit";
import UpdateForm from "../../UpdateForm/UpdateForm";
import PowerStats from "../PowerStats/PowerStats";

const ListItem = ({ superhero, type }) => {
  const queryClient = useQueryClient();
  const [more, setMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { name, image } = type === "featured" ? superhero.superhero : superhero;
  const { intelligence, strength, speed, durability, power, combat } =
    type === "featured" ? superhero.superhero.powerstats : superhero.powerstats;

  const { isLoading, isError, error, mutate, isSuccess } = useMutation(
    type === "featured" ? removeFromFavourites : addToFavourites,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("featured");
      }
    }
  );

  const deleteSuperHero = () => {
    mutate(superhero.id);
  };

  const addSuperHero = () => {
    mutate(superhero);
  };

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

        {isLoading ? (
          <p> {type === "featured" ? "Removing" : "Adding"} </p>
        ) : isError ? (
          <p> {error.message} </p>
        ) : isSuccess ? (
          <p>{type === "featured" ? "Removed" : "Added"}</p>
        ) : null}

        <div className='d-flex justify-content-between text-white'>
          <FavoriteIcon
            className={type === "featured" ? "text-danger" : "text-white"}
            type={type}
            superhero={superhero}
            onClick={type === "featured" ? deleteSuperHero : addSuperHero}
          />
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
          <PowerStats
            intelligence={intelligence}
            speed={speed}
            strength={strength}
            combat={combat}
            power={power}
            durability={durability}
          />
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
