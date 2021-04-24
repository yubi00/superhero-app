import { useState } from "react";
import List from "../List/List";
import SearchInput from "../SearchItem/SearchInput/SearchInput";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useSearchedList } from "../../hooks/useSearchedList";

function App() {
  const [text, setSearchText] = useState("");
  const { data, isLoading, isError, error } = useSearchedList(text);

  const searchByText = (name) => {
    setSearchText(name);
  };

  return (
    <div className='App'>
      <SearchInput searchByText={searchByText} />
      <List
        isLoading={isLoading}
        error={error}
        isError={isError}
        data={data}
        type='searchedlist'
      />
    </div>
  );
}

export default App;
