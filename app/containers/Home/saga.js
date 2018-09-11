import { call, put, push, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_PRODUCTS } from './constants';

const apiKey = 'MDowMWYyMDYzOC1iNWZiLTExZTgtODdkZC1iMzk5ZjJlZWExYjc6MW45bjg3SEFkTlkwVEF5aVE5SXhpTXZBdGtpTjhiN01FaVow';

// Individual exports for testing
export function* getProducts(action) {
  const requestUrl = `https://lcboapi.com/products/?q=${action.text}`;
  const options = {
    method: 'POST',
    headers: {
      Authorization: apiKey,
    },
  };

  try {
    const response = yield call(request, requestUrl, options);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default function* watchProfileRequest() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
