/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_SEARCH_TEXT,
  RECIEVE_PRODUCTS,
  SELECT_PRODUCT,
} from './constants';

export const initialState = fromJS({
  searchText: '',
  searching: false,
  productList: [],
  chosenProduct: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_SEARCH_TEXT:
      return state.set('searchText', action.text).set('chosenProduct', null);
    case RECIEVE_PRODUCTS:
      return state.set('productList', action.products);
    case SELECT_PRODUCT:
      return state.set('chosenProduct', action.product);
    default:
      return state;
  }
}

export default homeReducer;
