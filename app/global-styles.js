import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #black;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label,
  input {
    font-family: 'Montserrat', Times, 'Times New Roman', serif !important;
    line-height: 1.5em;
    color: white !important;
  }

  input {
    font-size: 24px;
  }

`;
