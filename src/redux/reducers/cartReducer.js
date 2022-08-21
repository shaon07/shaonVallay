import { ADD_TO_CART } from "../constants/all_const";

const initState = {
  data : []
}

const cartReducer = (state=initState,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      
      return {
        data : [...state.data,action.payload]
      }
  
    default:
      return state;
  }
}

export default cartReducer;