import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

`;

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
