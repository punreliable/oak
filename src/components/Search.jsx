import SearchForm from "../components/SearchForm";
import reactLogo from "../assets/react.svg";
import pokeball from "../assets/pokeball.svg";

const Search = (props) => {
  const entryDataHandler = (enteredData) => {
    // console.log("hello");
    const entryData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(entryData);
    props.enteredData(entryData);
  };
  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={pokeball} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Search the Pokedex</h1>
      <div className="card">
        <SearchForm onSubmitEntryData={entryDataHandler} />
      </div>
    </div>
  );
};

export default Search;
