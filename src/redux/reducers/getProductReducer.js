import { CALL_API, GET_PRODUCTS } from "../constants/all_const"

const initState = {
  loading: false,
  data: []
}
const getProductReducer = (state = initState, action) => {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        loading: true,
      }

    case GET_PRODUCTS:
      return {
        loading: false,
        state: action.payload
      }
    default: return state
  }
}

export default getProductReducer;