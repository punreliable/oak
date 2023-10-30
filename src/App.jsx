import { useState, useEffect } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
//import RootLayout from "./pages/Root";
//import HomePage from "./pages/Home";
//import ResultsPage from "./pages/Results";
import axios from 'axios';

const App = () => {
  
  const number = Math.floor(Math.random() * 151) + 1;
  const pokeNo = number.toString();
  const requestURL = 'https://pokeapi.co/api/v2/pokemon/'+ pokeNo;
  
  const [pokemon, setPokemon] = useState(null);
  
  const prettyName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  
  useEffect(() => {
    axios.get( requestURL )
    .then( res => { 
      setPokemon(res.data) 
      console.log(res.data) })
    .catch( err => { console.log(err) })
  }, [])
    
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <HomePage />,
  //       },
  //       {
  //         path: "/results",
  //         element: <ResultsPage />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div className="App">
      { pokemon && (
        <h1>Hello, { prettyName( pokemon.name ) }!</h1>
     
      ) }
      {/* <RouterProvider router={router} /> */}
    </div>
  );
};

export default App;
