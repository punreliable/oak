import React from 'react';
import { useState } from 'react';
import ButtonSearch from './ButtonSearch';

const SearchForm = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
    console.log('Number changed to: ' + event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Submitted!');

    const entryData = {
      id: enteredNumber,
    };
    console.log("Here's where the error occurs!");
    props.onSubmitEntryData(entryData);
    //console.log(entryData);
    setEnteredNumber(1);
    // this.props.history.push("/results");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <fieldset>
          <label htmlFor='entryNumber'>Number</label>
          <input
            className='form-control'
            type='number'
            min='1'
            max='151'
            step='1'
            inputMode='numeric'
            pattern='\d*'
            placeholder='25'
            value={enteredNumber}
            onChange={numberChangeHandler}
            required
          />
          <button type='submit' className='btn btn-primary mt-2'>
            Ask the Professor
          </button>
        </fieldset>
      </div>
    </form>
  );
};

export default SearchForm;
