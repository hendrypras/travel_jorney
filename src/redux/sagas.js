import { takeEvery, call, put } from 'redux-saga/effects'
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from './constant'
import { callAPI } from '../domain/api'

const getProducts = () => {
  return callAPI({
    baseUrl: 'https://fakestoreapi.com',
    endpoint: '/products',
    method: 'GET',
  })
}
function* workGetProducts() {
  try {
    const products = yield call(getProducts)
    yield put({ type: GET_PRODUCTS_SUCCESS, products })
  } catch (error) {
    yield put({ type: GET_PRODUCTS_ERROR }, error)
  }
}

function* mySaga() {
  yield takeEvery(GET_PRODUCTS, workGetProducts)
}

export default mySaga
