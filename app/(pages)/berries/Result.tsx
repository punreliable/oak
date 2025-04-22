import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import prettyName from '../../../utilities/prettyName';
import professorOak from '../../../assets/oak.svg';

const Result = (props: any) => {

  return (
    <div className='App'>
      <h1>Berry #{props.berry.id}</h1>

      <h2 className='berryName'>{prettyName(props?.berry.name)}</h2>
      <div className='row rowStats'>
        <div className='col-md-12 col-lg-3 stats'>
          {props.height && <p>Height: {props.berry.height}in</p>}
          {props.weight && <p>Weight: {props.berry.weight}in</p>}
          {props.berry.growth_time && <p>Growth Time: {props.berry.growth_time} days</p>}
          {props.berry.max_harvest && <p>Max Harvest: {props.berry.max_harvest}in</p>}
          {props.natural_gift_power && <p>Natural Gift Power: {props.berry.natural_gift_power}in</p>}
          {props.berry.size && <p>Size: {props.berry.size}in</p>}
          {props.berry.smoothness && <p>Smoothness: {props.berry.smoothness}</p>}
          {props.berry.soil_dryness && <p>Soil Dryness: {props.berry.soil_dryness}</p>}
        </div>
      </div>
    </div>
  );
};

export default Result;
