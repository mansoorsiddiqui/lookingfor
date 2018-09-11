/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, CHANGE_SEARCH_TEXT, GET_PRODUCTS } from './constants';

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