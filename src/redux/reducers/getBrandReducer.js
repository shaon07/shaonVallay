import { CALL_API, GET_BRAND } from "../constants/all_const"

const initState = {
  loading: false,
  data: []
}

const getBrandReducer = (state = initState, action) => {
  switch (action.type) {

    case CALL_API:
      return {
        ...state,
        loading: true
      }

    case GET_BRAND:
      return {
        loading: false,
        data: action.payload
      }

    default: return state;
  }
}

export default getBrandReducer;