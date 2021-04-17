import { Container } from "reactstrap";
import ListItem from "./ListItem/ListItem";

const List = ({ isLoading, isError, data, error, type }) => {
  if (isLoading)
    return <Container className='h1 text-align-center'>Loading...</Container>;
  if (isError) return <Container>{error.message} </Container>;
  return (
    <Container className='mt-4 d-flex flex-wrap'>
      {Array.isArray(data) ? (
        data.map((superhero) => (
          <ListItem key={superhero.id} superhero={superhero} type={type} />
        ))
      ) : (
        <p className='h1'> {data} </p>
      )}
    </Container>
  );
};

export default List;
