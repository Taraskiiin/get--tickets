import { createGlobalStyle } from 'styled-components';

const backgroundColor = '#f3f7fa';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
      background-color: ${backgroundColor};
  }
  .container{
      padding: 0 50px;
  }
  @media (max-width: 768px) {
      .container {
        padding: 0 10px;
      }
  }
  `;
