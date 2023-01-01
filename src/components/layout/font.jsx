import { Children } from "react";
import { createGlobalStyle } from "styled-components";
import SuitFont from '../../styles/SUIT-Variable.ttf'

  const GlobalFont = createGlobalStyle`
    @font-face {
      font-family: 'Suit-Variable';
      src: local('Suit-Variable');
      font-style: normal;
      src: url(${SuitFont}) format('truetype');}
`
    


export default GlobalFont;