/**
 *
 * Root
 *
 */

import styled from 'styled-components';

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 !important;
  background: black;
  color: white;
  font-size: 24px;
  display: grid;
  justify-content: center;
  align-items: center;
  background: #5536c4; /* Old browsers */
  background: -moz-linear-gradient(
    45deg,
    #5536c4 0%,
    #ad1283 90%,
    #d64444 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    #5536c4 0%,
    #ad1283 90%,
    #d64444 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    #5536c4 0%,
    #ad1283 90%,
    #d64444 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5536c4', endColorstr='#d64444',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
`;

export default Root;
