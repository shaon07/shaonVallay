import { CALL_API, GET_CATEGORY } from "../constants/all_const"

const initState = {
  loading: false,
  data: []
}
const getCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case CALL_API:
      return {
        ...state,
        loading: true,
      }

    case GET_CATEGORY:
      return {
        loading: false,
        state: action.payload
      }
    default: return state
  }
}

export default getCategoryReducer;