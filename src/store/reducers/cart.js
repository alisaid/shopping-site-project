const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {        
      if (state.findIndex(i => i.id === action.item.id) > -1) {
        return state;
      } else {
        return state = [ ...state, action.item]
      }
    }
    case 'REMOVE_FROM_CART': {
        return state.filter(({ id }) => id !== action.id);   
    }
    default: {
      return state;
    }
  }
};
