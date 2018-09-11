/**
 *
 * Logo
 *
 */

import styled from 'styled-components';

const Logo = styled.a`
  font-family: 'Raleway';
  font-weight: 900;
  font-size: 40px;
  color: white;
  text-decoration: none;
  text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.6);
  top: 5px;
  position: relative;
  margin: 0 12px;
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

export default Logo;
