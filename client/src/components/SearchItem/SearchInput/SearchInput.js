import React from "react";
import { Container, Input } from "reactstrap";
import "./SearchInput.css";

const SearchInput = ({ searchByText }) => {
  const onChangeHandler = (e) => {
    searchByText(e.target.value);
  };

  return (
    <Container>
      <Input
        className='p-4 search-input mb-2'
        type='text'
        placeholder='Search Superhero....'
        onChange={onChangeHandler}
      />
    </Container>
  );
};

export default SearchInput;
