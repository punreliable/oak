const initState = {
  popular: [],
  new: [],
  latest: [],
  searched: [],
};

const pokemonReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'FETCH_POKEMON':
      return { ...state };
    default: {
      return { ...state };
    }
  }
};

export default pokemonReducer;
