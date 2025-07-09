import React from 'react';
import Image from 'next/image';
import prettyName from '../../../utilities/prettyName';

const Result = (props: any) => {
  const bucketUrl: string = `https://punreliable-oak.s3.us-east-1.amazonaws.com/sprites/items/berries/`;

  return (
    <div className='App'>
      <h1>Berry #{props.berry.id}</h1>

      <h2 className='berryName'>{prettyName(props?.berry.name)}</h2>
      {props.berry && (
        <Image
          className='nes-avatar avatar itemAvatar'
          alt='Pokemon is loading'
          id='avatar'
          height={64}
          width={64}
          src={bucketUrl + `${props.berry.name}-berry.png`}
        />
      )}

      <div className='row rowStats'>
        <div className='col-md-12 col-lg- stats'>
          {props.height && <p>Height: {props.berry.height}in</p>}
          {props.weight && <p>Weight: {props.berry.weight}in</p>}
          {props.berry.growth_time && <p>Growth Time: {props.berry.growth_time} days</p>}
          {props.berry.max_harvest && <p>Max Harvest: {props.berry.max_harvest}</p>}
          {props.natural_gift_power && <p>Natural Gift Power: {props.berry.natural_gift_power}</p>}
          {props.berry.size && <p>Size: {props.berry.size}in</p>}
          {props.berry.smoothness && <p>Smoothness: {props.berry.smoothness}</p>}
          {props.berry.soil_dryness && <p>Soil Dryness: {props.berry.soil_dryness}</p>}
        </div>
      </div>
    </div>
  );
};

export default Result;
