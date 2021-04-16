import { Fragment } from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ isLoading, isError, data, error, type }) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <p>{error.message} </p>;
  return (
    <Fragment>
      {Array.isArray(data) ? (
        data.map((superhero) => (
          <ListItem key={superhero.id} superhero={superhero} type={type} />
        ))
      ) : (
        <p> {data} </p>
      )}
    </Fragment>
  );
};

export default List;
