/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CHANGE_SEARCH_TEXT } from './constants';

export const initialState = fromJS({
  searchText: '',
  searching: false,
  productList: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_SEARCH_TEXT:
      return state.set('searchText', action.text);
    default:
      return state;
  }
}

export default homeReducer;
