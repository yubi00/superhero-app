import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import EditIcon from "@material-ui/icons/Edit";
import UpdateForm from "../../UpdateForm/UpdateForm";
import PowerStats from "../PowerStats/PowerStats";
import { useCreate } from "../../../hooks/useCreate";
import { useDelete } from "../../../hooks/useDelete";

const ListItem = ({ superhero, type }) => {
  const history = useHistory();

  const [more, setMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { name, image } =
    type === "favourites" ? superhero.superhero : superhero;
  const { intelligence, strength, speed, durability, power, combat } =
    type === "favourites"
      ? superhero.superhero.powerstats
      : superhero.powerstats;

  const { isLoading, isError, error, mutate, isSuccess } = useCreate();
  const {
    isLoading: isDeleting,
    isError: isDeleteError,
    error: deleteError,
    mutate: deleteMutate,
    isSuccess: deleteSuccess
  } = useDelete();

  const deleteSuperHero = () => {
    deleteMutate(superhero.id);
  };

  const addSuperHero = () => {
    mutate(superhero);
  };

  const toggle = () => {
    if (showModal) {
      history.push("/favourites");
    }
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
          <p> Adding... </p>
        ) : isError ? (
          <p> {error.message} </p>
        ) : isSuccess ? (
          <p>Added</p>
        ) : null}

        {isDeleting ? (
          <p> Removing... </p>
        ) : isDeleteError ? (
          <p> {deleteError.message} </p>
        ) : deleteSuccess ? (
          <p>Removed</p>
        ) : null}

        <div className='d-flex justify-content-between text-white'>
          <FavoriteIcon
            className={type === "favourites" ? "text-danger" : "text-white"}
            type={type}
            superhero={superhero}
            onClick={type === "favourites" ? deleteSuperHero : addSuperHero}
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
            {type === "favourites" && (
              <Link to={`/favourites/${superhero.id}`}>
                {" "}
                <EditIcon
                  onClick={toggle}
                  className='text-white bg-dark h3 rounded'
                >
                  edit
                </EditIcon>{" "}
              </Link>
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
