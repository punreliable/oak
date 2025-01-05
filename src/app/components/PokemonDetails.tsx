import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const PokemonDetail = () => {
  const { data, pokemon } = useSelector((state) => state.detail);

  return (
    <div className="card-shadow">
      <div className="detail">
        <div className="stats">
          <div className="rating">
            <h3>{pokemon.name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
