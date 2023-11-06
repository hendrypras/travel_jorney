import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCESS } from './constant'

const myFirstReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.products }
    case GET_PRODUCTS_ERROR:
      return { ...state, error: action.error }
    default:
      return state
  }
}
export default myFirstReducer
