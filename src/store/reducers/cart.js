const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (state.indexOf(action.item) === -1) {
        action.item.quantity = typeof action.quantity === 'number' ? action.quantity : 1;
        return [...state, action.item]
      } else {
        const index = state.indexOf(action.item)
        if(state[index].quantity >= 10) {
          alert('maximum item')
          return state
        }
        state[index].quantity = typeof action.quantity === 'number' ? action.quantity : state[index].quantity + 1
        return [...state]          
    }}
    case "DELETE_ALL": {
      return state.filter(({ id }) => id !== action.id);
    }

    default: {
      return state;
    }
  }
};
