import { Fragment } from "react";
import ListItem from "./ListItem/ListItem";

const List = ({ isLoading, isError, data, error, type }) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return { error };
  return (
    <Fragment>
      {Array.isArray(data) ? (
        data.map((superhero) => (
          <ListItem
            key={superhero.id}
            superhero={type === "featured" ? superhero.superhero : superhero}
            type={type}
          />
        ))
      ) : (
        <p> {data} </p>
      )}
    </Fragment>
  );
};

export default List;
