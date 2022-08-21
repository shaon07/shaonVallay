import { ADD_TO_CART, CALL_API, GET_BRAND, GET_CATEGORY, GET_PRODUCTS, REMOVE_FROM_CART } from "../constants/all_const"

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

export const add_to_cart_product = (data) => {
  return {
    type : ADD_TO_CART,
    payload:data
  }
}

export const remove_from_cart = (data) => {
  return {
    type : REMOVE_FROM_CART,
    payload : data
  }
}
