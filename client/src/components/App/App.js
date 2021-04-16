import { useState } from "react";
import { useQuery } from "react-query";
import { fetchSearchedResults } from "../../api/api";
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

  //handle on change search text
  const searchByText = (name) => {
    setSearchText(name);
  };

  return (
    <div className='App'>
      <h1>Super Hero App</h1>
      <SearchInput searchByText={searchByText} />
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p> {error} </p>
      ) : Array.isArray(data) ? (
        data.map((superhero) => <p key={superhero.id}> {superhero.name} </p>)
      ) : (
        <p> {data} </p>
      )}
    </div>
  );
}

export default App;
