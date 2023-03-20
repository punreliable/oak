import { useState } from "react";
import reactLogo from "../assets/react.svg";

const SearchForm = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const entryData = {
      id: enteredNumber,
    };

    props.onSubmitEntryData(entryData);
    console.log(entryData);

    setEnteredNumber(1);
  };

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="title">Search the Pokedex</h1>
      <div className="card">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <fieldset>
              <label htmlFor="entryNumber">Number</label>
              <input
                className="form-control"
                name="entryNumber"
                type="number"
                min="1"
                max="151"
                step="1"
                inputMode="numeric"
                pattern="\d*"
                placeholder="25"
                value={enteredNumber}
                onChange={numberChangeHandler}
              />
            </fieldset>
          </div>
        </form>
        <button type="submit" className="btn btn-primary mt-2">
          Ask the Professor
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
