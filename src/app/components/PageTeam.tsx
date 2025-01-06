import './PageTeam.scss';

const PageTeam = () => {
  return (
    <div className='container'>
      <label>
        <input type='radio' className={`nes-radio`} name='answer' checked />
        <span>
          <div className='row' id='pokemonOne'>
            Yes
          </div>
        </span>
      </label>

      <label>
        <input type='radio' className={`nes-radio`} name='answer' />
        <span>
          <div className='row' id='pokemonTwo'>
            No
          </div>
        </span>
      </label>

      <div className='row' id='pokemonThree'></div>
      <div className='row' id='pokemonFour'></div>
      <div className='row' id='pokemonFive'></div>
      <div className='row' id='pokemonSix'></div>
    </div>
  );
};

export default PageTeam;
