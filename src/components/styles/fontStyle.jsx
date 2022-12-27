import styled, { createGlobalStyle } from "styled-components";
import SUIT from "../styles/SUIT-Variable.ttf"
export const FontStyles = createGlobalStyle`
@font-face{
    font-family: 'SUIT_Nara';
    src: url(${SUIT}) format('suit');
`