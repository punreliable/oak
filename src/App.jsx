import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import * as bootstrap from "bootstrap";

import Output from "./components/Output";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";

// import SingleView from "./components/SingleView";
// import SearchForm from "./components/SearchForm";

const App = () => {

  let pokemonContent = <p>No content was found</p>;
  const starterValue = 1;
  const [count, setCount] = useState(0);
  const onButtonClickHandler = () => {};
  const onChangeInputValueHandler = () => {};
  const fetchDataHandler = () => {};
  const displayDataHandler = () => {};
  const isChangeInputValueEnabled = () => {
    return false;
  };

  const isButtonEnabled = () => {
    return false;o
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/results",
          element: <ResultsPage />,
        },
      ],
    },
  ]);

//   const pokemon = [
//     {
//       id: "p25",
//       name: "Pikachu",
//       hp: 12,
//       type: "",
//       description: "",
//       height: "",
//       length: "",
//       weakness: "",
//       resistance: "",
//       entryNumber: 25,
//       baseXP: 0,
//     },
//   ];
//
//   const searchResult = 1;


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
