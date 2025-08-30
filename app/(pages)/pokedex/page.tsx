'use client';
import React from 'react';
import { PokedexRowOne } from './PokedexRowOne';
import { PokedexRowTwo } from './PokedexRowTwo';
import { PokedexRowThree } from './PokedexRowThree';
import { PokedexRowFour } from './PokedexRowFour';
import { PokedexRowFive } from './PokedexRowFive';
import { PokedexRowSix } from './PokedexRowSix';
import { PokedexRowSeven } from './PokedexRowSeven';

const KantoPokedex = () => {
  return (
    <div className='container'>
      <section className='nesContainer nes-container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-center'>Kanto Pokedex</h1>
          </div>
        </div>
        <div className='row'>
          {/* <div className='nes-table-responsive'> */}
          <PokedexRowOne />
          <PokedexRowTwo />
          <PokedexRowThree />
          <PokedexRowFour />
          <PokedexRowFive />
          <PokedexRowSix />
          <PokedexRowSeven />
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default KantoPokedex;
