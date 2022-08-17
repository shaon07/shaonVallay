import { CALL_API, GET_BRAND, GET_CATEGORY, GET_PRODUCTS } from "../constants/all_const"

export const CALL_API_action = () => {
  return {
    type: CALL_API
  }
}

export const GET_CATEGPRY_API = (data) => {
  return {
    type: GET_CATEGORY,
    payload: data,
  }
}

export const GET_PRODUCT_API = (data) => {
  return {
    type: GET_PRODUCTS,
    payload: data
  }
}

export const GET_BRAND_API = (data) => {
  return {
    type: GET_BRAND,
    payload: data
  }
}
