import React from "react";

const SearchInput = ({ searchByText }) => {
  const onChangeHandler = (e) => {
    searchByText(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search Superhero....'
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchInput;
