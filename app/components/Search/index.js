/**
 *
 * Search
 *
 */

import styled from 'styled-components';

const Search = styled.a`
  color: white;
  margin: 0 16px;
  transition: all 0.12s linear;
  padding-bottom: 6px;
  border-bottom: 1px solid lightgrey;
  &:hover,
  &:focus {
    color: white;
    padding-bottom: 12px;
    border-bottom: 3px solid white;
  }
`;

export default Search;
