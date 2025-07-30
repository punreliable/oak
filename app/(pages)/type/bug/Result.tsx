import React from 'react';
import prettyName from '../../../../utilities/prettyName';

const Result = (props: any) => {
  return (
    <div className='App'>
      <h1 className='responsive-h1 text-center gameboy'>{prettyName(props.type.name)}</h1>
    </div>
  );
};

export default Result;
