const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
        return state = [ ...state, action.item]
      }
    case 'REMOVE_FROM_CART': {
        return state.filter(({ id }) => id !== action.id);   
    }
    default: {
      return state;
    }
  }
};
