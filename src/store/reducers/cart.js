const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
        if(state.indexOf(action.item) === -1){
          action.item.quantity = 1
          return [...state, action.item]
        } else {
          const array = state.filter(e => e.id === action.item.id)
          action.item.quantity = array.length + 1
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
