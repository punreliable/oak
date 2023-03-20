import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as bootstrap from "bootstrap";
import "./App.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ResultsPage from "./pages/Results";

const App = () => {
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

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
