import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Output from "./components/Output";
import Footer from "./components/Footer";
import '../node_modules/bootstrap/scss/bootstrap.scss';
import * as bootstrap from 'bootstrap'

function App() {

  let pokemonContent = <p>No content was found</p>;

  const starterValue = 1;

  const [count, setCount] = useState(0);

  // const [pokedex, setPokedex] = useState(1);

  const onButtonClickHandler = () => {};

  const onChangeInputValueHandler = () => {};
  
  const fetchDataHandler = () => {};

  const displayDataHandler = () => {};

  const isChangeInputValueEnabled = () => {

    return false;

  };

  const isButtonEnabled = () => {

    return false;

  };

  const searchResult = 1;
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <form>
        <div class="form-group">
          <fieldset>
            <label for="pokedexNumber">Number</label>
            <input className="form-control" name="pokedexNumber" value={starterValue} type="number" min="1" max="151" step="1" />
          </fieldset>
          </div>
        </form>
        <button  type="submit" className="btn btn-primary mt-2" onClick={ () => {} }>
          Ask the Professor
        </button>

      </div>
      { searchResult.length === 0 && pokemonContent }
      { searchResult.length > 0 && Output }
      
      <Footer />

    </div>
  )
}

export default App
