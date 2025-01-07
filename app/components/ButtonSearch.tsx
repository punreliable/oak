import React, { useState } from 'react';

const [isValid, setIsValid] = useState(false);

function isValidInput() {
  setIsValid(true);
}

const ButtonSearch = () => {
  {
    isValid ? <button>Search</button> : <button disabled>Search</button>;
  }
};

export default ButtonSearch;
