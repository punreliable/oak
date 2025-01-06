import React from 'react';
import pokeball from '../assets/pokeball.svg';
import SearchForm from './SearchForm';

const Search = (props: any) => {
  const entryDataHandler = (enteredData: any) => {
    // console.log("hello");
    const entryData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    // console.log(entryData);
    props.enteredData(entryData);
  };

  const saveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className='App'>
      <div>
        <a href='http://pokeapi.co' target='_blank' title='Official Pokémon API'>
          <img src={pokeball} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1 className='title'>Search the Pokedex</h1>
      <div className='card'>
        <SearchForm onSubmitEntryData={entryDataHandler} />
      </div>
    </div>
  );
};

export default Search;
