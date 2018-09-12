import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  GET_PRODUCTS,
  RECIEVE_PRODUCTS,
  GET_STORES,
  RECIEVE_STORES,
} from './constants';

const lcboApiKey =
  'Token MDowMWYyMDYzOC1iNWZiLTExZTgtODdkZC1iMzk5ZjJlZWExYjc6MW45bjg3SEFkTlkwVEF5aVE5SXhpTXZBdGtpTjhiN01FaVow';

// Get list of products based on search text
export function* getProducts(action) {
  const requestUrl = `https://lcboapi.com/products?q=${action.text}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: lcboApiKey,
    },
  };

  try {
    const response = yield call(request, requestUrl, options);
    yield put({ type: RECIEVE_PRODUCTS, products: response.result });
  } catch (error) {
    // console.log(error);
  }
}

// Get list of products based on search text
export function* getStores(action) {
  const requestUrl = `https://lcboapi.com/stores?&lat=${
    action.coords.latitude
  }&lon=${action.coords.longitude}&product_id=${action.productId}`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: lcboApiKey,
    },
  };

  try {
    const response = yield call(request, requestUrl, options);
    yield put({ type: RECIEVE_STORES, stores: response.result });
  } catch (error) {
    // console.log(error);
  }
}
export default function* watchProfileRequest() {
  yield takeLatest(GET_PRODUCTS, getProducts);
  yield takeLatest(GET_STORES, getStores);
}
