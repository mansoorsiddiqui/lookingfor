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
  SET_POSITION,
  RECIEVE_STORES,
} from './constants';

export const initialState = fromJS({
  coords: null,
  searchText: '',
  searchingProducts: false,
  productList: [],
  chosenProduct: null,
  searchingStores: false,
  storeList: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_POSITION:
      return state.set('coords', action.position.coords);
    case CHANGE_SEARCH_TEXT:
      return state
        .set('searchText', action.text)
        .set('chosenProduct', null)
        .set('searchingProducts', true)
        .set('searchingStores', false);
    case RECIEVE_PRODUCTS:
      return state
        .set('productList', action.products)
        .set('searchingProducts', false);
    case SELECT_PRODUCT:
      return state
        .set('chosenProduct', action.product)
        .set('searchingStores', true);
    case RECIEVE_STORES:
      return state
        .set('storeList', action.stores)
        .set('searchingStores', false);
    default:
      return state;
  }
}

export default homeReducer;
