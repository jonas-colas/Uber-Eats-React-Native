let defaultState = {
  selectedItems: {items: [], restaurantName: ''}
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = { ...state };
      if(action.payload.checkboxValue) {
        console.log("added to cart");
        
        newState.selectedItems = {
          items: [ ...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
      }else{
        console.log("Removed from cart");
      }

      console.log(newState);
      return newState;
    }
    default: 
      return state;
  };
};

export default cartReducer;