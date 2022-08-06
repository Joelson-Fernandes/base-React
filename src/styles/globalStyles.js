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
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background-color: ${colors.successColor};
    color: #fff;
  }
`;

export const Container = styled.section`
  max-width: 500px;
  background-color: ${colors.primaryColor};
  margin: 20px auto;
`;
