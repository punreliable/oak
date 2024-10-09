import React from "react";
import imgUrl from "./assets/oak.svg";

// import * as oak from '../assets/oak.svg'
// import imgUrl from "../assets/oak.png";
// document.getElementById("img").src = imgUrl;
import "./ProfessorOak.scss";

const ProfessorOak = () => {
  return (
    <>
      <div className="row">
        <img
          src={imgUrl}
          id="img"
          alt="Image of Professor Oak"
          className="imgProfessor"
          height="512"
          width="512"
        />
      </div>
    </>
  );
};

export default ProfessorOak;
