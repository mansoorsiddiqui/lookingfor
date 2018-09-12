/*
 *
 * Home actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_SEARCH_TEXT,
  GET_PRODUCTS,
  RECIEVE_PRODUCTS,
  SELECT_PRODUCT,
  SET_POSITION,
  GET_STORES,
  RECIEVE_STORES,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeSearchText(text) {
  return {
    type: CHANGE_SEARCH_TEXT,
    text,
  };
}

export function getProducts(text) {
  return {
    type: GET_PRODUCTS,
    text,
  };
}

export function recieveProducts(products) {
  return {
    type: RECIEVE_PRODUCTS,
    products,
  };
}

export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    product,
  };
}

export function setPosition(position) {
  return {
    type: SET_POSITION,
    position,
  };
}

export function getStores(productId, coords) {
  return {
    type: GET_STORES,
    productId,
    coords,
  };
}

export function recieveStores(stores) {
  return {
    type: RECIEVE_STORES,
    stores,
  };
}
