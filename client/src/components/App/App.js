import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSearchedResults } from "../../api/api";
import List from "../List/List";
import SearchInput from "../SearchItem/SearchInput/SearchInput";

function App() {
  const [text, setSearchText] = useState("");
  const { data, isLoading, isError, error } = useQuery(
    ["superheroes", text],
    async () => await fetchSearchedResults(text),
    {
      refetchOnWindowFocus: false,
      enabled: !!text
    }
  );

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
